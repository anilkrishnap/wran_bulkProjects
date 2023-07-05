import React from "react";
import "./Heading.css";

function Heading(props) {
  const { children, className } = props;

  return (
    <div className={`heading-8 ${className || ""}`}>
      <div className="heading-9">
        <div className="placeholder-text-36 neuehaasgroteskdisplaystd-bold-black-20px">{children}</div>
        <div className="atomsdividersline2-pxblack-5"></div>
      </div>
    </div>
  );
}

export default Heading;
