import React from "react";
import "./Heading4.css";

function Heading4(props) {
  const { className } = props;

  return (
    <div className={`heading-21 ${className || ""}`}>
      <div className="placeholder-text-133 neuehaasgroteskdisplaystd-bold-black-20px">Solution&nbsp;&nbsp;Details</div>
    </div>
  );
}

export default Heading4;
