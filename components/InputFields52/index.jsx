import React from "react";
import "./InputFields52.css";

function InputFields52(props) {
  const { placeholderText, className } = props;

  return (
    <div className={`input-fields-549-1 ${className || ""}`}>
      <div className="frame-20-40">
        <div className="frame-36">
          <div className="placeholder-text-239 neuehaasgroteskdisplaystd-regular-normal-black-14px">
            {placeholderText}
          </div>
        </div>
        <img className="atomsicon2019close-114" src="/img/atoms-icon-2019-close-36.svg" alt="ATOMS/ICON/2019/close" />
      </div>
      <div className="elements-111"></div>
    </div>
  );
}

export default InputFields52;
