import React from "react";
import "./Text.css";

function Text(props) {
  const { className } = props;

  return (
    <div className={`text-27 ${className || ""}`}>
      <div className="no-contacts-added-yet neuehaasgroteskdisplaystd-regular-normal-black-14px">
        No Contacts added yet
      </div>
    </div>
  );
}

export default Text;
