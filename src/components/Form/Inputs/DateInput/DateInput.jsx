import React from "react";

function DateInput({ required, label, name, error, register }) {
  return (
    <div className="input-container DateInput">
      {label && (
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>
      )}
      <input
        type="date"
        id={name}
        name={name}
        {...register(name, { required: `${label} is required` })}
      />
      {error && <p className="error">* {error.message}</p>}
    </div>
  );
}

export default DateInput;
