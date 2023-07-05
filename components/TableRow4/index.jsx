import React from "react";
import RowData7 from "../RowData7";
import "./TableRow4.css";

function TableRow4(props) {
  const { rowData7Props } = props;

  return (
    <div className="table-row-4-1">
      <div className="inputs-63">
        <img className="checkbox-40" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData7
          cell01Text5Props={rowData7Props.cell01Text5Props}
          cell02Text1Props={rowData7Props.cell02Text1Props}
          cell02Text2Props={rowData7Props.cell02Text2Props}
          cell06Text1Props={rowData7Props.cell06Text1Props}
          cell06Text2Props={rowData7Props.cell06Text2Props}
          cell06Text3Props={rowData7Props.cell06Text3Props}
          cell06Text4Props={rowData7Props.cell06Text4Props}
        />
      </div>
      <div className="divider-271"></div>
    </div>
  );
}

export default TableRow4;
