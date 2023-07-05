import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus8 from "../LocalCardsValidationStatus8";
import ActionBar2 from "../ActionBar2";
import TableHeader from "../TableHeader";
import TableRow2 from "../TableRow2";
import TableRow7 from "../TableRow7";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import "./TemplateCreateBulkProjectsNew.css";

function TemplateCreateBulkProjectsNew(props) {
  const {
    globalHeaderProps,
    globalHeaderProps2,
    localCardsValidationStatus8Props,
    actionBar2Props,
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
  } = props;

  return (
    <div className="template-create-bulk-projects-new-2">
      <GlobalHeader4 globalHeader2Props={globalHeaderProps.globalHeader2Props} />
      <Frame4744 />
      <div className="localcbp-modification-3-4">
        <div className="navigation-window-19">
          <div className="overlap-group3-14">
            <div className="body-19">
              <div className="table-with-validation-2">
                <LocalSelectSolutionType3 heading4Props={globalHeaderProps2.heading4Props} />
                <LocalCardsValidationStatus8
                  iconWithLabel4Props={localCardsValidationStatus8Props.iconWithLabel4Props}
                />
                <div className="frame-499-2">
                  <div className="local-create-bulk-projects-table-12-2">
                    <div className="table-new-2">
                      <ActionBar2 settingProps={actionBar2Props.settingProps} />
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
                    <div className="divider-262"></div>
                  </div>
                </div>
              </div>
            </div>
            <NavigationAction className={navigationActionProps.className} />
          </div>
        </div>
        <div className="divider-263"></div>
      </div>
    </div>
  );
}

export default TemplateCreateBulkProjectsNew;
