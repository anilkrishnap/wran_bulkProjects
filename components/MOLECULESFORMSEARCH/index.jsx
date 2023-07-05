import React from "react";
import ATOMSICON2019close from "../ATOMSICON2019close";
import "./MOLECULESFORMSEARCH.css";

function MOLECULESFORMSEARCH(props) {
  const { aTOMSICON2019closeProps } = props;

  return (
    <div className="moleculesformsearch">
      <div className="frame-18">
        <div className="frame-32">
          <div className="placeholder-text neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">Search</div>
        </div>
        <ATOMSICON2019close className={aTOMSICON2019closeProps.className} />
      </div>
      <div className="elements"></div>
    </div>
  );
}

export default MOLECULESFORMSEARCH;
