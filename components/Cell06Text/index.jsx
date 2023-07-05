import React from "react";
import "./Cell06Text.css";

function Cell06Text(props) {
  const { children } = props;

  return (
    <div className="cell-0-10">
      <div className="text-icon-10">
        <div className="label-293 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default Cell06Text;
