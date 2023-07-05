import React from "react";
import "./ATOMSICON2019notification.css";

function ATOMSICON2019notification(props) {
  const { className } = props;

  return (
    <div className={`atomsicon2019notification ${className || ""}`}>
      <div className="group-12">
        <img className="shape-57" src="/img/shape-3.svg" alt="Shape" />
        <img className="path-141" src="/img/path-5.svg" alt="Path" />
      </div>
    </div>
  );
}

export default ATOMSICON2019notification;
