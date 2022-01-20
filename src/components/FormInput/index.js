import React from "react";

export default function FormInput({ type, name, id, onChange }) {
  return (
    <div className="table-input">
      <label htmlFor={id}>{name}</label>
      <input type={type} id={id} onChange={onChange} />
    </div>
  );
}
