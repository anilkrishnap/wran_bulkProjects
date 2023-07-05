import React from "react";
import { Link } from "react-router-dom";
import TemplateCreateBulkProjects3 from "../TemplateCreateBulkProjects3";
import ModalItems from "../ModalItems";
import ModalItems2 from "../ModalItems2";
import Group391 from "../Group391";
import "./CBPM04.css";

function CBPM04(props) {
  const {
    label1,
    placeholderText,
    text1,
    text2,
    label2,
    templateCreateBulkProjects3Props,
    templateCreateBulkProjects3Props2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-04 screen">
        <div className="overlap-group4-3">
          <TemplateCreateBulkProjects3
            globalHeaderProps={templateCreateBulkProjects3Props.globalHeaderProps}
            emptyTableProps={templateCreateBulkProjects3Props.emptyTableProps}
            navigationActionProps={templateCreateBulkProjects3Props.navigationActionProps}
          />
          <div className="overlay-1">
            <div className="overlap-group3-11">
              <div className="content-container">
                <ModalItems />
                <div className="flex-row">
                  <div className="inputs-55">
                    <div className="label-324">
                      <div className="label-325 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label1}</div>
                      <div className="required-16"></div>
                    </div>
                    <div className="input-fields-537">
                      <div className="elements-106">
                        <div className="frame-30">
                          <div className="placeholder-text-234 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                            {placeholderText}
                          </div>
                          <div className="button-17">
                            <div className="content-14">
                              <div className="text-86 neuehaasgroteskdisplaystd-regular-normal-white-10px"><Link to="/cbpm-05" style={{ color: 'inherit', textDecoration: 'none' }}>{text1}</Link></div>
                            </div>
                          </div>
                        </div>
                        <div className="divider-257"></div>
                      </div>
                    </div>
                  </div>
                  <div className="button-18">
                    <div className="content-14">
                      <div className="text-86 neuehaasgroteskdisplaystd-bold-black-12px">{text2}</div>
                    </div>
                  </div>
                </div>
                <div className="frame-468">
                  <div className="group-171">
                    <div className="rectangle-138"></div>
                    <div className="rectangle-139"></div>
                  </div>
                  <p className="label-326 neuehaasgroteskdisplaystd-regular-normal-black-12px">{label2}</p>
                </div>
                <ModalItems2 />
              </div>
              <Group391 className={templateCreateBulkProjects3Props2.className} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM04;
