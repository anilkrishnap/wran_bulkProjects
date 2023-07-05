import React from "react";
import Label from "../Label";
import InputFields2 from "../InputFields2";
import "./Inputs.css";

function Inputs(props) {
  const { className, inputFields2Props } = props;

  return (
    <div className={`inputs-16 ${className || ""}`}>
      <Label />
      <InputFields2 placeholderText={inputFields2Props.placeholderText} />
    </div>
  );
}

export default Inputs;
