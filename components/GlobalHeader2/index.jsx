import React from "react";
import MenuLogo from "../MenuLogo";
import MOLECULESFORMSEARCH from "../MOLECULESFORMSEARCH";
import ATOMSICON2019notification from "../ATOMSICON2019notification";
import ATOMSICON2019chatCopy from "../ATOMSICON2019chatCopy";
import "./GlobalHeader2.css";

function GlobalHeader2(props) {
  const {
    className,
    aTOMSICON2019closeProps,
    aTOMSICON2019closeProps2,
    aTOMSICON2019notificationProps,
    aTOMSICON2019chatCopyProps,
  } = props;

  return (
    <div className={`global-header-56 ${className || ""}`}>
      <div className="frame-3-1">
        <MenuLogo className={aTOMSICON2019closeProps.className} />
        <div className="global-search-icons-1">
          <MOLECULESFORMSEARCH aTOMSICON2019closeProps={aTOMSICON2019closeProps2.aTOMSICON2019closeProps} />
          <ATOMSICON2019notification className={aTOMSICON2019notificationProps.className} />
          <ATOMSICON2019chatCopy className={aTOMSICON2019chatCopyProps.className} />
          <img className="download-1" src="/img/download@2x.png" alt="download" />
          <div className="atomsavatardefault-1"></div>
        </div>
      </div>
    </div>
  );
}

export default GlobalHeader2;
