import React from "react";
import "./StatusIconSmall.css";

function StatusIconSmall(props) {
  const { className } = props;

  return (
    <div className={`status-icon-small-9 ${className || ""}`}>
      <img className="path-214" src="/img/path-6.svg" alt="Path" />
    </div>
  );
}

export default StatusIconSmall;
