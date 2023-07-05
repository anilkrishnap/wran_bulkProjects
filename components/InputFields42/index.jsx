import React from "react";
import Frame20 from "../Frame20";
import "./InputFields42.css";

function InputFields42(props) {
  const { className, frame20Props } = props;

  return (
    <div className={`input-fields-541 ${className || ""}`}>
      <Frame20 placeholderText={frame20Props.placeholderText} />
      <div className="elements-110"></div>
    </div>
  );
}

export default InputFields42;
