import React, { useState } from "react";
import "./css/styles.css";
import Form from "./components/Form";
import Table from "./components/Table";

export default function App() {
  const [data, setData] = useState([]);
  const addData = (i, r) => {
    setData([{ id: Date.now(), date: i, km: r }, ...data]);
    console.log(data);
  };
  const onDel = (id) => {
    console.log(id);
    setData([...data.filter((i) => i.id !== id)]);
    // setData(data.filter((p) => p !== e));
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
