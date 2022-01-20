import React from "react";

export default function Table({ wlk, onDel }) {
  if (wlk.lenght !== 0) {
    return wlk.map(function (n) {
      return (
        <tr key={n.id}>
          <td className="table-item">{n.date}</td>
          <td className="table-item">{n.km}</td>
          <td className="table-item">
            <button onClick={() => onDel(n.id)}>del</button>
          </td>
        </tr>
      );
    });
  }
}
