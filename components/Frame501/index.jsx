import React from "react";
import Inputs from "../Inputs";
import Inputs2 from "../Inputs2";
import Label3 from "../Label3";
import InputFields3 from "../InputFields3";
import Label4 from "../Label4";
import ATOMSICON2019close2 from "../ATOMSICON2019close2";
import "./Frame501.css";

function Frame501(props) {
  const { inputsProps, inputs2Props, inputFields3Props, aTOMSICON2019close2Props } = props;

  return (
    <div className="frame-501-1">
      <Inputs inputFields2Props={inputsProps.inputFields2Props} />
      <Inputs2 inputFields3Props={inputs2Props.inputFields3Props} />
      <div className="inputs-2">
        <Label3 />
        <InputFields3 placeholderText={inputFields3Props.placeholderText} />
      </div>
      <div className="inputs-3">
        <Label4 />
        <div className="input-fields-2">
          <div className="frame-20">
            <div className="placeholder-text-45 neuehaasgroteskdisplaystd-regular-normal-black-14px">14 Feb 2023</div>
            <ATOMSICON2019close2 className={aTOMSICON2019close2Props.className} />
          </div>
          <div className="elements-29"></div>
        </div>
      </div>
    </div>
  );
}

export default Frame501;
