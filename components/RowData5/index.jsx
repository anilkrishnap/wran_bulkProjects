import React from "react";
import Cell01Text4 from "../Cell01Text4";
import Table2 from "../Table2";
import Cell02Text from "../Cell02Text";
import TextIcon from "../TextIcon";
import Table3 from "../Table3";
import Cell06Text from "../Cell06Text";
import "./RowData5.css";

function RowData5(props) {
  const {
    cell01Text4Props,
    cell02TextProps,
    cell06Text1Props,
    cell06Text1Props2,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
  } = props;

  return (
    <div className="row-data-53">
      <Cell01Text4
        label={cell01Text4Props.label}
        statusIconSmall2Props={cell01Text4Props.statusIconSmall2Props}
        warningProps={cell01Text4Props.warningProps}
      />
      <Table2 />
      <Cell02Text>{cell02TextProps.children}</Cell02Text>
      <div className="table-35">
        <TextIcon />
      </div>
      <Table3 lOCALWARNINGICONProps={cell06Text1Props.lOCALWARNINGICONProps} />
      <Cell06Text>{cell06Text1Props2.children}</Cell06Text>
      <Cell06Text>{cell06Text2Props.children}</Cell06Text>
      <Cell06Text>{cell06Text3Props.children}</Cell06Text>
      <Cell06Text>{cell06Text4Props.children}</Cell06Text>
    </div>
  );
}

export default RowData5;
