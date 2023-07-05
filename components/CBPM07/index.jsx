import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus82 from "../LocalCardsValidationStatus82";
import ActionBar2 from "../ActionBar2";
import TableHeader from "../TableHeader";
import TableRow12 from "../TableRow12";
import Cell01Text4 from "../Cell01Text4";
import Table2 from "../Table2";
import Cell02Text from "../Cell02Text";
import TextIcon from "../TextIcon";
import Table3 from "../Table3";
import Cell06Text from "../Cell06Text";
import TableRow3 from "../TableRow3";
import TableRow4 from "../TableRow4";
import TableRow5 from "../TableRow5";
import TableRow7 from "../TableRow7";
import TableRow2 from "../TableRow2";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM07.css";

function CBPM07(props) {
  const {
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus82Props,
    actionBar2Props,
    tableHeaderProps,
    tableRow12Props,
    cell01Text4Props,
    cell02TextProps,
    table3Props,
    cell06Text1Props,
    cell06Text2Props,
    cell06Text3Props,
    cell06Text4Props,
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
      <div className="cbpm-07 screen">
        <div className="overlap-group4-5">
          <div className="template-create-bulk-projects-new-3">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-5">
              <div className="navigation-window-20">
                <div className="overlap-group3-15">
                  <div className="body-20">
                    <div className="table-with-validation-3">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus82
                        iconWithLabel4Props={localCardsValidationStatus82Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-3">
                        <div className="local-create-bulk-projects-table-12-3">
                          <div className="table-new-3">
                            <ActionBar2 settingProps={actionBar2Props.settingProps} />
                            <TableHeader rowDataProps={tableHeaderProps.rowDataProps} />
                            <TableRow12 rowData4Props={tableRow12Props.rowData4Props} />
                            <div className="table-row-2-1">
                              <div className="inputs-58">
                                <img className="checkbox-35" src="/img/checkbox.svg" alt="Checkbox" />
                                <div className="row-data-40">
                                  <Cell01Text4
                                    label={cell01Text4Props.label}
                                    statusIconSmall2Props={cell01Text4Props.statusIconSmall2Props}
                                    warningProps={cell01Text4Props.warningProps}
                                  />
                                  <Table2 />
                                  <Cell02Text>{cell02TextProps.children}</Cell02Text>
                                  <Link to="/cbpm-08">
                                    <div className="table-18">
                                      <TextIcon />
                                    </div>
                                  </Link>
                                  <Table3 lOCALWARNINGICONProps={table3Props.lOCALWARNINGICONProps} />
                                  <Cell06Text>{cell06Text1Props.children}</Cell06Text>
                                  <Cell06Text>{cell06Text2Props.children}</Cell06Text>
                                  <Cell06Text>{cell06Text3Props.children}</Cell06Text>
                                  <Cell06Text>{cell06Text4Props.children}</Cell06Text>
                                </div>
                              </div>
                              <div className="divider-264"></div>
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
                          <div className="divider-265"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-266"></div>
            </div>
          </div>
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM07;
