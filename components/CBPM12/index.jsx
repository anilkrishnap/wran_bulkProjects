import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus8 from "../LocalCardsValidationStatus8";
import TableAction2 from "../TableAction2";
import TableAction4 from "../TableAction4";
import Setting from "../Setting";
import TableHeader from "../TableHeader";
import TableRow2 from "../TableRow2";
import TableRow7 from "../TableRow7";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM12.css";

function CBPM12(props) {
  const {
    action,
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus8Props,
    settingProps,
    tableHeaderProps,
    tableRow21Props,
    tableRow22Props,
    tableRow23Props,
    tableRow24Props,
    tableRow25Props,
    tableRow26Props,
    tableRow7Props,
    tableRow27Props,
    tableRow28Props,
    paginationProps,
    navigationActionProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-12 screen">
        <div className="overlap-group4-10">
          <div className="template-create-bulk-projects-new-8">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-10">
              <div className="navigation-window-25">
                <div className="overlap-group3-20">
                  <div className="body-25">
                    <div className="table-with-validation-8">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus8
                        iconWithLabel4Props={localCardsValidationStatus8Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-8">
                        <div className="local-create-bulk-projects-table-12-6">
                          <div className="table-new-8">
                            <div className="action-bar-16">
                              <div className="overlap-group1-47">
                                <div className="action-bar-items-16">
                                  <div className="action-menu-16">
                                    <Link to="/cbpm-13">
                                      <div className="table-action-30">
                                        <img className="icon-144" src="/img/icon-23.svg" alt="Icon" />
                                        <div className="action-30 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                                          {action}
                                        </div>
                                      </div>
                                    </Link>
                                    <TableAction2 />
                                    <TableAction4 />
                                  </div>
                                  <Setting
                                    frame18Props={settingProps.frame18Props}
                                    frame18Props2={settingProps.frame18Props2}
                                  />
                                </div>
                                <div className="divider-304"></div>
                              </div>
                            </div>
                            <TableHeader rowDataProps={tableHeaderProps.rowDataProps} />
                            <TableRow2 rowData2Props={tableRow21Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow22Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow23Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow24Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow25Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow26Props.rowData2Props} />
                            <TableRow7 rowData3Props={tableRow7Props.rowData3Props} />
                            <TableRow2 rowData2Props={tableRow27Props.rowData2Props} />
                            <TableRow2 rowData2Props={tableRow28Props.rowData2Props} />
                            <Scrollbar4 />
                            <Pagination {...paginationProps} />
                          </div>
                          <div className="divider-305"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-306"></div>
            </div>
          </div>
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM12;
