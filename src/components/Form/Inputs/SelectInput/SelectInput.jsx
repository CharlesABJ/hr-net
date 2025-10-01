import React, { useState } from "react";

function SelectInput({
  required,
  label,
  name,
  placeholder,
  options = [],
  error,
  clearErrors,
  setValue,
  register,
  watch,
}) {
  const [isOpen, setIsOpen] = useState(false);

  // Récupère la valeur actuelle dans le formulaire
  const selectedValue = watch(name) || "";

  const handleSelect = (value) => {
    setValue(name, value);
    clearErrors(name);
    setIsOpen(false);
  };

  return (
    <div className="input-container SelectInput">
      {label && (
        <label htmlFor={name}>
          {label} {required && "*"}
        </label>
      )}

      {/* Fake Select */}
      <div
        className="fake-select input"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{selectedValue || placeholder}</span>
        <span className="chevron"></span>
      </div>

      {isOpen && (
        <ul className="options-list">
          {options.map((option, index) => (
            <li
              className={`option ${selectedValue === option ? "selected" : ""}`}
              key={index}
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}

      {/* Hidden select */}
      <select
        {...register(name, { required: `${label} is required` })}
        value={selectedValue}
        onChange={(e) => handleSelect(e.target.value)}
        style={{ display: "none" }}
      >
        <option value="">{placeholder}</option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>

      {error && <p className="error">* {error.message}</p>}
    </div>
  );
}

export default SelectInput;
