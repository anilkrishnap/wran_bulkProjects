import React from "react";
import "./Group.css";

function Group(props) {
  const { className } = props;

  return (
    <div className={`group-123 ${className || ""}`}>
      <img className="path-205" src="/img/path-8.svg" alt="Path" />
      <div className="rectangle-92"></div>
    </div>
  );
}

export default Group;
