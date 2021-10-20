import React from "react";
import "./PC1.css";
import Input from "../ApplyNow/Input";

const PCForum = (props) => {
  return (
    <form className="form">
      <Input
        label="PROGRAM CONDITION | Please ,  Enter Your Level!"
        label1=""
        input={{
          id: "Level",
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <input />
      <button className=""> APPLY Now </button>
    </form>
  );
};

export default PCForum;
