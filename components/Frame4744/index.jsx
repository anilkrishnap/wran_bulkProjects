import React from "react";
import StepName2 from "../StepName2";
import StepName from "../StepName";
import "./Frame4744.css";

function Frame4744(props) {
  const { className } = props;

  return (
    <div className={`frame-474-12 ${className || ""}`}>
      <div className="swimlane-12">
        <div className="divider-190"></div>
        <div className="names-12">
          <StepName2 />
          <img className="icon-78" src="/img/icon.svg" alt="Icon" />
          <div className="step-name-104">
            <div className="step-name-105 neuehaasgroteskdisplaystd-bold-sonic-silver-20px">Solution Details</div>
          </div>
          <img className="icon-78" src="/img/icon.svg" alt="Icon" />
          <StepName />
        </div>
        <div className="divider-191"></div>
      </div>
    </div>
  );
}

export default Frame4744;
