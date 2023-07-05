import React from "react";
import Error from "../Error";
import "./Cell01Text5.css";

function Cell01Text5(props) {
  const { errorProps } = props;

  return (
    <div className="cell-01-text-25">
      <div className="group-470-28">
        <Error
          label={errorProps.label}
          className={errorProps.className}
          statusIconSmall2Props={errorProps.statusIconSmall2Props}
        />
      </div>
    </div>
  );
}

export default Cell01Text5;
