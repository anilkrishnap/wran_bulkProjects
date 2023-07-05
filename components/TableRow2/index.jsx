import React from "react";
import RowData22 from "../RowData22";
import "./TableRow2.css";

function TableRow2(props) {
  const { rowData2Props } = props;

  return (
    <div className="table-row-3">
      <div className="inputs-38">
        <img className="checkbox-23" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData22 {...rowData2Props} />
      </div>
      <div className="divider-223"></div>
    </div>
  );
}

export default TableRow2;
