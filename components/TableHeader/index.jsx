import React from "react";
import RowData11 from "../RowData11";
import "./TableHeader.css";

function TableHeader(props) {
  const { rowDataProps } = props;

  return (
    <div className="table-header-6">
      <div className="inputs-33">
        <img className="checkbox-18" src="/img/checkbox.svg" alt="Checkbox" />
        <RowData11 {...rowDataProps} />
      </div>
      <div className="divider-218"></div>
    </div>
  );
}

export default TableHeader;
