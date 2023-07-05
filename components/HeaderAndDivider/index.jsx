import React from "react";
import "./HeaderAndDivider.css";

function HeaderAndDivider(props) {
  const { className } = props;

  return (
    <div className={`header-and-divider ${className || ""}`}>
      <div className="header-with-icon">
        <h1 className="placeholder-text-28 neuehaasgroteskdisplaystd-bold-black-24px">Network Planning Platform</h1>
        <img className="icon-2" src="/img/icon-66.svg" alt="Icon" />
      </div>
      <div className="divider-2"></div>
    </div>
  );
}

export default HeaderAndDivider;
