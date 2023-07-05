import React from "react";
import "./Cell02Text.css";

function Cell02Text(props) {
  const { children, className } = props;

  return (
    <div className={`cell-0-3-1 ${className || ""}`}>
      <div className="text-icon-3">
        <div className="label-286 neuehaasgroteskdisplaystd-regular-normal-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default Cell02Text;
