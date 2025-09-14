import React from "react";

function TextInput({ required, label, name, placeholder }) {
  return (
    <div className="input-container TextInput">
      {label && (
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>
      )}
      <input type="text" id={name} name={name} placeholder={placeholder} />
    </div>
  );
}

export default TextInput;
