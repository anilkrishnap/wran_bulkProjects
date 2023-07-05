import React from "react";
import "./ColumnHeader13.css";

function ColumnHeader13(props) {
  const { children, className } = props;

  return (
    <div className={`column-header-42-1 ${className || ""}`}>
      <div className="text-78">
        <div className="label-316 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default ColumnHeader13;
