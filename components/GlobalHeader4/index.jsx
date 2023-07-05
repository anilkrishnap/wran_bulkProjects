import React from "react";
import GlobalHeader2 from "../GlobalHeader2";
import "./GlobalHeader4.css";
import {Link} from "react-router-dom";

function GlobalHeader4(props) {
  const { globalHeader2Props } = props;

  return (
    <div className="global-header-4">
      <GlobalHeader2
        className={globalHeader2Props.className}
        aTOMSICON2019closeProps={globalHeader2Props.aTOMSICON2019closeProps}
        aTOMSICON2019closeProps2={globalHeader2Props.aTOMSICON2019closeProps2}
        aTOMSICON2019notificationProps={globalHeader2Props.aTOMSICON2019notificationProps}
        aTOMSICON2019chatCopyProps={globalHeader2Props.aTOMSICON2019chatCopyProps}
      />
      <div className="global-header-5">
        <div className="tab-2">
          <div className="tab-items-28">
            <div className="frame-14-30">
              <img className="tab-item-bar" src="/img/tab---item---bar@2x.png" alt="TAB / Item / Bar" />
              <div className="item-name-2 neuehaasgroteskdisplaystd-regular-normal-black-14px"><Link to="/cbpm-01" style={{color:'inherit', textDecoration:'none'}}>Home</Link></div>
            </div>
            <img className="frame-14-31" src="/img/frame-14@2x.png" alt="Frame 14" />
          </div>
          <div className="tab-items-2">
            <div className="frame-14-32">
              <img className="tab-item-bar-1" src="/img/tab---item---bar-1@2x.png" alt="TAB / Item / Bar" />
              <div className="item-name-2 neuehaasgroteskdisplaystd-regular-normal-black-14px">Solution Manager</div>
            </div>
            <img className="frame-14-4" src="/img/frame-14-1.svg" alt="Frame 14" />
          </div>
          <div className="tab-items-2">
            <div className="frame-14-33">
              <div className="bar-2"></div>
              <div className="item-name-2 neuehaasgroteskdisplaystd-bold-black-14px">Create/Upload Bulk Solutions</div>
            </div>
            <img className="frame-14-4" src="/img/frame-14-1.svg" alt="Frame 14" />
          </div>
        </div>
        <div className="divider-6"></div>
      </div>
    </div>
  );
}

export default GlobalHeader4;
