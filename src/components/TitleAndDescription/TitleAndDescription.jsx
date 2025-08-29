import React from "react";

function TitleAndDescription({ bigTitle, title, children }) {
  return (
    <section className={`TitleAndDescription ${bigTitle ? "big-title" : ""}`}>
      <h1 className="title">{title}</h1>
      <div className="description">{children}</div>
    </section>
  );
}

export default TitleAndDescription;
