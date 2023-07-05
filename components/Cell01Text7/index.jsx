import React from "react";
import StatusIconSmall from "../StatusIconSmall";
import "./Cell01Text7.css";

function Cell01Text7(props) {
  const { statusIconSmallProps } = props;

  return (
    <div className="cell-01-text">
      <div className="group-470">
        <div className="group-469">
          <StatusIconSmall className={statusIconSmallProps.className} />
        </div>
      </div>
    </div>
  );
}

export default Cell01Text7;
