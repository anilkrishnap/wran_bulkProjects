import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus8 from "../LocalCardsValidationStatus8";
import ActionBar2 from "../ActionBar2";
import TableHeader from "../TableHeader";
import InputFields32 from "../InputFields32";
import TableRow2 from "../TableRow2";
import TableRow7 from "../TableRow7";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import "./CBPM13.css";

function CBPM13(props) {
  const {
    accordionMargin,
    checkboxMargin,
    placeholderText,
    click2,
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus8Props,
    actionBar2Props,
    tableHeaderProps,
    tableRow21Props,
    tableRow22Props,
    tableRow23Props,
    tableRow24Props,
    tableRow25Props,
    tableRow7Props,
    tableRow26Props,
    tableRow27Props,
    paginationProps,
    navigationActionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-13 screen">
        <div className="overlap-group5-1">
          <div className="template-create-bulk-projects-new-1">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-3">
              <div className="navigation-window-16">
                <div className="overlap-group3-10">
                  <div className="body-16">
                    <div className="table-with-validation-1">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus8
                        iconWithLabel4Props={localCardsValidationStatus8Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-1">
                        <div className="local-create-bulk-projects-table-12-1">
                          <div className="table-new-1">
                            <ActionBar2 settingProps={actionBar2Props.settingProps} />
                            <TableHeader rowDataProps={tableHeaderProps.rowDataProps} />
                            <div className="table-row-1-2">
                              <Link to="/cbpm-14">
                                <div className="inputs-54">
                                  <img className="x-margin-1" src={accordionMargin} alt="Accordion Margin" />
                                  <img className="x-margin-1" src={checkboxMargin} alt="CheckBox Margin" />
                                  <InputFields32 />
                                  <InputFields32 />
                                  <InputFields32 />
                                  <InputFields32 />
                                  <div className="dropdown-input-4">
                                    <div className="frame-18-80">
                                      <div className="frame-32-54">
                                        <div className="placeholder-text-232 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
                                          {placeholderText}
                                        </div>
                                      </div>
                                      <img
                                        className="atomsicon2019close-108"
                                        src="/img/atoms-icon-2019-close.svg"
                                        alt="ATOMS/ICON/2019/close"
                                      />
                                    </div>
                                    <div className="elements-105"></div>
                                  </div>
                                  <InputFields32 />
                                  <InputFields32 />
                                  <InputFields32 />
                                </div>
                              </Link>
                              <div className="atomsdividersline2-pxblack-9"></div>
                            </div>
                            <TableRow2 rowData2Props={tableRow21Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow22Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow23Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow24Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow25Props.rowData2Props} />
                            <TableRow7 rowData3Props={tableRow7Props.rowData3Props} />
                            <TableRow2 rowData2Props={tableRow26Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow27Props.rowData2Props} />
                            <Scrollbar4 />
                            <Pagination {...paginationProps} />
                          </div>
                          <div className="divider-250"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-251"></div>
            </div>
          </div>
          <div className="user-interaction-12">
            <div className="click-container-8">
              <img className="click-28" src="/img/click-4.svg" alt="Click" />
              <div className="click-29 neuehaasgroteskdisplaystd-regular-normal-black-10px">{click2}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM13;
