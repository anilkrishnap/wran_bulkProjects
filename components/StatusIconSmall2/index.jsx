import React from "react";
import "./StatusIconSmall2.css";

function StatusIconSmall2(props) {
  const { className } = props;

  return (
    <div className={`status-icon-small-30 ${className || ""}`}>
      <img className="path-210" src="/img/path-7.svg" alt="Path" />
      <div className="rectangle-97"></div>
    </div>
  );
}

export default StatusIconSmall2;
