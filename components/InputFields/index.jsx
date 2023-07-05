import React from "react";
import "./InputFields.css";
import {Link} from "react-router-dom"

function InputFields(props) {
  const { placeholderText } = props;

  return (
    <Link to="/cbpm-17">
    <div className="input-fields-1">
      <div className="frame-18-38">
        <div className="placeholder-text-37 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
          {placeholderText}
        </div>
        <img className="atomsicon2019close-30" src="/img/atoms-icon-2019-close-194.svg" alt="ATOMS/ICON/2019/close" />
      </div>
      <div className="divider-44"></div>
    </div>
    </Link>
  );
}

export default InputFields;
