import React from "react";
import Group from "../Group";
import "./Warning.css";

function Warning(props) {
  const { label, groupProps } = props;

  return (
    <div className="warning">
      <div className="localwarning-icon-22">
        <Group className={groupProps.className} />
      </div>
      <div className="label-336 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
    </div>
  );
}

export default Warning;
