import React from "react";
import "./InputFields3.css";
import {Link} from "react-router-dom";

function InputFields3(props) {
  const { placeholderText } = props;

  return (
  
    <div className="input-fields-20">
      <div className="frame-20-18">
        <div className="placeholder-text-63 neuehaasgroteskdisplaystd-regular-normal-black-14px">{placeholderText}</div>
        <img className="atomsicon2019close-46" src="/img/atoms-icon-2019-close-194.svg" alt="ATOMS/ICON/2019/close" />
      </div>
      <div className="elements-47"></div>
    </div>
  
  );
}

export default InputFields3;
