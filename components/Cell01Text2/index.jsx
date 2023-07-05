import React from "react";
import Group from "../Group";
import "./Cell01Text2.css";

function Cell01Text2(props) {
  const { label, groupProps } = props;

  return (
    <div className="cell-01-text-14">
      <div className="group-470-14">
        <div className="group-469-14">
          <div className="localwarning-icon-14">
            <Group className={groupProps.className} />
          </div>
          <div className="label-312 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
        </div>
      </div>
    </div>
  );
}

export default Cell01Text2;
