import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4742 from "../Frame4742";
import Heading from "../Heading";
import Frame501 from "../Frame501";
import Frame229 from "../Frame229";
import Frame504 from "../Frame504";
import NavigationAction from "../NavigationAction";
import "./CBPM26.css";
import {Link} from "react-router-dom";

function CBPM26(props) {
  const {
    globalHeader4Props,
    heading1Props,
    frame501Props,
    heading2Props,
    frame229Props,
    frame504Props,
    navigationActionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      
      <div className="cbpm-26 screen">
        <div className="template-project-details-1">
          <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
          <Frame4742 />
          <div className="local-window-solution-details-7-1">
            <div className="navigation-window-5">
              <div className="overlap-group1-35">
                <div className="body-5">
                  <div className="local-solution-details-6-1">
                    <Heading className={heading1Props.className}>{heading1Props.children}</Heading>
                    <Frame501
                      inputsProps={frame501Props.inputsProps}
                      inputs2Props={frame501Props.inputs2Props}
                      inputFields3Props={frame501Props.inputFields3Props}
                      aTOMSICON2019close2Props={frame501Props.aTOMSICON2019close2Props}
                    />
                    <div className="divider-153"></div>
                    <Heading className={heading2Props.className}>{heading2Props.children}</Heading>
                    <Frame229 aTOMSICON2019closeProps={frame229Props.aTOMSICON2019closeProps} />
                    <Frame504 {...frame504Props} />
                  </div>
                </div>
                <NavigationAction className={navigationActionProps.className} />
                <div id="click_btn_26" className="click_icon"><img src="/img/click_hand_icon.svg" alt="Click"/></div>
                <div className="nxt_btn_26">
                  <Link to="/Cbpm-27" style={{color:'inherit', textDecoration:'none'}}>Save</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM26;
