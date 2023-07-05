import React from "react";
import "./MenuLogo.css";

function MenuLogo(props) {
  const { className } = props;

  return (
    <div className={`menu-logo ${className || ""}`}>
      <div className="atomsicon2019menu">
        <div className="group-3">
          <div className="rectangle-2"></div>
          <div className="rectangle-3"></div>
          <div className="rectangle-4"></div>
        </div>
      </div>
      <div className="override-logo">
        <div className="overlap-group1">
          <img className="path-1" src="/img/path-283.svg" alt="Path" />
          <div className="group-4">
            <img className="path-2" src="/img/path-284.svg" alt="Path" />
            <img className="shape-1" src="/img/shape-161.svg" alt="Shape" />
            <img className="path-3" src="/img/path-285.svg" alt="Path" />
            <div className="overlap-group">
              <img className="path-4" src="/img/path-286.svg" alt="Path" />
              <img className="shape-2" src="/img/shape-162.svg" alt="Shape" />
            </div>
            <img className="path-5" src="/img/path-287.svg" alt="Path" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MenuLogo;
