import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus82 from "../LocalCardsValidationStatus82";
import ActionBar2 from "../ActionBar2";
import RowData11 from "../RowData11";
import TableRow12 from "../TableRow12";
import RowData5 from "../RowData5";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow7 from "../TableRow7";
import TableRow2 from "../TableRow2";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM08.css";

function CBPM08(props) {
  const {
    srNameDoesNotMatch,
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus82Props,
    actionBar2Props,
    rowData11Props,
    tableRow12Props,
    rowData5Props,
    tableRow3Props,
    tableRow4Props,
    tableRow5Props,
    tableRow71Props,
    tableRow72Props,
    tableRow21Props,
    tableRow22Props,
    paginationProps,
    navigationActionProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-08 screen">
        <div className="overlap-group5-2">
          <div className="template-create-bulk-projects-new-4">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-6">
              <div className="navigation-window-21">
                <div className="overlap-group3-16">
                  <div className="body-21">
                    <div className="table-with-validation-4">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus82
                        iconWithLabel4Props={localCardsValidationStatus82Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-4">
                        <div className="local-create-bulk-projects-table-12-4">
                          <div className="table-new-4">
                            <ActionBar2 settingProps={actionBar2Props.settingProps} />
                            <div className="table-34">
                              <div className="inputs-67">
                                <Link to="/cbpm-09">
                                  <img className="checkbox-44" src="/img/checkbox.svg" alt="Checkbox" />
                                </Link>
                                <RowData11 {...rowData11Props} />
                              </div>
                              <div className="divider-275"></div>
                            </div>
                            <TableRow12 rowData4Props={tableRow12Props.rowData4Props} />
                            <div className="table-34">
                              <div className="inputs-67">
                                <img className="checkbox-45" src="/img/checkbox.svg" alt="Checkbox" />
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
                              <div className="divider-276"></div>
                            </div>
                            <TableRow3 rowData6Props={tableRow3Props.rowData6Props} />
                            <TableRow4 rowData7Props={tableRow4Props.rowData7Props} />
                            <TableRow5 rowData8Props={tableRow5Props.rowData8Props} />
                            <TableRow7 rowData3Props={tableRow71Props.rowData3Props} />
                            <TableRow7 rowData3Props={tableRow72Props.rowData3Props} />
                            <TableRow2 rowData2Props={tableRow21Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow22Props.rowData2Props} />
                            <Scrollbar4 />
                            <Pagination {...paginationProps} />
                          </div>
                          <div className="divider-277"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-278"></div>
            </div>
          </div>
          <div className="overlap-group4-6">
            <p className="sr-name-does-not-match neuehaasgroteskdisplaystd-regular-normal-black-11px">
              {srNameDoesNotMatch}
            </p>
          </div>
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM08;
