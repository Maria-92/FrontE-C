import React from "react";
import "./input.css";

const Input = (props) => {
  return (
    <div className="input">
      <label htmlFor={props.input.id} className="label">
        {" "}
        {props.label}
      </label>
      <input {...props.input} />
    </div>
  );
};

export default Input;
