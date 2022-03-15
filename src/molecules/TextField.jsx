import React from "react";
import "./TextField.css";

const TextField = ({ multiline = false, title, value, onChange }) => {
  const displayInput = () => {
    if (multiline)
      return (
        <textarea
          className="textfield__textarea"
          type="text"
          value={value}
          onChange={onChange}
        />
      );
    return <input type="text" value={value} onChange={onChange}></input>;
  };
  return (
    <section className="textfield">
      <label className="textfield__label">{title}</label>
      {displayInput()}
    </section>
  );
};

export default TextField;
