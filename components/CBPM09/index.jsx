import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus82 from "../LocalCardsValidationStatus82";
import Setting from "../Setting";
import TableHeader2 from "../TableHeader2";
import Checkbox4 from "../Checkbox4";
import RowData4 from "../RowData4";
import RowData5 from "../RowData5";
import RowData6 from "../RowData6";
import RowData7 from "../RowData7";
import RowData8 from "../RowData8";
import TableRow6 from "../TableRow6";
import TableRow8 from "../TableRow8";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM09.css";

function CBPM09(props) {
  const {
    action,
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus82Props,
    settingProps,
    tableHeader2Props,
    rowData4Props,
    rowData5Props,
    rowData6Props,
    rowData7Props,
    rowData8Props,
    tableRow61Props,
    tableRow62Props,
    tableRow81Props,
    tableRow82Props,
    paginationProps,
    navigationActionProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-09 screen">
        <div className="overlap-group4-7">
          <div className="template-create-bulk-projects-new-5">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-7">
              <div className="navigation-window-22">
                <div className="overlap-group3-17">
                  <div className="body-22">
                    <div className="table-with-validation-5">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus82
                        iconWithLabel4Props={localCardsValidationStatus82Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-5">
                        <div className="local-create-bulk-projects-table-12-5">
                          <div className="table-new-5">
                            <div className="action-bar-13">
                              <div className="overlap-group1-44">
                                <div className="action-bar-items-13">
                                  <Link to="/cbpm-10">
                                    <div className="action-menu-13">
                                      <div className="table-action-29">
                                        <div className="icon-143">
                                          <div className="group-172"></div>
                                        </div>
                                        <div className="action-29 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                                          {action}
                                        </div>
                                      </div>
                                    </div>
                                  </Link>
                                  <Setting
                                    frame18Props={settingProps.frame18Props}
                                    frame18Props2={settingProps.frame18Props2}
                                  />
                                </div>
                                <div className="divider-280"></div>
                              </div>
                            </div>
                            <TableHeader2 rowDataProps={tableHeader2Props.rowDataProps} />
                            <div className="table-row-11">
                              <div className="inputs-68">
                                <Checkbox4 />
                                <RowData4 {...rowData4Props} />
                              </div>
                              <div className="divider-279"></div>
                            </div>
                            <div className="table-row-11">
                              <div className="inputs-68">
                                <Checkbox4 />
                                <RowData5
                                  cell01Text4Props={rowData5Props.cell01Text4Props}
                                  cell02TextProps={rowData5Props.cell02TextProps}
                                  cell06Text1Props={rowData5Props.cell06Text1Props}
                                  cell06Text1Props2={rowData5Props.cell06Text1Props2}
                                  cell06Text2Props={rowData5Props.cell06Text2Props}
                                  cell06Text3Props={rowData5Props.cell06Text3Props}
                                  cell06Text4Props={rowData5Props.cell06Text4Props}
                                />
                              </div>
                              <div className="divider-279"></div>
                            </div>
                            <div className="table-row-11">
                              <div className="inputs-68">
                                <Checkbox4 />
                                <RowData6 {...rowData6Props} />
                              </div>
                              <div className="divider-279"></div>
                            </div>
                            <div className="table-row-11">
                              <div className="inputs-68">
                                <Checkbox4 />
                                <RowData7
                                  cell01Text5Props={rowData7Props.cell01Text5Props}
                                  cell02Text1Props={rowData7Props.cell02Text1Props}
                                  cell02Text2Props={rowData7Props.cell02Text2Props}
                                  cell06Text1Props={rowData7Props.cell06Text1Props}
                                  cell06Text2Props={rowData7Props.cell06Text2Props}
                                  cell06Text3Props={rowData7Props.cell06Text3Props}
                                  cell06Text4Props={rowData7Props.cell06Text4Props}
                                />
                              </div>
                              <div className="divider-279"></div>
                            </div>
                            <div className="table-row-11">
                              <div className="inputs-68">
                                <Checkbox4 />
                                <RowData8 {...rowData8Props} />
                              </div>
                              <div className="divider-279"></div>
                            </div>
                            <TableRow6 rowData3Props={tableRow61Props.rowData3Props} />
                            <TableRow6 rowData3Props={tableRow62Props.rowData3Props} />
                            <TableRow8 rowData2Props={tableRow81Props.rowData2Props} />
                            <TableRow8 rowData2Props={tableRow82Props.rowData2Props} />
                            <Scrollbar4 />
                            <Pagination {...paginationProps} />
                          </div>
                          <div className="divider-281"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-282"></div>
            </div>
          </div>
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM09;
