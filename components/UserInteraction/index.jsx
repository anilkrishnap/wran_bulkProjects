import React from "react";
import "./UserInteraction.css";

function UserInteraction(props) {
  const { className } = props;

  return (
    <div className={`user-interaction-2 ${className || ""}`}>
      <div className="overlap-group-71">
        <div className="click-16 neuehaasgroteskdisplaystd-regular-normal-black-10px">CLICK</div>
      </div>
    </div>
  );
}

export default UserInteraction;
