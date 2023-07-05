import React from "react";
import RowData4 from "../RowData4";
import "./TableRow12.css";

function TableRow12(props) {
  const { rowData4Props } = props;

  return (
    <div className="table-row-1-3">
      <div className="inputs-59">
        <img className="checkbox-36" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData4 {...rowData4Props} />
      </div>
      <div className="divider-267"></div>
    </div>
  );
}

export default TableRow12;
