import React from "react";
import "./Heading2.css";

function Heading2(props) {
  const { children, className } = props;

  return (
    <div className={`heading-15 ${className || ""}`}>
      <div className="heading-16">
        <div className="placeholder-text-44 neuehaasgroteskdisplaystd-bold-black-20px">{children}</div>
      </div>
    </div>
  );
}

export default Heading2;
