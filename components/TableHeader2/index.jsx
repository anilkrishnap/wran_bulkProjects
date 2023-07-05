import React from "react";
import Checkbox4 from "../Checkbox4";
import RowData11 from "../RowData11";
import "./TableHeader2.css";

function TableHeader2(props) {
  const { rowDataProps } = props;

  return (
    <div className="table-header-15">
      <div className="inputs-69">
        <Checkbox4 />
        <RowData11 {...rowDataProps} />
      </div>
      <div className="divider-283"></div>
    </div>
  );
}

export default TableHeader2;
