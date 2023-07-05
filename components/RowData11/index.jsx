import React from "react";
import ColumnHeader2 from "../ColumnHeader2";
import ColumnHeader3 from "../ColumnHeader3";
import ColumnHeader6 from "../ColumnHeader6";
import "./RowData11.css";

function RowData11(props) {
  const {
    columnHeader21Props,
    columnHeader31Props,
    columnHeader32Props,
    columnHeader22Props,
    columnHeader61Props,
    columnHeader62Props,
    columnHeader63Props,
    columnHeader64Props,
  } = props;

  return (
    <div className="row-data-13">
      <div className="column-header-6">
        <div className="text-32">
          <div className="label-250 neuehaasgroteskdisplaystd-bold-black-14px">
            Error/
            <br />
            Warnings
          </div>
        </div>
        <img className="descending" src="/img/descending.svg" alt="Descending" />
      </div>
      <ColumnHeader2>{columnHeader21Props.children}</ColumnHeader2>
      <ColumnHeader3>{columnHeader31Props.children}</ColumnHeader3>
      <ColumnHeader3 className={columnHeader32Props.className}>{columnHeader32Props.children}</ColumnHeader3>
      <ColumnHeader2>{columnHeader22Props.children}</ColumnHeader2>
      <ColumnHeader6>{columnHeader61Props.children}</ColumnHeader6>
      <ColumnHeader6 className={columnHeader62Props.className}>{columnHeader62Props.children}</ColumnHeader6>
      <ColumnHeader6>{columnHeader63Props.children}</ColumnHeader6>
      <ColumnHeader6 className={columnHeader64Props.className}>{columnHeader64Props.children}</ColumnHeader6>
    </div>
  );
}

export default RowData11;
