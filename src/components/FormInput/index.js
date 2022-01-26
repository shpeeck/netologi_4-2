import PropTypes from "prop-types";

export default function FormInput({ type, step, name, id, onChange }) {
  return (
    <div className="table-input">
      <label htmlFor={id}>{name}</label>
      <input type={type} step={step} id={id} onChange={onChange} />
    </div>
  );
}

FormInput.propTypes = {
  onChange: PropTypes.func
};
