import React from "react";
import "./Button.css";

const Button = ({ action, title }) => {
  return (
    <button className="btn" onClick={action}>
      {title}
    </button>
  );
};

export default Button;
