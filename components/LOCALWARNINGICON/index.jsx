import React from "react";
import "./LOCALWARNINGICON.css";

function LOCALWARNINGICON(props) {
  const { className } = props;

  return (
    <div className={`localwarning-icon-21 ${className || ""}`}>
      <div className="group-138">
        <div className="group-139">
          <img className="path-238" src="/img/path-17.svg" alt="Path" />
          <div className="rectangle-116"></div>
        </div>
      </div>
    </div>
  );
}

export default LOCALWARNINGICON;
