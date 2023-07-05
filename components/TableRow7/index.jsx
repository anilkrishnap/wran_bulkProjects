import React from "react";
import RowData3 from "../RowData3";
import "./TableRow7.css";

function TableRow7(props) {
  const { rowData3Props } = props;

  return (
    <div className="table-row-7-1">
      <div className="inputs-46">
        <img className="checkbox-31" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData3 {...rowData3Props} />
      </div>
      <div className="divider-231"></div>
    </div>
  );
}

export default TableRow7;
