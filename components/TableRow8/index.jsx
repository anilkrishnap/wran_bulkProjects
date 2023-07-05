import React from "react";
import Checkbox4 from "../Checkbox4";
import RowData22 from "../RowData22";
import "./TableRow8.css";

function TableRow8(props) {
  const { rowData2Props } = props;

  return (
    <div className="table-row-13">
      <div className="inputs-73">
        <Checkbox4 />
        <RowData22 {...rowData2Props} />
      </div>
      <div className="divider-287"></div>
    </div>
  );
}

export default TableRow8;
