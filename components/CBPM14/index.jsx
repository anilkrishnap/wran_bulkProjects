import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus8 from "../LocalCardsValidationStatus8";
import TableAction from "../TableAction";
import Setting from "../Setting";
import TableHeader from "../TableHeader";
import InputFields16 from "../InputFields16";
import InputFields22 from "../InputFields22";
import TableRow2 from "../TableRow2";
import TableRow7 from "../TableRow7";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM14.css";

function CBPM14(props) {
  const {
    accordionMargin,
    checkboxMargin,
    placeholderText1,
    placeholderText2,
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus8Props,
    settingProps,
    tableHeaderProps,
    inputFields161Props,
    inputFields162Props,
    inputFields163Props,
    inputFields164Props,
    inputFields221Props,
    inputFields222Props,
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
      <div className="cbpm-14 screen">
        <div className="overlap-group4-1">
          <div className="template-create-bulk-projects-new">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-2">
              <div className="navigation-window-12">
                <div className="overlap-group3-8">
                  <div className="body-12">
                    <div className="table-with-validation">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus8
                        iconWithLabel4Props={localCardsValidationStatus8Props.iconWithLabel4Props}
                      />
                      <div className="frame-499">
                        <div className="local-create-bulk-projects-table-12">
                          <div className="table-new">
                            <div className="action-bar-4">
                              <div className="overlap-group1-39">
                                <div className="action-bar-items-4">
                                  <Link to="/cbpm-15">
                                    <div className="action-menu-4">
                                      <TableAction />
                                    </div>
                                  </Link>
                                  <Setting
                                    frame18Props={settingProps.frame18Props}
                                    frame18Props2={settingProps.frame18Props2}
                                  />
                                </div>
                                <div className="divider-187"></div>
                              </div>
                            </div>
                            <TableHeader rowDataProps={tableHeaderProps.rowDataProps} />
                            <div className="table-row-1-1">
                              <div className="inputs-32">
                                <img className="x-margin" src={accordionMargin} alt="Accordion Margin" />
                                <img className="x-margin" src={checkboxMargin} alt="CheckBox Margin" />
                                <InputFields16>{inputFields161Props.children}</InputFields16>
                                <InputFields16>{inputFields162Props.children}</InputFields16>
                                <InputFields16>{inputFields163Props.children}</InputFields16>
                                <InputFields16>{inputFields164Props.children}</InputFields16>
                                <div className="input">
                                  <div className="frame-18-79">
                                    <div className="frame-32-53">
                                      <div className="placeholder-text-180 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                                        {placeholderText1}
                                      </div>
                                    </div>
                                    <img
                                      className="atomsicon2019close-107"
                                      src="/img/atoms-icon-2019-close.svg"
                                      alt="ATOMS/ICON/2019/close"
                                    />
                                  </div>
                                  <div className="elements-102"></div>
                                </div>
                                <div className="input">
                                  <div className="frame-20-35">
                                    <div className="placeholder-text-181 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                                      {placeholderText2}
                                    </div>
                                  </div>
                                  <div className="elements-102"></div>
                                </div>
                                <InputFields22>{inputFields221Props.children}</InputFields22>
                                <InputFields22>{inputFields222Props.children}</InputFields22>
                              </div>
                              <div className="atomsdividersline2-pxblack-6"></div>
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
                          <div className="divider-188"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-189"></div>
            </div>
          </div>
          <UserInteraction />
        </div>
      </div>
    </div>
  );
}

export default CBPM14;
