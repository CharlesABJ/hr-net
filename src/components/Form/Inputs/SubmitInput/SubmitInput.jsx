import React from "react";

function SubmitInput({ label, name }) {
  return (
    <button name={name} type="submit" className="SubmitInput input">
      {label}
    </button>
  );
}

export default SubmitInput;
