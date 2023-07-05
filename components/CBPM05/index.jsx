import React from "react";
import { Link } from "react-router-dom";
import TemplateCreateBulkProjects32 from "../TemplateCreateBulkProjects32";
import ModalItems from "../ModalItems";
import ModalItems2 from "../ModalItems2";
import "./CBPM05.css";


function CBPM05(props) {
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
    <Link to="/cbpm-06">
    <div className="container-center-horizontal">
      <div className="cbpm-05 screen">
        <div className="overlap-group3-13">
          <TemplateCreateBulkProjects32
            globalHeaderProps={templateCreateBulkProjects32Props.globalHeaderProps}
            localSelectSolutionType32Props={templateCreateBulkProjects32Props.localSelectSolutionType32Props}
            emptyTableProps={templateCreateBulkProjects32Props.emptyTableProps}
            navigationActionProps={templateCreateBulkProjects32Props.navigationActionProps}
          />
          <div className="frame-505-1">
            <div className="overlay-3"></div>
            <div className="local-popup-upload-solution-in-progress-1">
              <div className="group-500-1">
                <div className="content-container-2">
                  <ModalItems />
                  <div className="flex-row-2">
                    <div className="inputs-57">
                      <div className="label-329">
                        <div className="label-330 neuehaasgroteskdisplaystd-regular-normal-black-14px">{label}</div>
                        <div className="required-18"></div>
                      </div>
                      <div className="input-fields-539">
                        <div className="elements-108">
                          <div className="frame-30-2">
                            <div className="placeholder-text-236 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                              {placeholderText}
                            </div>
                            <div className="button-24">
                              <div className="content-19">
                                <div className="text-91 neuehaasgroteskdisplaystd-regular-normal-white-10px">
                                  {text1}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="divider-261"></div>
                        </div>
                      </div>
                    </div>
                    <div className="button-25">
                      <div className="content-19">
                        <div className="text-91 neuehaasgroteskdisplaystd-bold-black-12px">{text2}</div>
                      </div>
                    </div>
                  </div>
                  <div className="localupload-status-loader-25 neuehaasgroteskdisplaystd-regular-normal-black-11px">
                    <div className="upload-status-1">{uploadStatus}</div>
                    <div className="loader-1">
                      <div className="loader-bar-1">
                        <div className="color-area-1"></div>
                      </div>
                      <div className="percent-1">{percent}</div>
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

export default CBPM05;
