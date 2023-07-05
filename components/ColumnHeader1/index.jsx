import React from "react";
import "./ColumnHeader1.css";

function ColumnHeader1(props) {
  const { children } = props;

  return (
    <div className="column-header">
      <div className="text-7">
        <div className="label-89 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default ColumnHeader1;
