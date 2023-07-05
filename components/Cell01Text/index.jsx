import React from "react";
import "./Cell01Text.css";

function Cell01Text(props) {
  const { children } = props;

  return (
    <div className="cell-0">
      <div className="text-icon">
        <div className="label-152 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default Cell01Text;
