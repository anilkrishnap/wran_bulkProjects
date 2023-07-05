import React from "react";
import "./Scrollbar2.css";

function Scrollbar2(props) {
  const { className } = props;

  return (
    <div className={`scrollbar-2 ${className || ""}`}>
      <div className="scroller-3"></div>
    </div>
  );
}

export default Scrollbar2;
