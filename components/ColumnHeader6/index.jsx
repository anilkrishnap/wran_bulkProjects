import React from "react";
import "./ColumnHeader6.css";

function ColumnHeader6(props) {
  const { children, className } = props;

  return (
    <div className={`column-header-33-1 ${className || ""}`}>
      <div className="text-69">
        <div className="label-269 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default ColumnHeader6;
