import React from "react";
import RowData8 from "../RowData8";
import "./TableRow5.css";

function TableRow5(props) {
  const { rowData8Props } = props;

  return (
    <div className="table-row-5-1">
      <div className="inputs-65">
        <img className="checkbox-42" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData8 {...rowData8Props} />
      </div>
      <div className="divider-273"></div>
    </div>
  );
}

export default TableRow5;
