import React, { useState } from "react";
import "./css/styles.css";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App() {
  const [data, setData] = useState([]);

  function isDate(newDate, newKm) {
    const isdat = [...data.filter((i) => newDate === i.date)];
    return isdat.length;
  }

  const addData = (newDate, newKm) => {
    if (newDate && newKm) {
      if (isDate(newDate, newKm) !== 0) {
        const ff = [...data.filter((i) => newDate !== i.date)];
        const fa = [...data.filter((i) => newDate === i.date)];
        setData([
          {
            id: Date.now(),
            date: newDate,
            km: Number(newKm) + Number(fa[0].km)
          },
          ...ff
        ]);
      } else {
        setData([{ id: Date.now(), date: newDate, km: newKm }, ...data]);
      }
    }
  };

  const onDel = (id) => {
    setData([...data.filter((newDate) => newDate.id !== id)]);
  };

  return (
    <div className="App">
      <Form fun={addData} />
      <table className="table-wrapper">
        <thead>
          <tr>
            <th className="table-item">Дата (ДД.ММ.ГГ)</th>
            <th className="table-item">Пройдено км</th>
            <th className="table-item">Действия</th>
          </tr>
        </thead>
        <tbody className="tbodyx">
          <Table wlk={data} onDel={onDel} />
        </tbody>
      </table>
    </div>
  );
}
