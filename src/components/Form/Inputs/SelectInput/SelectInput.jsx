import React from "react";

function SelectInput({ required, label, name, placeholder }) {
  return (
    <div data-name={name} className="input-container SelectInput">
      <span>
        {label} {required && "*"}
      </span>
      <div className="fake-select input">
        <span className="chevron"></span>
        {placeholder}
      </div>
    </div>
  );
}

export default SelectInput;
