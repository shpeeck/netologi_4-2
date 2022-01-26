import React, { useState } from "react";
import PropTypes from "prop-types";
import FormInput from "../FormInput";
import FormButton from "../FormButton";

export default function Form({ fun }) {
  const [date, setDate] = useState();
  const [walk, setWalk] = useState();
  const onRegister = (e) => {
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
        step="any"
        id={"walk"}
        name={"Пройдено км"}
        onChange={onWalkChange}
      />
      <FormButton />
    </form>
  );
}

Form.propTypes = {
  fun: PropTypes.func
};
