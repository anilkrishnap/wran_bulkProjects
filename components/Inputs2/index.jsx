import React from "react";
import Label2 from "../Label2";
import InputFields3 from "../InputFields3";
import "./Inputs2.css";

function Inputs2(props) {
  const { className, inputFields3Props } = props;

  return (
    <div className={`inputs-18 ${className || ""}`}>
      <Label2 />
      <InputFields3 placeholderText={inputFields3Props.placeholderText} />
    </div>
  );
}

export default Inputs2;
