import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4742 from "../Frame4742";
import Heading from "../Heading";
import Frame501 from "../Frame501";
import Frame229 from "../Frame229";
import Header from "../Header";
import Text from "../Text";
import ATOMSICON2019close from "../ATOMSICON2019close";
import Checkbox2 from "../Checkbox2";
import MenuItem from "../MenuItem";
import Scrollbar from "../Scrollbar";
import NavigationAction from "../NavigationAction";
import "./CBPM24.css";


function CBPM24(props) {
  const {
    placeholderText1,
    text1,
    text2,
    placeholderText2,
    globalHeader4Props,
    heading1Props,
    frame501Props,
    heading2Props,
    frame229Props,
    headerProps,
    textProps,
    aTOMSICON2019closeProps,
    checkbox2Props,
    menuItem1Props,
    menuItem2Props,
    menuItem3Props,
    scrollbarProps,
    navigationActionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <form className="cbpm-24 screen" name="form3" action="form3" method="post">
        <div className="template-project-details-5">
          <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
          <Frame4742 />
          <div className="local-window-solution-details-7-5">
            <div className="navigation-window-11">
              <div className="overlap-group2-2">
                <div className="body-11">
                  <div className="local-solution-details-8">
                    <div className="local-solution-details-8-1">
                      <Heading className={heading1Props.className}>{heading1Props.children}</Heading>
                      <Frame501
                        inputsProps={frame501Props.inputsProps}
                        inputs2Props={frame501Props.inputs2Props}
                        inputFields3Props={frame501Props.inputFields3Props}
                        aTOMSICON2019close2Props={frame501Props.aTOMSICON2019close2Props}
                      />
                      <div className="divider-185"></div>
                      <Heading className={heading2Props.className}>{heading2Props.children}</Heading>
                      <Frame229 aTOMSICON2019closeProps={frame229Props.aTOMSICON2019closeProps} />
                      <Header
                        className={headerProps.className}
                        columnHeader11Props={headerProps.columnHeader11Props}
                        columnHeader12Props={headerProps.columnHeader12Props}
                        columnHeader13Props={headerProps.columnHeader13Props}
                        columnHeader14Props={headerProps.columnHeader14Props}
                        columnHeader15Props={headerProps.columnHeader15Props}
                      />
                      <Text className={textProps.className} />
                    </div>
                    <div className="group-519">
                      <div className="overlap-group-47">
                        <div className="rectangle-36-1"></div>
                        <div className="dropdown-multi-select">
                          <div className="search-input-13">
                            <div className="frame-18-78">
                              <div className="frame-32-52">
                                <div className="placeholder-text-177 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                                  {placeholderText1}
                                </div>
                              </div>
                              <ATOMSICON2019close className={aTOMSICON2019closeProps.className} />
                            </div>
                            <div className="elements-101"></div>
                          </div>
                          <div className="button-14">
                            <div className="button-15">
                              <div className="content-13">
                                <div className="text-30">{text1}</div>
                              </div>
                            </div>
                            <div className="button-16">
                              <div className="content-13">
                                <div className="text-31 neuehaasgroteskdisplaystd-bold-black-10px">{text2}</div>
                              </div>
                            </div>
                          </div>
                          <div className="default">
                            <div className="menu">
                              
                                <div className="menu-item">
                                  <Checkbox2 placeholderText={checkbox2Props.placeholderText} />
                                  <div className="divider-184"></div>
                                </div>
                              
                              <MenuItem checkbox2Props={menuItem1Props.checkbox2Props} />
                              <div className="click_icon"><img src="/img/click_hand_icon.svg" alt="Click"/></div>
                              <MenuItem checkbox2Props={menuItem2Props.checkbox2Props} />
                              <MenuItem checkbox2Props={menuItem3Props.checkbox2Props} />
                              <div className="menu-item-1">
                                <div className="checkbox-14">
                                  <img className="checkbox-15" src="/img/checkbox-52.svg" alt="Checkbox" />
                                  <div className="placeholder-text-178 neuehaasgroteskdisplaystd-regular-normal-black-12px">
                                    {placeholderText2}
                                  </div>
                                </div>
                                <div className="divider-184"></div>
                              </div>
                            </div>
                            <Scrollbar className={scrollbarProps.className} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <NavigationAction className={navigationActionProps.className} />
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CBPM24;
