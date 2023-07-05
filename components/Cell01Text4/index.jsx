import React from "react";
import StatusIconSmall2 from "../StatusIconSmall2";
import Warning from "../Warning";
import "./Cell01Text4.css";

function Cell01Text4(props) {
  const { label, className, statusIconSmall2Props, warningProps } = props;

  return (
    <div className={`cell-01-text-23 ${className || ""}`}>
      <div className="group-470-23">
        <div className="group-468-7">
          <StatusIconSmall2 className={statusIconSmall2Props.className} />
          <div className="label-344 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
        </div>
        <Warning label={warningProps.label} groupProps={warningProps.groupProps} />
      </div>
    </div>
  );
}

export default Cell01Text4;
