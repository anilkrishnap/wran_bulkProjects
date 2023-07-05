import React from "react";
import Checkbox4 from "../Checkbox4";
import RowData3 from "../RowData3";
import "./TableRow6.css";

function TableRow6(props) {
  const { rowData3Props } = props;

  return (
    <div className="table-row-12">
      <div className="inputs-72">
        <Checkbox4 />
        <RowData3 {...rowData3Props} />
      </div>
      <div className="divider-286"></div>
    </div>
  );
}

export default TableRow6;
