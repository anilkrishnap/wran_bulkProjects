import React from "react";
import GlobalHeader2 from "../GlobalHeader2";
import GlobalHeader from "../GlobalHeader";
import HeaderAndDivider from "../HeaderAndDivider";
import Link from "../Link";
import TreeMenu2 from "../TreeMenu2";
import Frame18 from "../Frame18";
import TreeMenu3 from "../TreeMenu3";
import TreeMenu from "../TreeMenu";
import Scrollbar from "../Scrollbar";
import "./CBPM01.css";

function CBPM01(props) {
  const { frame14, globalHeader2Props, globalHeader2Props2 } = props;

  return (
    <div className="container-center-horizontal">
      <form className="cbpm-01 screen" name="form4" action="form4" method="post">
        <div className="global-header-58">
          <GlobalHeader2
            className={globalHeader2Props.className}
            aTOMSICON2019closeProps={globalHeader2Props.aTOMSICON2019closeProps}
            aTOMSICON2019closeProps2={globalHeader2Props.aTOMSICON2019closeProps2}
            aTOMSICON2019notificationProps={globalHeader2Props.aTOMSICON2019notificationProps}
            aTOMSICON2019chatCopyProps={globalHeader2Props.aTOMSICON2019chatCopyProps}
          />
          <GlobalHeader />
        </div>
        <div className="overlap-group2-3">
          <div className="link-widget-1">
            <HeaderAndDivider className={globalHeader2Props2.className} />
            <div className="frame-27-1">
              <Link />
              <div className="link-3">
                <TreeMenu2 />
                <a href="javascript:SubmitForm('form4')">
                  <div className="tree-menu-15">
                    <Frame18 />
                  </div>
                </a>
                <TreeMenu3 />
                <TreeMenu />
                <TreeMenu />
              </div>
              <Scrollbar />
            </div>
          </div>
          <div className="user-interaction-11">
            <img className="click-25" src={frame14} alt="Click" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CBPM01;
