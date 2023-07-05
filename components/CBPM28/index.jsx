import React from "react";
import MenuLogo from "../MenuLogo";
import MOLECULESFORMSEARCH from "../MOLECULESFORMSEARCH";
import ATOMSICON2019chatCopy from "../ATOMSICON2019chatCopy";
import GlobalHeader from "../GlobalHeader";
import HeaderAndDivider from "../HeaderAndDivider";
import Link from "../Link";
import TreeMenu2 from "../TreeMenu2";
import Frame18 from "../Frame18";
import TreeMenu3 from "../TreeMenu3";
import TreeMenu from "../TreeMenu";
import Scrollbar from "../Scrollbar";
import "./CBPM28.css";

function CBPM28(props) {
  const { download, x1, project23324823948Y, mOLECULESFORMSEARCHProps } = props;

  return (
    <div className="container-center-horizontal">
      <form className="cbpm-28 screen" name="form1" action="form1" method="post">
        <div className="overlap-group2">
          <div className="global-header">
            <div className="global-header-1">
              <div className="frame-3">
                <MenuLogo />
                <div className="global-search-icons">
                  <MOLECULESFORMSEARCH aTOMSICON2019closeProps={mOLECULESFORMSEARCHProps.aTOMSICON2019closeProps} />
                  <div className="icon">
                    <a href="javascript:SubmitForm('form1')">
                      <div className="group">
                        <img className="shape" src="/img/shape-67.svg" alt="Shape" />
                        <img className="path" src="/img/path-5.svg" alt="Path" />
                      </div>
                    </a>
                  </div>
                  <ATOMSICON2019chatCopy />
                  <img className="download" src={download} alt="download" />
                  <div className="atomsavatardefault"></div>
                </div>
              </div>
            </div>
            <GlobalHeader />
          </div>
          <div className="badge-indication">
            <div className="x1">{x1}</div>
          </div>
        </div>
        <div className="overlap-group3">
          <div className="link-widget">
            <HeaderAndDivider />
            <div className="frame-27">
              <Link />
              <div className="link">
                <TreeMenu2 />
                <div className="tree-menu">
                  <Frame18 />
                </div>
                <TreeMenu3 />
                <TreeMenu />
                <TreeMenu />
              </div>
              <Scrollbar />
            </div>
          </div>
          <div className="user-interaction">
            <img className="click" src="/img/click-13.svg" alt="Click" />
          </div>
          <div className="alerts">
            <div className="icon">
              <div className="group-1">
                <div className="group-2">
                  <div className="rectangle"></div>
                  <div className="rectangle-1"></div>
                </div>
              </div>
            </div>
            <p className="project-23324823948-y neuehaasgroteskdisplaystd-bold-white-14px">{project23324823948Y}</p>
            <img className="icon-1" src="/img/icon-77.svg" alt="Icon" />
          </div>
        </div>
      </form>
    </div>
  );
}

export default CBPM28;
