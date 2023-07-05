import React from "react";
import {Link} from "react-router-dom";
import "./NavigationAction.css";


function NavigationAction(props) {
  const { className } = props;

  return (
    <div className={`navigation-action ${className || ""}`}>
      <div className="overlap-group-28 neuehaasgroteskdisplaystd-regular-normal-white-14px">
        <div className="label-80">Show All</div>
        <img className="line" src="/img/line.svg" alt="Line" />
        <div className="label-81">Show Next</div>
        <img className="line-1" src="/img/line.svg" alt="Line" />
        <div className="label-82">Save</div>
      </div>
    </div>
  );
}

export default NavigationAction;
