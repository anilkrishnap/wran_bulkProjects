import React from "react";
import "./Icon.css";

function Icon(props) {
  const { className } = props;

  return (
    <div className={`icon-55 ${className || ""}`}>
      <div className="group-89">
        <div className="overlap-group-31">
          <div className="group-18-1"></div>
          <img className="path-192" src="/img/path-322.svg" alt="Path" />
        </div>
      </div>
    </div>
  );
}

export default Icon;
