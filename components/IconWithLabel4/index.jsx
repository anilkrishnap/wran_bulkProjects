import React from "react";
import Group from "../Group";
import "./IconWithLabel4.css";

function IconWithLabel4(props) {
  const { className, groupProps } = props;

  return (
    <div className={`icon-with-label-36 ${className || ""}`}>
      <div className="localwarning-icon">
        <div className="group-107">
          <Group className={groupProps.className} />
        </div>
      </div>
      <div className="valid-projects-36 neuehaasgroteskdisplaystd-bold-black-14px">Warnings</div>
    </div>
  );
}

export default IconWithLabel4;
