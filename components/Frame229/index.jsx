import React from "react";
import ATOMSICON2019close from "../ATOMSICON2019close";
import "./Frame229.css";
import {Link} from "react-router-dom";

function Frame229(props) {
  const { aTOMSICON2019closeProps } = props;

  return (
    <div className="frame-229">
      <Link to="/cbpm-24">
      <div className="input-fields-32">
        <div className="elements-59">
          <div className="frame-20-29">
            <div className="placeholder-text-75 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
              Search for associate enodeb
            </div>
            <ATOMSICON2019close className={aTOMSICON2019closeProps.className} />
          </div>
          <div className="divider-60"></div>
        </div>
      </div>
      </Link>
    </div>
  );
}

export default Frame229;
