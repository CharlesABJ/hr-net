import React from "react";

function DateInput({ required, label, name }) {
  return (
    <div className="input-container DateInput">
      {label && (
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>
      )}
      <input type="date" id={name} name={name} />
    </div>
  );
}

export default DateInput;
