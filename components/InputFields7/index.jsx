import React from "react";
import "./InputFields7.css";

function InputFields7(props) {
  const { placeholderText, className } = props;

  return (
    <div className={`input-fields-423 ${className || ""}`}>
      <div className="frame-18-75">
        <div className="placeholder-text-174 neuehaasgroteskdisplaystd-regular-normal-black-14px">
          {placeholderText}
        </div>
        <img className="atomsicon2019close-104" src="/img/atoms-icon-2019-close-338.svg" alt="ATOMS/ICON/2019/close" />
      </div>
      <div className="divider-181"></div>
    </div>
  );
}

export default InputFields7;
