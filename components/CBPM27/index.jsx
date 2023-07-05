import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4742 from "../Frame4742";
import Heading2 from "../Heading2";
import Frame501 from "../Frame501";
import Frame229 from "../Frame229";
import Frame504 from "../Frame504";
import NavigationAction from "../NavigationAction";
import "./CBPM27.css";
import {Link} from "react-router-dom";

function CBPM27(props) {
  const {
    placeholderText,
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    text1,
    text2,
    note1InvalidSolu,
    globalHeader4Props,
    heading21Props,
    frame501Props,
    heading22Props,
    frame229Props,
    frame504Props,
    navigationActionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="cbpm-27 screen" name="form2" action="form2" method="post">
        <div className="overlap-group4">
          <div className="overlap-group2-1">
            <div className="cbpm-33">
              <div className="template-project-details">
                <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
                <Frame4742 />
                <div className="local-window-solution-details-7">
                  <div className="navigation-window-2">
                    <div className="overlap-group1-30">
                      <div className="body-2">
                        <div className="local-solution-details-6">
                          <Heading2 className={heading21Props.className}>{heading21Props.children}</Heading2>
                          <Frame501
                            inputsProps={frame501Props.inputsProps}
                            inputs2Props={frame501Props.inputs2Props}
                            inputFields3Props={frame501Props.inputFields3Props}
                            aTOMSICON2019close2Props={frame501Props.aTOMSICON2019close2Props}
                          />
                          <div className="divider-46"></div>
                          <Heading2 className={heading22Props.className}>{heading22Props.children}</Heading2>
                          <Frame229 aTOMSICON2019closeProps={frame229Props.aTOMSICON2019closeProps} />
                          <Frame504 {...frame504Props} />
                        </div>
                      </div>
                      <NavigationAction className={navigationActionProps.className} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="overlay"></div>
          </div>
          <div className="frame-49">
            <div className="group-38-1">
              <div className="input-fields-31">
                <div className="elements-58">
                  <div className="frame-31">
                    <div className="placeholder-text-74 neuehaasgroteskdisplaystd-bold-black-20px">
                      {placeholderText}
                    </div>
                    <img className="icon-19" src="/img/icon-88.svg" alt="Icon" />
                  </div>
                </div>
              </div>
              <div className="divider-47"></div>
            </div>
            <div className="flex-container neuehaasgroteskdisplaystd-regular-normal-black-14px">
              <div className="text0">
                <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">
                  Are you sure you want to proceed with  29 valid projects?</span>
                {/* <span className="neuehaasgroteskdisplaystd-bold-black-14px"></span>
                <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">{spanText3}</span> */}
              </div>
              {/* <div className="text1">
                <span className="neuehaasgroteskdisplaystd-regular-normal-black-14px">{spanText4}</span>
              </div> */}
            </div>
            <div className="overlap-group3-3">
              <div className="group-37-1">
                <Link to="/cbpm-28">
                  <div className="button">
                    <div className="content">
                      <div className="text-6 neuehaasgroteskdisplaystd-bold-white-14px">{text1}</div>
                    </div>
                  </div>
                </Link>
                <div className="button-1">
                  <div className="content">
                    <div className="text-6 neuehaasgroteskdisplaystd-bold-black-14px">{text2}</div>
                  </div>
                </div>
              </div>
              <div className="group-319">
                <div className="group-75">
                  <div className="rectangle-86"></div>
                  <div className="rectangle-87"></div>
                </div>
                <p className="note-1-invalid-solu neuehaasgroteskdisplaystd-bold-black-10px">{note1InvalidSolu}</p>
              </div>
              <div className="user-interaction-1">
                <img className="click-11" src="/img/click-16.svg" alt="Click" />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CBPM27;
