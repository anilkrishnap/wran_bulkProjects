import React from "react";
import "./Scrollbar.css";

function Scrollbar(props) {
  const { className } = props;

  return (
    <div className={`scrollbar ${className || ""}`}>
      <div className="scroller"></div>
    </div>
  );
}

export default Scrollbar;
