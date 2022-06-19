import React from "react";

const FormRow = ({ value, handleChange, type, name, labelText }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        className='form-input'
      />
    </div>
  );
};

export default FormRow;
