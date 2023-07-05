import React from "react";
import Cell01Text3 from "../Cell01Text3";
import Cell02Text from "../Cell02Text";
import Table from "../Table";
import Cell06Text from "../Cell06Text";
import "./RowData4.css";

function RowData4(props) {
  const {
    cell01Text3Props,
    cell02Text1Props,
    cell02Text2Props,
    cell02Text3Props,
    cell06Text1Props,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
  } = props;

  return (
    <div className="row-data-41">
      <Cell01Text3 errorProps={cell01Text3Props.errorProps} warningProps={cell01Text3Props.warningProps} />
      <Cell02Text>{cell02Text1Props.children}</Cell02Text>
      <Table />
      <Cell02Text className={cell02Text2Props.className}>{cell02Text2Props.children}</Cell02Text>
      <Cell02Text>{cell02Text3Props.children}</Cell02Text>
      <Cell06Text>{cell06Text1Props.children}</Cell06Text>
      <Cell06Text>{cell06Text2Props.children}</Cell06Text>
      <Cell06Text>{cell06Text3Props.children}</Cell06Text>
      <Cell06Text>{cell06Text4Props.children}</Cell06Text>
    </div>
  );
}

export default RowData4;
