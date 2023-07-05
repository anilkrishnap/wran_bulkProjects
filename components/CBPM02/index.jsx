import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import Heading4 from "../Heading4";
import Lable from "../Lable";
import Group6 from "../Group6";
import RadioButton from "../RadioButton";
import NavigationAction from "../NavigationAction";
import "./CBPM02.css";

function CBPM02(props) {
  const { placeholderText, click2, globalHeader4Props, frame4744Props, heading4Props, navigationActionProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-02 screen">
        <div className="overlap-group4-2">
          <div className="template-create-bulk-projects-3">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 className={frame4744Props.className} />
            <div className="localcbp-new-build-2">
              <div className="navigation-window-13">
                <div className="overlap-group2-4">
                  <div className="body-13">
                    <div className="local-select-solution-type-3-9">
                      <Heading4 className={heading4Props.className} />
                      <div className="fields-17">
                        <Lable />
                        <Link to="/cbpm-03">
                          <div className="radio-button-27">
                            <Group6 />
                            <div className="placeholder-text-229 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                              {placeholderText}
                            </div>
                          </div>
                        </Link>
                        <RadioButton />
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-235"></div>
            </div>
          </div>
          <div className="click-container-7">
            <img className="click-26" src="/img/click-2.svg" alt="Click" />
            <div className="click-27 neuehaasgroteskdisplaystd-regular-normal-black-10px">{click2}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM02;
