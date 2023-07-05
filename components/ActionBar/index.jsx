import React from "react";
import SearchInput from "../SearchInput";
import Icon from "../Icon";
import "./ActionBar.css";

function ActionBar(props) {
  const { searchInputProps } = props;

  return (
    <div className="action-bar">
      <div className="overlap-group1-31">
        <div className="action-bar-items">
          <div className="action-menu"></div>
          <div className="setting">
            <div className="template">
              <div className="dropdown-input">
                <div className="frame-18-42">
                  <div className="frame-32-31">
                    <div className="placeholder-text-141 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                      Select Template
                    </div>
                  </div>
                  <img
                    className="atomsicon2019close-88"
                    src="/img/atoms-icon-2019-close-211.svg"
                    alt="ATOMS/ICON/2019/close"
                  />
                </div>
                <div className="elements-84"></div>
              </div>
              <div className="icon-47">
                <div className="save_-grid_-settings">
                  <div className="rectangle-88"></div>
                  <img className="path-188" src="/img/path-321.svg" alt="Path" />
                </div>
              </div>
            </div>
            <SearchInput frame183Props={searchInputProps.frame183Props} />
            <div className="icon-48"></div>
            <Icon />
          </div>
        </div>
        <div className="divider-128"></div>
      </div>
    </div>
  );
}

export default ActionBar;
