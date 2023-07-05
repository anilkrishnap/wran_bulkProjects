import React from "react";
import TableItem from "../TableItem";
import TableItem2 from "../TableItem2";
import TableItem3 from "../TableItem3";
import TableItem4 from "../TableItem4";
import TableItem5 from "../TableItem5";
import TableItem6 from "../TableItem6";
import CellRow from "../CellRow";
import CellRow2 from "../CellRow2";
import "./RowData2.css";

function RowData2(props) {
  const { tableItem21Props, tableItem22Props, cellRowProps } = props;

  return (
    <div className="row-data-11">
      <div className="cell-row-10">
        <TableItem />
        <TableItem2>{tableItem21Props.children}</TableItem2>
        <TableItem2>{tableItem22Props.children}</TableItem2>
        <TableItem3 />
        <TableItem4 />
        <TableItem5 />
        <TableItem6 />
        <div className="table-item-36">
          <div className="label-230 neuehaasgroteskdisplaystd-regular-normal-black-14px">AWS3 2st</div>
        </div>
      </div>
      <CellRow tableItem2Props={cellRowProps.tableItem2Props} />
      <CellRow2 />
    </div>
  );
}

export default RowData2;
