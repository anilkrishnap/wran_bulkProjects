import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4742 from "../Frame4742";
import Heading from "../Heading";
import Frame501 from "../Frame501";
import Frame229 from "../Frame229";
import Header from "../Header";
import Text from "../Text";
import NavigationAction from "../NavigationAction";
import "./CBPM22.css";

function CBPM22(props) {
  const {
    globalHeader4Props,
    heading1Props,
    frame501Props,
    heading2Props,
    frame229Props,
    headerProps,
    navigationActionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-22 screen">
        <div className="template-project-details-3">
          <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
          <Frame4742 />
          <div className="local-window-solution-details-7-3">
            <div className="navigation-window-7">
              <div className="overlap-group1-37">
                <div className="body-7">
                  <div className="local-solution-details-7">
                    <Heading className={heading1Props.className}>{heading1Props.children}</Heading>
                    <Frame501
                      inputsProps={frame501Props.inputsProps}
                      inputs2Props={frame501Props.inputs2Props}
                      inputFields3Props={frame501Props.inputFields3Props}
                      aTOMSICON2019close2Props={frame501Props.aTOMSICON2019close2Props}
                    />
                    <div className="divider-155"></div>
                    <Heading className={heading2Props.className}>{heading2Props.children}</Heading>
                    
                    <Frame229 aTOMSICON2019closeProps={frame229Props.aTOMSICON2019closeProps} />
                    <Header
                      columnHeader11Props={headerProps.columnHeader11Props}
                      columnHeader12Props={headerProps.columnHeader12Props}
                      columnHeader13Props={headerProps.columnHeader13Props}
                      columnHeader14Props={headerProps.columnHeader14Props}
                      columnHeader15Props={headerProps.columnHeader15Props}
                    />
                    <Text />
                  </div>
                </div>
                <div id="click_icon_22" className="click_icon"><img src="/img/click_hand_icon.svg" alt="Click"/></div>
                <NavigationAction className={navigationActionProps.className} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM22;
