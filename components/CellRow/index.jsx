import React from "react";
import TableItem2 from "../TableItem2";
import TableItem7 from "../TableItem7";
import "./CellRow.css";

function CellRow(props) {
  const { tableItem2Props } = props;

  return (
    <div className="cell-row-2">
      <div className="table-item-28">
        <div className="label-192 neuehaasgroteskdisplaystd-regular-normal-black-14px">AWS3 3rd</div>
      </div>
      <div className="table-item-28">
        <div className="label-192 neuehaasgroteskdisplaystd-regular-normal-black-14px">850 1st</div>
      </div>
      <div className="table-item-28">
        <div className="label-192 neuehaasgroteskdisplaystd-regular-normal-black-14px">850 2st</div>
      </div>
      <TableItem2>{tableItem2Props.children}</TableItem2>
      <div className="table-item-28">
        <div className="label-192 neuehaasgroteskdisplaystd-regular-normal-black-14px">CBRS 1st</div>
      </div>
      <TableItem7 />
      <TableItem7 />
      <TableItem7 />
    </div>
  );
}

export default CellRow;
