import React from "react";
import Cell01Text7 from "../Cell01Text7";
import Cell02Text from "../Cell02Text";
import Cell06Text from "../Cell06Text";
import "./RowData22.css";

function RowData22(props) {
  const {
    cell01TextProps,
    cell02Text1Props,
    cell02Text2Props,
    cell02Text3Props,
    cell02Text4Props,
    cell06Text1Props,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
  } = props;

  return (
    <div className="row-data-22">
      <Cell01Text7 statusIconSmallProps={cell01TextProps.statusIconSmallProps} />
      <Cell02Text>{cell02Text1Props.children}</Cell02Text>
      <Cell02Text>{cell02Text2Props.children}</Cell02Text>
      <Cell02Text className={cell02Text3Props.className}>{cell02Text3Props.children}</Cell02Text>
      <Cell02Text>{cell02Text4Props.children}</Cell02Text>
      <Cell06Text>{cell06Text1Props.children}</Cell06Text>
      <Cell06Text>{cell06Text2Props.children}</Cell06Text>
      <Cell06Text>{cell06Text3Props.children}</Cell06Text>
      <Cell06Text>{cell06Text4Props.children}</Cell06Text>
    </div>
  );
}

export default RowData22;
