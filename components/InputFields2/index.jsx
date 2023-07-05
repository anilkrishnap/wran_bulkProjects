import React from "react";
import "./InputFields2.css";

function InputFields2(props) {
  const { placeholderText } = props;

  return (
    <div className="input-fields-13">
      <div className="frame-20-11">
        <div className="placeholder-text-56 neuehaasgroteskdisplaystd-regular-normal-black-14px">{placeholderText}</div>
        <img className="atomsicon2019close-39" src="/img/atoms-icon-2019-close-194.svg" alt="ATOMS/ICON/2019/close" />
      </div>
      <div className="elements-40"></div>
    </div>
  );
}

export default InputFields2;
