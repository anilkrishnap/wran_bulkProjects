import React from "react";
import { Link } from "react-router-dom";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType3 from "../LocalSelectSolutionType3";
import LocalCardsValidationStatus82 from "../LocalCardsValidationStatus82";
import TableAction from "../TableAction";
import Setting from "../Setting";
import TableHeader2 from "../TableHeader2";
import TableRow13 from "../TableRow13";
import Checkbox4 from "../Checkbox4";
import Cell01Text4 from "../Cell01Text4";
import InputFields42 from "../InputFields42";
import InputFields52 from "../InputFields52";
import InputFields62 from "../InputFields62";
import TableRow43 from "../TableRow43";
import TableRow62 from "../TableRow62";
import TableRow82 from "../TableRow82";
import Scrollbar4 from "../Scrollbar4";
import Pagination from "../Pagination";
import NavigationAction from "../NavigationAction";
import UserInteraction from "../UserInteraction";
import "./CBPM11.css";

function CBPM11(props) {
  const {
    globalHeader4Props,
    localSelectSolutionType3Props,
    localCardsValidationStatus82Props,
    settingProps,
    tableHeader2Props,
    tableRow131Props,
    cell01Text4Props,
    inputFields421Props,
    inputFields422Props,
    inputFields423Props,
    inputFields424Props,
    inputFields521Props,
    inputFields522Props,
    inputFields523Props,
    tableRow132Props,
    tableRow431Props,
    tableRow432Props,
    tableRow621Props,
    tableRow622Props,
    tableRow821Props,
    tableRow822Props,
    paginationProps,
    navigationActionProps,
    userInteractionProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-11 screen">
        <div className="overlap-group4-9">
          <div className="template-create-bulk-projects-new-7">
            <GlobalHeader4 globalHeader2Props={globalHeader4Props.globalHeader2Props} />
            <Frame4744 />
            <div className="localcbp-modification-3-9">
              <div className="navigation-window-24">
                <div className="overlap-group3-19">
                  <div className="body-24">
                    <div className="table-with-validation-7">
                      <LocalSelectSolutionType3 heading4Props={localSelectSolutionType3Props.heading4Props} />
                      <LocalCardsValidationStatus82
                        iconWithLabel4Props={localCardsValidationStatus82Props.iconWithLabel4Props}
                      />
                      <div className="frame-499-7">
                        <div className="local-create-bulk-projects-table-3-1">
                          <div className="table-new-7">
                            <div className="action-bar-15">
                              <div className="overlap-group1-46">
                                <div className="action-bar-items-15">
                                  <Link to="/cbpm-12">
                                    <div className="action-menu-15">
                                      <TableAction />
                                    </div>
                                  </Link>
                                  <Setting
                                    frame18Props={settingProps.frame18Props}
                                    frame18Props2={settingProps.frame18Props2}
                                  />
                                </div>
                                <div className="divider-300"></div>
                              </div>
                            </div>
                            <TableHeader2 rowDataProps={tableHeader2Props.rowDataProps} />
                            <TableRow13 {...tableRow131Props} />
                            <div className="table-row-2-3">
                              <div className="inputs-83">
                                <Checkbox4 />
                                <div className="row-data-64">
                                  <Cell01Text4
                                    label={cell01Text4Props.label}
                                    className={cell01Text4Props.className}
                                    statusIconSmall2Props={cell01Text4Props.statusIconSmall2Props}
                                    warningProps={cell01Text4Props.warningProps}
                                  />
                                  <InputFields42
                                    className={inputFields421Props.className}
                                    frame20Props={inputFields421Props.frame20Props}
                                  />
                                  <InputFields42 frame20Props={inputFields422Props.frame20Props} />
                                  <InputFields42
                                    className={inputFields423Props.className}
                                    frame20Props={inputFields423Props.frame20Props}
                                  />
                                  <InputFields42
                                    className={inputFields424Props.className}
                                    frame20Props={inputFields424Props.frame20Props}
                                  />
                                  <InputFields52 placeholderText={inputFields521Props.placeholderText} />
                                  <InputFields62 />
                                  <InputFields52
                                    placeholderText={inputFields522Props.placeholderText}
                                    className={inputFields522Props.className}
                                  />
                                  <InputFields52
                                    placeholderText={inputFields523Props.placeholderText}
                                    className={inputFields523Props.className}
                                  />
                                </div>
                              </div>
                              <div className="divider-301"></div>
                            </div>
                            <TableRow13 {...tableRow132Props} />
                            <TableRow43 {...tableRow431Props} />
                            <TableRow43 {...tableRow432Props} />
                            <TableRow62 {...tableRow621Props} />
                            <TableRow62 {...tableRow622Props} />
                            <TableRow82 {...tableRow821Props} />
                            <TableRow82 {...tableRow822Props} />
                            <Scrollbar4 />
                            <Pagination {...paginationProps} />
                          </div>
                          <div className="divider-302"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <NavigationAction className={navigationActionProps.className} />
                </div>
              </div>
              <div className="divider-303"></div>
            </div>
          </div>
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM11;
