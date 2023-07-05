import React from "react";
import Checkbox4 from "../Checkbox4";
import Cell01Text2 from "../Cell01Text2";
import InputFields42 from "../InputFields42";
import InputFields52 from "../InputFields52";
import InputFields62 from "../InputFields62";
import "./TableRow62.css";

function TableRow62(props) {
  const {
    cell01Text2Props,
    inputFields41Props,
    inputFields42Props,
    inputFields43Props,
    inputFields44Props,
    inputFields51Props,
    inputFields52Props,
    inputFields53Props,
  } = props;

  return (
    <div className="table-row-18">
      <div className="inputs-79">
        <Checkbox4 />
        <div className="row-data-60">
          <Cell01Text2 label={cell01Text2Props.label} groupProps={cell01Text2Props.groupProps} />
          <InputFields42 className={inputFields41Props.className} frame20Props={inputFields41Props.frame20Props} />
          <InputFields42 frame20Props={inputFields42Props.frame20Props} />
          <InputFields42 className={inputFields43Props.className} frame20Props={inputFields43Props.frame20Props} />
          <InputFields42 frame20Props={inputFields44Props.frame20Props} />
          <InputFields52 placeholderText={inputFields51Props.placeholderText} />
          <InputFields62 />
          <InputFields52
            placeholderText={inputFields52Props.placeholderText}
            className={inputFields52Props.className}
          />
          <InputFields52
            placeholderText={inputFields53Props.placeholderText}
            className={inputFields53Props.className}
          />
        </div>
      </div>
      <div className="divider-296"></div>
    </div>
  );
}

export default TableRow62;
