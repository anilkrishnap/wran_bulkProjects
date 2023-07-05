import React from "react";
import RowData6 from "../RowData6";
import "./TableRow3.css";

function TableRow3(props) {
  const { rowData6Props } = props;

  return (
    <div className="table-row-3-1">
      <div className="inputs-61">
        <img className="checkbox-38" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData6 {...rowData6Props} />
      </div>
      <div className="divider-269"></div>
    </div>
  );
}

export default TableRow3;
