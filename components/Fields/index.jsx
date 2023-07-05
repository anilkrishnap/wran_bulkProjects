import React from "react";
import Inputs from "../Inputs";
import Inputs2 from "../Inputs2";
import InputFields2 from "../InputFields2";
import "./Fields.css";

function Fields(props) {
  const { inputsProps, inputs2Props, inputFields2Props } = props;

  return (
    <div className="fields">
      <div className="inputs-container">
        <Inputs className={inputsProps.className} inputFields2Props={inputsProps.inputFields2Props} />
        <Inputs2 className={inputs2Props.className} inputFields3Props={inputs2Props.inputFields3Props} />
        <div className="inputs-25">
          <div className="label-156">
            <div className="label-157 neuehaasgroteskdisplaystd-regular-normal-black-12px">Primary Rationale</div>
            <div className="required-12"></div>
          </div>
          <InputFields2 placeholderText={inputFields2Props.placeholderText} />
        </div>
        <div className="inputs-25">
          <div className="label-156">
            <div className="label-157 neuehaasgroteskdisplaystd-regular-normal-black-12px">Legal Due Date</div>
            <div className="required-12"></div>
          </div>
          <div className="input-fields-62">
            <div className="elements-80">
              <div className="frame-31-13">
                <div className="placeholder-text-137 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                  14 Feb 2023
                </div>
                <div className="atomsicon2019close-84">
                  <div className="group-77">
                    <div className="group-79">
                      <img className="path-180" src="/img/path-319.svg" alt="Path" />
                      <img className="path-181" src="/img/path-320.svg" alt="Path" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="divider-120"></div>
            </div>
          </div>
        </div>
      </div>
      <div className="divider-121"></div>
    </div>
  );
}

export default Fields;
