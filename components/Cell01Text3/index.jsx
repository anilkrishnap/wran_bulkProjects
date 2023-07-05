import React from "react";
import Error from "../Error";
import Warning from "../Warning";
import "./Cell01Text3.css";

function Cell01Text3(props) {
  const { errorProps, warningProps } = props;

  return (
    <div className="cell-01-text-18">
      <div className="error-and-warning-status">
        <Error label={errorProps.label} statusIconSmall2Props={errorProps.statusIconSmall2Props} />
        <Warning label={warningProps.label} groupProps={warningProps.groupProps} />
      </div>
    </div>
  );
}

export default Cell01Text3;
