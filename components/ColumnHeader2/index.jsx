import React from "react";
import "./ColumnHeader2.css";

function ColumnHeader2(props) {
  const { children } = props;

  return (
    <div className="column-header-15">
      <div className="text-41">
        <div className="label-259 neuehaasgroteskdisplaystd-bold-black-14px">{children}</div>
      </div>
    </div>
  );
}

export default ColumnHeader2;
