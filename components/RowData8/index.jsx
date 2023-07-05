import React from "react";
import Cell01Text5 from "../Cell01Text5";
import Cell02Text from "../Cell02Text";
import StatusIconSmall3 from "../StatusIconSmall3";
import Cell06Text from "../Cell06Text";
import "./RowData8.css";

function RowData8(props) {
  const {
    cell01Text5Props,
    cell02Text1Props,
    cell02Text2Props,
    cell02Text3Props,
    cell06Text1Props,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
  } = props;

  return (
    <div className="row-data-50">
      <Cell01Text5 errorProps={cell01Text5Props.errorProps} />
      <Cell02Text>{cell02Text1Props.children}</Cell02Text>
      <Cell02Text>{cell02Text2Props.children}</Cell02Text>
      <Cell02Text>{cell02Text3Props.children}</Cell02Text>
      <div className="table-31">
        <div className="text-icon-39">
          <StatusIconSmall3 />
          <div className="label-359 neuehaasgroteskdisplaystd-regular-normal-black-14px">Lorem Ipsum</div>
        </div>
      </div>
      <Cell06Text>{cell06Text1Props.children}</Cell06Text>
      <Cell06Text>{cell06Text2Props.children}</Cell06Text>
      <Cell06Text>{cell06Text3Props.children}</Cell06Text>
      <Cell06Text>{cell06Text4Props.children}</Cell06Text>
    </div>
  );
}

export default RowData8;
