import PropTypes from "prop-types";

export default function Table({ wlk, onDel }) {
  if (wlk.lenght !== 0) {
    wlk = wlk.sort(function (a, b) {
      if (b.date > a.date) {
        return 1;
      }
      if (b.date < a.date) {
        return -1;
      }
      return 0;
    });

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

Table.propTypes = {
  wlk: PropTypes.array,
  onDel: PropTypes.func
};
