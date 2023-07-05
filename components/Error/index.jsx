import React from "react";
import StatusIconSmall2 from "../StatusIconSmall2";
import "./Error.css";

function Error(props) {
  const { label, className, statusIconSmall2Props } = props;

  return (
    <div className={`error ${className || ""}`}>
      <StatusIconSmall2 className={statusIconSmall2Props.className} />
      <div className="label-331 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
    </div>
  );
}

export default Error;
