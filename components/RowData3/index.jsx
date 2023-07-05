import React from "react";
import Cell01Text2 from "../Cell01Text2";
import Cell02Text from "../Cell02Text";
import LOCALWARNINGICON from "../LOCALWARNINGICON";
import Cell06Text from "../Cell06Text";
import "./RowData3.css";

function RowData3(props) {
  const {
    cell01Text2Props,
    cell02Text1Props,
    cell02Text2Props,
    lOCALWARNINGICONProps,
    cell02Text3Props,
    cell06Text1Props,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
  } = props;

  return (
    <div className="row-data-32">
      <Cell01Text2 label={cell01Text2Props.label} groupProps={cell01Text2Props.groupProps} />
      <Cell02Text>{cell02Text1Props.children}</Cell02Text>
      <Cell02Text>{cell02Text2Props.children}</Cell02Text>
      <div className="table-10">
        <div className="text-icon-20">
          <LOCALWARNINGICON className={lOCALWARNINGICONProps.className} />
          <div className="label-303 neuehaasgroteskdisplaystd-regular-normal-black-14px">Lorem</div>
        </div>
      </div>
      <Cell02Text>{cell02Text3Props.children}</Cell02Text>
      <Cell06Text>{cell06Text1Props.children}</Cell06Text>
      <Cell06Text>{cell06Text2Props.children}</Cell06Text>
      <Cell06Text>{cell06Text3Props.children}</Cell06Text>
      <Cell06Text>{cell06Text4Props.children}</Cell06Text>
    </div>
  );
}

export default RowData3;
