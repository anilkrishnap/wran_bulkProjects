import React from "react";
import "./ColumnHeader3.css";

function ColumnHeader3(props) {
  const { children, className } = props;

  return (
    <div className={`column-header-24-1 ${className || ""}`}>
      <div className="text-60">
        <div className="label-268 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default ColumnHeader3;
