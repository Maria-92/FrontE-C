import React from "react";
import PCForum from "./PCForum";
//import Classes from "./PC1.css";
const PCList = (props) => {
  return (
    <li className="meal">
      <div>
        <h3>{props.name}</h3>
        <div className="description">{props.description}</div>
      </div>
      <div>
        {" "}
        <PCForum />
      </div>
    </li>
  );
};

export default PCList;
