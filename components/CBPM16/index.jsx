import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame474 from "../Frame474";
import Heading from "../Heading";
import Label from "../Label";
import Label2 from "../Label2";
import InputFields from "../InputFields";
import Label3 from "../Label3";
import Label4 from "../Label4";
import ATOMSICON2019close2 from "../ATOMSICON2019close2";
import Frame503 from "../Frame503";
import NavigationAction from "../NavigationAction";
import Group391 from "../Group391";
import "./CBPM16.css";

function CBPM16(props) {
  const {
    placeholderText1,
    placeholderText2,
    globalHeader4Props,
    headingProps,
    inputFields1Props,
    inputFields2Props,
    frame503Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-16 screen">
        <div className="overlap-group3-1">
          <div className="template-solution-details">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame474 />
            <div className="localcbp-modification-3">
              <div className="navigation-window">
                <div className="overlap-group1-28">
                  <div className="body">
                    <div className="solution-details-4">
                      <Heading>{headingProps.children}</Heading>
                      <div className="frame-501">
                        <div className="inputs">
                          <Label />
                          <div className="input-fields">
                            <div className="frame">
                              <div className="placeholder-text-30 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                                {placeholderText1}
                              </div>
                              <img
                                className="atomsicon2019close-29"
                                src="/img/atoms-icon-2019-close-194.svg"
                                alt="ATOMS/ICON/2019/close"
                              />
                            </div>
                            <div className="divider-4"></div>
                          </div>
                        </div>
                        <div className="inputs-1">
                          <Label2 />
                          <InputFields placeholderText={inputFields1Props.placeholderText} />
                        </div>
                        <div className="inputs-1">
                          <Label3 />
                          <InputFields placeholderText={inputFields2Props.placeholderText} />
                        </div>
                        <div className="inputs">
                          <Label4 />
                          <div className="input-fields">
                            <div className="frame">
                              <div className="placeholder-text-30 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                                {placeholderText2}
                              </div>
                              <ATOMSICON2019close2 />
                            </div>
                            <div className="elements-28"></div>
                          </div>
                        </div>
                      </div>
                      <div className="divider-5"></div>
                      <Frame503
                        checkbox1Props={frame503Props.checkbox1Props}
                        checkbox2Props={frame503Props.checkbox2Props}
                      />
                    </div>
                  </div>
                  <NavigationAction />
                </div>
              </div>
            </div>
          </div>
          <Group391 />
        </div>
      </div>
    </div>
  );
}

export default CBPM16;
