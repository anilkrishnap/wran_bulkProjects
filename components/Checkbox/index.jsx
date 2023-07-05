import React from "react";
import "./Checkbox.css";

function Checkbox(props) {
  const { placeholderText } = props;

  return (
    <div className="checkbox">
      <img className="checkbox-1" src="/img/checkbox-9.svg" alt="Checkbox" />
      <div className="placeholder-text-38 neuehaasgroteskdisplaystd-regular-normal-black-12px">{placeholderText}</div>
    </div>
  );
}

export default Checkbox;
