import React from "react";
import { Link } from "react-router-dom";
import TemplateCreateBulkProjects32 from "../TemplateCreateBulkProjects32";
import ModalItems from "../ModalItems";
import ModalItems2 from "../ModalItems2";
import "./CBPM06.css";

function CBPM06(props) {
  const {
    label,
    placeholderText,
    text1,
    text2,
    uploadStatus,
    percent,
    templateCreateBulkProjects32Props,
    modalItems2Props,
  } = props;

  return (
    <Link to="/cbpm-07">
    <div className="container-center-horizontal">
      <div className="cbpm-06 screen">
        <div className="overlap-group3-12">
          <TemplateCreateBulkProjects32
            globalHeaderProps={templateCreateBulkProjects32Props.globalHeaderProps}
            localSelectSolutionType32Props={templateCreateBulkProjects32Props.localSelectSolutionType32Props}
            emptyTableProps={templateCreateBulkProjects32Props.emptyTableProps}
            navigationActionProps={templateCreateBulkProjects32Props.navigationActionProps}
          />
          <div className="frame-505">
            <div className="overlay-2"></div>
            <div className="local-popup-upload-solution-in-progress">
              <div className="group-500">
                <div className="content-container-1">
                  <ModalItems />
                  <div className="flex-row-1">
                    <div className="inputs-56">
                      <div className="label-327">
                        <div className="label-328 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
                        <div className="required-17"></div>
                      </div>
                      <div className="input-fields-538">
                        <div className="elements-107">
                          <div className="frame-30-1">
                            <div className="placeholder-text-235 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                              {placeholderText}
                            </div>
                            <div className="button-22">
                              <div className="content-18">
                                <div className="text-90 neuehaasgroteskdisplaystd-regular-normal-white-10px">
                                  {text1}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divider-258"></div>
                        </div>
                      </div>
                    </div>
                    <div className="button-23">
                      <div className="content-18">
                        <div className="text-90 neuehaasgroteskdisplaystd-bold-black-12px">{text2}</div>
                      </div>
                    </div>
                  </div>
                  <div className="localupload-status-loader-100 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                    <div className="upload-status">{uploadStatus}</div>
                    <div className="loader">
                      <div className="loader-bar">
                        <div className="color-area"></div>
                      </div>
                      <div className="percent">{percent}</div>
                    </div>
                  </div>
                  <ModalItems2 className={modalItems2Props.className} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Link>
  );
}

export default CBPM06;
