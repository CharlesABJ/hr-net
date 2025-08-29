import React from "react";
import { Link } from "react-router-dom";

function CardLink({ link, blank, icon, title, children }) {
  return link ? (
    <Link className="CardLink" to={link} target={blank ? "_blank" : "_self"}>
      <div className="icon">{icon}</div>
      <span className="title">{title}</span>
      <div className="description">{children}</div>
    </Link>
  ) : (
    <div className="CardLink">
      <div className="icon">{icon}</div>
      <span className="title">{title}</span>
      <div className="description">{children}</div>
    </div>
  );
}

export default CardLink;
