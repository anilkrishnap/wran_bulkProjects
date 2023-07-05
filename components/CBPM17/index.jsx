import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame474 from "../Frame474";
import Heading2 from "../Heading2";
import Frame501 from "../Frame501";
import Frame503 from "../Frame503";
import Group391 from "../Group391";
import "./CBPM17.css";

function CBPM17(props) {
  const {
    label1,
    label2,
    label3,
    globalHeader4Props,
    heading2Props,
    frame501Props,
    frame503Props,
    group391Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-17 screen">
        <div className="overlap-group3-2">
          <div className="template-solution-details-1">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame474 />
            <div className="localcbp-modification-3-1">
              <div className="navigation-window-1">
                <div className="overlap-group1-29">
                  <div className="body-1">
                    <div className="solution-details-4-1">
                      <Heading2>{heading2Props.children}</Heading2>
                      <Frame501
                        inputsProps={frame501Props.inputsProps}
                        inputs2Props={frame501Props.inputs2Props}
                        inputFields3Props={frame501Props.inputFields3Props}
                        aTOMSICON2019close2Props={frame501Props.aTOMSICON2019close2Props}
                      />
                      <div className="divider-45"></div>
                      <Frame503
                        checkbox1Props={frame503Props.checkbox1Props}
                        checkbox2Props={frame503Props.checkbox2Props}
                      />
                    </div>
                  </div>
                  <div className="navigation-action-24">
                    <div className="overlap-group-29 neuehaasgroteskdisplaystd-regular-normal-white-14px">
                      <div className="label-86">{label1}</div>
                      <img className="line-4" src="/img/line.svg" alt="Line" />
                      <Link to="/cbpm-18">
                        <div className="label-87 neuehaasgroteskdisplaystd-regular-normal-white-14px">{label2}</div>
                      </Link>
                      <img className="line-5" src="/img/line.svg" alt="Line" />
                      <div className="label-88">{label3}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Group391 className={group391Props.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM17;
