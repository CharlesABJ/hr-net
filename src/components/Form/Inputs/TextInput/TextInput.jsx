import React from "react";

function TextInput({ required, label, name, placeholder, register, error }) {
  return (
    <div className="input-container TextInput">
      {label && (
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>
      )}

      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        {...register(name, { required: `${label} is required` })}
      />

      {error && <p className="error">* {error.message}</p>}
    </div>
  );
}

export default TextInput;
