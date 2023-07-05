import React from "react";
import TreeMenu from "../TreeMenu";
import "./Link.css";

function Link() {
  return (
    <div className="link-1">
      <div className="tree-menu-1">
        <div className="frame-18-28">
          <div className="body-text-link neuehaasgroteskdisplaystd-bold-black-14px">Map View</div>
          <img className="icon-3" src="/img/icon-67.svg" alt="Icon" />
        </div>
      </div>
      <div className="tree-menu-2">
        <div className="frame-18-28">
          <div className="body-text-link neuehaasgroteskdisplaystd-bold-black-14px">Solution Manager</div>
          <img className="icon-3" src="/img/icon-67.svg" alt="Icon" />
        </div>
      </div>
      <div className="tree-menu-3">
        <div className="frame-18-28">
          <div className="body-text-link neuehaasgroteskdisplaystd-bold-black-14px">Propose Solution</div>
          <img className="icon-3" src="/img/icon-67.svg" alt="Icon" />
        </div>
      </div>
      <div className="tree-menu-4">
        <div className="frame-18-28">
          <div className="body-text-link neuehaasgroteskdisplaystd-bold-black-14px">Sector Manager</div>
          <img className="icon-3" src="/img/icon-67.svg" alt="Icon" />
        </div>
      </div>
      <TreeMenu />
    </div>
  );
}

export default Link;
