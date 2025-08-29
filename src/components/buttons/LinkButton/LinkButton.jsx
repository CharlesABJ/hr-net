import React from "react";
import { Link } from "react-router-dom";

function LinkButton({ link, color, children }) {
  return (
    <Link className={`LinkButton button ${color}`} to={link}>
      {children}
    </Link>
  );
}

export default LinkButton;
