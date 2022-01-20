import React, { useState } from "react";
import FormInput from "../FormInput";
import FormButton from "../FormButton";

export default function Form({ fun }) {
  const [date, setDate] = useState();
  const [walk, setWalk] = useState();
  const onRegister = (e) => {
    // console.log("Date", date);
    // console.log("Walk", walk);
    fun(date, walk);
    e.preventDefault();
  };
  const onDateChange = (e) => {
    setDate(e.target.value);
  };
  const onWalkChange = (e) => {
    setWalk(e.target.value);
  };
  return (
    <form name="form" onSubmit={onRegister}>
      <FormInput
        type="date"
        id={"date"}
        name={"Дата (ДД.ММ.ГГ)"}
        onChange={onDateChange}
      />
      <FormInput
        type="number"
        id={"walk"}
        name={"Пройдено км"}
        onChange={onWalkChange}
      />
      <FormButton />
    </form>
  );
}
