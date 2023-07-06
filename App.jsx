import "./App.css";
import React from "react";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import CBPM28 from "./components/CBPM28";
import CBPM16 from "./components/CBPM16";
import CBPM17 from "./components/CBPM17";
import CBPM27 from "./components/CBPM27";
import CBPM18 from "./components/CBPM18";
import CBPM19 from "./components/CBPM19";
import CBPM26 from "./components/CBPM26";
import CBPM22 from "./components/CBPM22";
import CBPM20 from "./components/CBPM20";
import CBPM21 from "./components/CBPM21";
import CBPM24 from "./components/CBPM24";
import CBPM14 from "./components/CBPM14";
import CBPM01 from "./components/CBPM01";
import CBPM02 from "./components/CBPM02";
import CBPM03 from "./components/CBPM03";
import CBPM13 from "./components/CBPM13";
import CBPM04 from "./components/CBPM04";
import CBPM06 from "./components/CBPM06";
import CBPM05 from "./components/CBPM05";
import CBPM15 from "./components/CBPM15";
import CBPM07 from "./components/CBPM07";
import CBPM08 from "./components/CBPM08";
import CBPM09 from "./components/CBPM09";
import CBPM10 from "./components/CBPM10";
import CBPM11 from "./components/CBPM11";
import CBPM12 from "./components/CBPM12";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/cbpm-28">
          <CBPM28
            download="/img/download@2x.png"
            x1="9"
            project23324823948Y="All the valid projects are being added to the system, you will be notified once done."
            mOLECULESFORMSEARCHProps={cBPM28Data.mOLECULESFORMSEARCHProps}
          />
        </Route>
        <Route path="/cbpm-16">
          <CBPM16
            placeholderText1="Select Solution Type"
            placeholderText2="14 Feb 2023"
            globalHeader4Props={cBPM16Data.globalHeader4Props}
            headingProps={cBPM16Data.headingProps}
            inputFields1Props={cBPM16Data.inputFields1Props}
            inputFields2Props={cBPM16Data.inputFields2Props}
            frame503Props={cBPM16Data.frame503Props}
          />
        </Route>
        <Route path="/cbpm-17">
          <CBPM17 {...cBPM17Data} />
        </Route>
        <Route path="/cbpm-27">
          <CBPM27 {...cBPM27Data} />
        </Route>
        <Route path="/cbpm-18">
          <CBPM18 {...cBPM18Data} />
        </Route>
        <Route path="/cbpm-19">
          <CBPM19 {...cBPM19Data} />
        </Route>
        <Route path="/cbpm-26">
          <CBPM26
            globalHeader4Props={cBPM261Data.globalHeader4Props}
            heading1Props={cBPM261Data.heading1Props}
            frame501Props={cBPM261Data.frame501Props}
            heading2Props={cBPM261Data.heading2Props}
            frame229Props={cBPM261Data.frame229Props}
            frame504Props={cBPM261Data.frame504Props}
            navigationActionProps={cBPM261Data.navigationActionProps}
          />
        </Route>
        <Route path="/cbpm-22">
          <CBPM22
            globalHeader4Props={cBPM221Data.globalHeader4Props}
            heading1Props={cBPM221Data.heading1Props}
            frame501Props={cBPM221Data.frame501Props}
            heading2Props={cBPM221Data.heading2Props}
            frame229Props={cBPM221Data.frame229Props}
            headerProps={cBPM221Data.headerProps}
            navigationActionProps={cBPM221Data.navigationActionProps}
          />
        </Route>
        <Route path="/cbpm-20">
          <CBPM20 {...cBPM20Data} />
        </Route>
        <Route path="/cbpm-21">
          <CBPM21 {...cBPM21Data} />
        </Route>
        <Route path="/cbpm-23">
          <CBPM22
            globalHeader4Props={cBPM222Data.globalHeader4Props}
            heading1Props={cBPM222Data.heading1Props}
            frame501Props={cBPM222Data.frame501Props}
            heading2Props={cBPM222Data.heading2Props}
            frame229Props={cBPM222Data.frame229Props}
            headerProps={cBPM222Data.headerProps}
            navigationActionProps={cBPM222Data.navigationActionProps}
          />
        </Route>
        <Route path="/cbpm-24">
          <CBPM24 {...cBPM24Data} />
        </Route>
        <Route path="/cbpm-25">
          <CBPM26
            globalHeader4Props={cBPM262Data.globalHeader4Props}
            heading1Props={cBPM262Data.heading1Props}
            frame501Props={cBPM262Data.frame501Props}
            heading2Props={cBPM262Data.heading2Props}
            frame229Props={cBPM262Data.frame229Props}
            frame504Props={cBPM262Data.frame504Props}
            navigationActionProps={cBPM262Data.navigationActionProps}
          />
        </Route>
        <Route path="/cbpm-14">
          <CBPM14 {...cBPM14Data} />
        </Route>
        <Route path="/:path(|cbpm-01)">
          <CBPM01
            frame14="/img/click-1.svg"
            globalHeader2Props={cBPM01Data.globalHeader2Props}
            globalHeader2Props2={cBPM01Data.globalHeader2Props2}
          />
        </Route>
        <Route path="/cbpm-02">
          <CBPM02
            placeholderText="New Build"
            click2="CLICK"
            globalHeader4Props={cBPM02Data.globalHeader4Props}
            frame4744Props={cBPM02Data.frame4744Props}
            heading4Props={cBPM02Data.heading4Props}
            navigationActionProps={cBPM02Data.navigationActionProps}
          />
        </Route>
        <Route path="/cbpm-03">
          <CBPM03
            templateCreateBulkProjects3Props={cBPM03Data.templateCreateBulkProjects3Props}
            userInteractionProps={cBPM03Data.userInteractionProps}
          />
        </Route>
        <Route path="/cbpm-13">
          <CBPM13 {...cBPM13Data} />
        </Route>
        <Route path="/cbpm-04">
          <CBPM04
            label1="Upload Solution"
            placeholderText="Upload document"
            text1="Upload"
            text2="Download Bulk Edit Template"
            label2="Only CSV files are allowed maximum XXX solutions are allowed at one time"
            templateCreateBulkProjects3Props={cBPM04Data.templateCreateBulkProjects3Props}
            templateCreateBulkProjects3Props2={cBPM04Data.templateCreateBulkProjects3Props2}
          />
        </Route>
        <Route path="/cbpm-06">
          <CBPM06 {...cBPM06Data} />
        </Route>
        <Route path="/cbpm-05">
          <CBPM05 {...cBPM05Data} />
        </Route>
        <Route path="/cbpm-15">
          <CBPM15
            templateCreateBulkProjectsNewProps={cBPM15Data.templateCreateBulkProjectsNewProps}
            userInteractionProps={cBPM15Data.userInteractionProps}
          />
        </Route>
        <Route path="/cbpm-07">
          <CBPM07 {...cBPM07Data} />
        </Route>
        <Route path="/cbpm-08">
          <CBPM08 {...cBPM08Data} />
        </Route>
        <Route path="/cbpm-09">
          <CBPM09 {...cBPM09Data} />
        </Route>
        <Route path="/cbpm-10">
          <CBPM10 {...cBPM10Data} />
        </Route>
        <Route path="/cbpm-11">
          <CBPM11 {...cBPM11Data} />
        </Route>
        <Route path="/cbpm-12">
          <CBPM12 {...cBPM12Data} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const aTOMSICON2019close1Data = {
    className: "",
};

const mOLECULESFORMSEARCH1Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close1Data,
};

const cBPM28Data = {
    mOLECULESFORMSEARCHProps: mOLECULESFORMSEARCH1Data,
};

const menuLogo2Data = {
    className: "menu-logo-1",
};

const aTOMSICON2019close2Data = {
    className: "atomsicon2019close-24",
};

const mOLECULESFORMSEARCH2Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close2Data,
};

const aTOMSICON2019notification1Data = {
    className: "",
};

const aTOMSICON2019chatCopy2Data = {
    className: "atomsicon2019chat-copy-1",
};

const globalHeader21Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo2Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH2Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification1Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy2Data,
};

const globalHeader41Data = {
    globalHeader2Props: globalHeader21Data,
};

const heading1Data = {
    children: "Solution  Details",
};

const inputFields1Data = {
    placeholderText: "Select Year",
};

const inputFields2Data = {
    placeholderText: "Enter Rationale",
};

const checkbox1Data = {
    placeholderText: "4G",
};

const checkbox2Data = {
    placeholderText: "5G",
};

const frame5031Data = {
    checkbox1Props: checkbox1Data,
    checkbox2Props: checkbox2Data,
};

const cBPM16Data = {
    placeholderText1: "Select Solution Type",
    placeholderText2: "14 Feb 2023",
    globalHeader4Props: globalHeader41Data,
    headingProps: heading1Data,
    inputFields1Props: inputFields1Data,
    inputFields2Props: inputFields2Data,
    frame503Props: frame5031Data,
};

const menuLogo3Data = {
    className: "menu-logo-2",
};

const aTOMSICON2019close3Data = {
    className: "atomsicon2019close-25",
};

const mOLECULESFORMSEARCH3Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close3Data,
};

const aTOMSICON2019notification2Data = {
    className: "",
};

const aTOMSICON2019chatCopy3Data = {
    className: "atomsicon2019chat-copy-2",
};

const globalHeader22Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo3Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH3Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification2Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy3Data,
};

const globalHeader42Data = {
    globalHeader2Props: globalHeader22Data,
};

const heading21Data = {
    children: "Solution  Details",
};

const inputFields22Data = {
    placeholderText: "New Build",
};

const inputs1Data = {
    inputFields2Props: inputFields22Data,
};

const inputFields31Data = {
    placeholderText: "2023",
};

const inputs21Data = {
    inputFields3Props: inputFields31Data,
};

const inputFields32Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close23Data = {
    className: "",
};

const frame5011Data = {
    inputsProps: inputs1Data,
    inputs2Props: inputs21Data,
    inputFields3Props: inputFields32Data,
    aTOMSICON2019close2Props: aTOMSICON2019close23Data,
};

const checkbox3Data = {
    placeholderText: "4G",
};

const checkbox4Data = {
    placeholderText: "5G",
};

const frame5032Data = {
    checkbox1Props: checkbox3Data,
    checkbox2Props: checkbox4Data,
};

const group3912Data = {
    className: "group-391-1",
};

const cBPM17Data = {
    label1: "Show All",
    label2: "Show Next",
    label3: "Save",
    globalHeader4Props: globalHeader42Data,
    heading2Props: heading21Data,
    frame501Props: frame5011Data,
    frame503Props: frame5032Data,
    group391Props: group3912Data,
};

const menuLogo4Data = {
    className: "",
};

const aTOMSICON2019close4Data = {
    className: "",
};

const mOLECULESFORMSEARCH4Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close4Data,
};

const aTOMSICON2019notification3Data = {
    className: "atomsicon2019notification-2",
};

const aTOMSICON2019chatCopy4Data = {
    className: "",
};

const globalHeader23Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo4Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH4Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification3Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy4Data,
};

const globalHeader43Data = {
    globalHeader2Props: globalHeader23Data,
};

const heading22Data = {
    children: "Project Details",
    className: "heading-11-1",
};

const inputFields23Data = {
    placeholderText: "New Build",
};

const inputs3Data = {
    inputFields2Props: inputFields23Data,
};

const inputFields33Data = {
    placeholderText: "2023",
};

const inputs22Data = {
    inputFields3Props: inputFields33Data,
};

const inputFields34Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close24Data = {
    className: "",
};

const frame5012Data = {
    inputsProps: inputs3Data,
    inputs2Props: inputs22Data,
    inputFields3Props: inputFields34Data,
    aTOMSICON2019close2Props: aTOMSICON2019close24Data,
};

const heading23Data = {
    children: "Contact Information",
    className: "heading-11",
};

const aTOMSICON2019close5Data = {
    className: "atomsicon2019close",
};

const frame2291Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close5Data,
};

const columnHeader11Data = {
    children: "Name",
};

const columnHeader12Data = {
    children: "Company",
};

const columnHeader13Data = {
    children: "Contact Type",
};

const columnHeader14Data = {
    children: "Phone",
};

const columnHeader15Data = {
    children: "Email",
};

const cell01Text1Data = {
    children: "Jason Cham",
};

const cell01Text2Data = {
    children: "VERIZON",
};

const cell01Text3Data = {
    children: "8987654322",
};

const cell01Text4Data = {
    children: "josh@verizon.com",
};

const tableRow11Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text1Data,
    cell01Text2Props: cell01Text2Data,
    cell01Text3Props: cell01Text3Data,
    cell01Text4Props: cell01Text4Data,
};

const cell01Text5Data = {
    children: "Jack Hermasson",
};

const cell01Text6Data = {
    children: "VERIZON",
};

const cell01Text7Data = {
    children: "XXXXXXXXXX",
};

const cell01Text8Data = {
    children: "abc@verizon.com",
};

const tableRow12Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text5Data,
    cell01Text2Props: cell01Text6Data,
    cell01Text3Props: cell01Text7Data,
    cell01Text4Props: cell01Text8Data,
};

const cell01Text9Data = {
    children: "James",
};

const cell01Text10Data = {
    children: "VERIZON",
};

const cell01Text11Data = {
    children: "XXXXXXXXXX",
};

const cell01Text12Data = {
    children: "abc@verizon.com",
};

const tableRow13Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text9Data,
    cell01Text2Props: cell01Text10Data,
    cell01Text3Props: cell01Text11Data,
    cell01Text4Props: cell01Text12Data,
};

const showPage1Data = {
    placeholderText: "0",
};

const pageNumber41Data = {
    children: "2",
};

const frame5041Data = {
    columnHeader11Props: columnHeader11Data,
    columnHeader12Props: columnHeader12Data,
    columnHeader13Props: columnHeader13Data,
    columnHeader14Props: columnHeader14Data,
    columnHeader15Props: columnHeader15Data,
    tableRow11Props: tableRow11Data,
    tableRow12Props: tableRow12Data,
    tableRow13Props: tableRow13Data,
    showPageProps: showPage1Data,
    pageNumber4Props: pageNumber41Data,
};

const navigationAction2Data = {
    className: "navigation-action-1",
};

const cBPM27Data = {
    placeholderText: "Submit Valid Projects",
    spanText1: "Are you sure you want to proceed with  ",
    spanText2: "29",
    spanText3: "",
    spanText4: "valid projects?",
    text1: "Confirm",
    text2: "Cancel",
    note1InvalidSolu: "Note: 1 invalid solution(s) will be discarded.",
    globalHeader4Props: globalHeader43Data,
    heading21Props: heading22Data,
    frame501Props: frame5012Data,
    heading22Props: heading23Data,
    frame229Props: frame2291Data,
    frame504Props: frame5041Data,
    navigationActionProps: navigationAction2Data,
};

const menuLogo5Data = {
    className: "menu-logo-4",
};

const aTOMSICON2019close6Data = {
    className: "atomsicon2019close-1-1",
};

const mOLECULESFORMSEARCH5Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close6Data,
};

const aTOMSICON2019notification4Data = {
    className: "",
};

const aTOMSICON2019chatCopy5Data = {
    className: "atomsicon2019chat-copy-4",
};

const globalHeader24Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo5Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH5Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification4Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy5Data,
};

const globalHeader44Data = {
    globalHeader2Props: globalHeader24Data,
};

const inputFields24Data = {
    placeholderText: "Enter solution Name",
};

const inputs4Data = {
    className: "inputs-17",
    inputFields2Props: inputFields24Data,
};

const inputFields35Data = {
    placeholderText: "2023",
};

const inputs23Data = {
    className: "inputs-17",
    inputFields3Props: inputFields35Data,
};

const inputFields25Data = {
    placeholderText: "Lorem",
};

const fields1Data = {
    inputsProps: inputs4Data,
    inputs2Props: inputs23Data,
    inputFields2Props: inputFields25Data,
};

const checkbox5Data = {
    placeholderText: "4G",
};

const aTOMSICON2019close7Data = {
    className: "atomsicon2019close-1",
};

const frame1831Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close7Data,
};

const searchInput1Data = {
    frame183Props: frame1831Data,
};

const actionBar1Data = {
    searchInputProps: searchInput1Data,
};

const tableItem21Data = {
    children: "700",
};

const tableItem22Data = {
    children: "850",
};

const tableItem23Data = {
    children: "700",
};

const cellRow1Data = {
    tableItem2Props: tableItem23Data,
};

const rowData1Data = {
    tableItem21Props: tableItem21Data,
    tableItem22Props: tableItem22Data,
    cellRowProps: cellRow1Data,
};

const inputFields42Data = {
    className: "input-fields-67",
};

const inputFields43Data = {
    className: "input-fields-68",
};

const inputFields44Data = {
    className: "input-fields-69",
};

const inputFields45Data = {
    className: "input-fields-70",
};

const inputFields46Data = {
    className: "input-fields-71",
};

const inputFields47Data = {
    className: "input-fields-72",
};

const inputFields52Data = {
    className: "input-fields-168",
};

const inputFields53Data = {
    className: "input-fields-194",
};

const inputFields54Data = {
    className: "input-fields-195",
};

const inputFields55Data = {
    className: "input-fields-196",
};

const inputFields56Data = {
    className: "input-fields-197",
};

const inputFields57Data = {
    className: "input-fields-198",
};

const inputFields58Data = {
    className: "input-fields-199",
};

const inputFields59Data = {
    className: "input-fields-200",
};

const inputFields510Data = {
    className: "input-fields-201",
};

const inputFields511Data = {
    className: "input-fields-202",
};

const inputFields512Data = {
    className: "input-fields-203",
};

const inputFields513Data = {
    className: "input-fields-204",
};

const inputFields514Data = {
    className: "input-fields-205",
};

const inputFields515Data = {
    className: "input-fields-206",
};

const inputFields516Data = {
    className: "input-fields-207",
};

const inputFields517Data = {
    className: "input-fields-208",
};

const inputFields518Data = {
    className: "input-fields-209",
};

const inputFields519Data = {
    className: "input-fields-210",
};

const inputFields520Data = {
    className: "input-fields-211",
};

const inputFields521Data = {
    className: "input-fields-212",
};

const inputFields48Data = {
    className: "input-fields-73",
};

const inputFields49Data = {
    className: "input-fields-74",
};

const inputFields410Data = {
    className: "input-fields-75",
};

const inputFields411Data = {
    className: "input-fields-76",
};

const inputFields412Data = {
    className: "input-fields-77",
};

const inputFields413Data = {
    className: "input-fields-78",
};

const inputFields414Data = {
    className: "input-fields-79",
};

const inputFields62Data = {
    className: "input-fields-294",
};

const inputFields63Data = {
    className: "input-fields-345",
};

const inputFields64Data = {
    className: "input-fields-392",
};

const inputFields65Data = {
    className: "input-fields-393",
};

const inputFields66Data = {
    className: "input-fields-394",
};

const inputFields67Data = {
    className: "input-fields-395",
};

const inputFields68Data = {
    className: "input-fields-396",
};

const inputFields69Data = {
    className: "input-fields-397",
};

const inputFields610Data = {
    className: "input-fields-398",
};

const inputFields611Data = {
    className: "input-fields-399",
};

const inputFields612Data = {
    className: "input-fields-400",
};

const inputFields613Data = {
    className: "input-fields-401",
};

const inputFields415Data = {
    className: "input-fields-80",
};

const inputFields416Data = {
    className: "input-fields-81",
};

const inputFields417Data = {
    className: "input-fields-82",
};

const inputFields418Data = {
    className: "input-fields-83",
};

const inputFields419Data = {
    className: "input-fields-84",
};

const inputFields420Data = {
    className: "input-fields-85",
};

const inputFields421Data = {
    className: "input-fields-86",
};

const inputFields422Data = {
    className: "input-fields-87",
};

const inputFields423Data = {
    className: "input-fields-88",
};

const inputFields424Data = {
    className: "input-fields-89",
};

const inputFields522Data = {
    className: "input-fields-213",
};

const inputFields523Data = {
    className: "input-fields-214",
};

const inputFields524Data = {
    className: "input-fields-215",
};

const inputFields525Data = {
    className: "input-fields-216",
};

const inputFields526Data = {
    className: "input-fields-217",
};

const inputFields527Data = {
    className: "input-fields-218",
};

const inputFields528Data = {
    className: "input-fields-219",
};

const inputFields529Data = {
    className: "input-fields-220",
};

const inputFields530Data = {
    className: "input-fields-221",
};

const inputFields531Data = {
    className: "input-fields-222",
};

const inputFields532Data = {
    className: "input-fields-223",
};

const inputFields533Data = {
    className: "input-fields-224",
};

const inputFields534Data = {
    className: "input-fields-225",
};

const inputFields535Data = {
    className: "input-fields-226",
};

const inputFields536Data = {
    className: "input-fields-227",
};

const inputFields537Data = {
    className: "input-fields-228",
};

const inputFields538Data = {
    className: "input-fields-229",
};

const inputFields539Data = {
    className: "input-fields-230",
};

const inputFields540Data = {
    className: "input-fields-231",
};

const inputFields541Data = {
    className: "input-fields-232",
};

const inputFields542Data = {
    className: "input-fields-233",
};

const inputFields543Data = {
    className: "input-fields-234",
};

const inputFields544Data = {
    className: "input-fields-235",
};

const inputFields545Data = {
    className: "input-fields-236",
};

const inputFields546Data = {
    className: "input-fields-237",
};

const inputFields547Data = {
    className: "input-fields-238",
};

const inputFields548Data = {
    className: "input-fields-239",
};

const inputFields549Data = {
    className: "input-fields-240",
};

const inputFields550Data = {
    className: "input-fields-241",
};

const inputFields551Data = {
    className: "input-fields-242",
};

const inputFields425Data = {
    className: "input-fields-90",
};

const inputFields426Data = {
    className: "input-fields-91",
};

const inputFields427Data = {
    className: "input-fields-92",
};

const inputFields428Data = {
    className: "input-fields-93",
};

const inputFields429Data = {
    className: "input-fields-94",
};

const inputFields430Data = {
    className: "input-fields-95",
};

const inputFields431Data = {
    className: "input-fields-96",
};

const inputFields432Data = {
    className: "input-fields-97",
};

const inputFields433Data = {
    className: "input-fields-98",
};

const inputFields434Data = {
    className: "input-fields-99",
};

const inputFields614Data = {
    className: "input-fields-402",
};

const inputFields615Data = {
    className: "input-fields-403",
};

const inputFields616Data = {
    className: "input-fields-404",
};

const inputFields617Data = {
    className: "input-fields-405",
};

const inputFields618Data = {
    className: "input-fields-406",
};

const inputFields619Data = {
    className: "input-fields-407",
};

const inputFields620Data = {
    className: "input-fields-408",
};

const inputFields621Data = {
    className: "input-fields-409",
};

const inputFields622Data = {
    className: "input-fields-410",
};

const inputFields623Data = {
    className: "input-fields-411",
};

const inputFields624Data = {
    className: "input-fields-412",
};

const inputFields625Data = {
    className: "input-fields-413",
};

const inputFields626Data = {
    className: "input-fields-414",
};

const inputFields627Data = {
    className: "input-fields-415",
};

const inputFields628Data = {
    className: "input-fields-416",
};

const inputFields629Data = {
    className: "input-fields-417",
};

const inputFields630Data = {
    className: "input-fields-418",
};

const inputFields631Data = {
    className: "input-fields-419",
};

const inputFields632Data = {
    className: "input-fields-420",
};

const inputFields633Data = {
    className: "input-fields-421",
};

const inputFields634Data = {
    className: "input-fields-422",
};

const scrollbar22Data = {
    className: "scrollbar-3",
};

const navigationAction3Data = {
    className: "navigation-action-2",
};

const group3913Data = {
    className: "group-391-2",
};

const cBPM18Data = {
    addCarrier: "Add Carrier",
    placeholderText: "5G",
    label: "4G Carrier",
    globalHeader4Props: globalHeader44Data,
    fieldsProps: fields1Data,
    checkboxProps: checkbox5Data,
    actionBarProps: actionBar1Data,
    rowDataProps: rowData1Data,
    inputFields41Props: inputFields42Data,
    inputFields42Props: inputFields43Data,
    inputFields43Props: inputFields44Data,
    inputFields44Props: inputFields45Data,
    inputFields45Props: inputFields46Data,
    inputFields46Props: inputFields47Data,
    inputFields51Props: inputFields52Data,
    inputFields52Props: inputFields53Data,
    inputFields53Props: inputFields54Data,
    inputFields54Props: inputFields55Data,
    inputFields55Props: inputFields56Data,
    inputFields56Props: inputFields57Data,
    inputFields57Props: inputFields58Data,
    inputFields58Props: inputFields59Data,
    inputFields59Props: inputFields510Data,
    inputFields510Props: inputFields511Data,
    inputFields511Props: inputFields512Data,
    inputFields512Props: inputFields513Data,
    inputFields513Props: inputFields514Data,
    inputFields514Props: inputFields515Data,
    inputFields515Props: inputFields516Data,
    inputFields516Props: inputFields517Data,
    inputFields517Props: inputFields518Data,
    inputFields518Props: inputFields519Data,
    inputFields519Props: inputFields520Data,
    inputFields520Props: inputFields521Data,
    inputFields47Props: inputFields48Data,
    inputFields48Props: inputFields49Data,
    inputFields49Props: inputFields410Data,
    inputFields410Props: inputFields411Data,
    inputFields411Props: inputFields412Data,
    inputFields412Props: inputFields413Data,
    inputFields413Props: inputFields414Data,
    inputFields61Props: inputFields62Data,
    inputFields62Props: inputFields63Data,
    inputFields63Props: inputFields64Data,
    inputFields64Props: inputFields65Data,
    inputFields65Props: inputFields66Data,
    inputFields66Props: inputFields67Data,
    inputFields67Props: inputFields68Data,
    inputFields68Props: inputFields69Data,
    inputFields69Props: inputFields610Data,
    inputFields610Props: inputFields611Data,
    inputFields611Props: inputFields612Data,
    inputFields612Props: inputFields613Data,
    inputFields414Props: inputFields415Data,
    inputFields415Props: inputFields416Data,
    inputFields416Props: inputFields417Data,
    inputFields417Props: inputFields418Data,
    inputFields418Props: inputFields419Data,
    inputFields419Props: inputFields420Data,
    inputFields420Props: inputFields421Data,
    inputFields421Props: inputFields422Data,
    inputFields422Props: inputFields423Data,
    inputFields423Props: inputFields424Data,
    inputFields521Props: inputFields522Data,
    inputFields522Props: inputFields523Data,
    inputFields523Props: inputFields524Data,
    inputFields524Props: inputFields525Data,
    inputFields525Props: inputFields526Data,
    inputFields526Props: inputFields527Data,
    inputFields527Props: inputFields528Data,
    inputFields528Props: inputFields529Data,
    inputFields529Props: inputFields530Data,
    inputFields530Props: inputFields531Data,
    inputFields531Props: inputFields532Data,
    inputFields532Props: inputFields533Data,
    inputFields533Props: inputFields534Data,
    inputFields534Props: inputFields535Data,
    inputFields535Props: inputFields536Data,
    inputFields536Props: inputFields537Data,
    inputFields537Props: inputFields538Data,
    inputFields538Props: inputFields539Data,
    inputFields539Props: inputFields540Data,
    inputFields540Props: inputFields541Data,
    inputFields541Props: inputFields542Data,
    inputFields542Props: inputFields543Data,
    inputFields543Props: inputFields544Data,
    inputFields544Props: inputFields545Data,
    inputFields545Props: inputFields546Data,
    inputFields546Props: inputFields547Data,
    inputFields547Props: inputFields548Data,
    inputFields548Props: inputFields549Data,
    inputFields549Props: inputFields550Data,
    inputFields550Props: inputFields551Data,
    inputFields424Props: inputFields425Data,
    inputFields425Props: inputFields426Data,
    inputFields426Props: inputFields427Data,
    inputFields427Props: inputFields428Data,
    inputFields428Props: inputFields429Data,
    inputFields429Props: inputFields430Data,
    inputFields430Props: inputFields431Data,
    inputFields431Props: inputFields432Data,
    inputFields432Props: inputFields433Data,
    inputFields433Props: inputFields434Data,
    inputFields613Props: inputFields614Data,
    inputFields614Props: inputFields615Data,
    inputFields615Props: inputFields616Data,
    inputFields616Props: inputFields617Data,
    inputFields617Props: inputFields618Data,
    inputFields618Props: inputFields619Data,
    inputFields619Props: inputFields620Data,
    inputFields620Props: inputFields621Data,
    inputFields621Props: inputFields622Data,
    inputFields622Props: inputFields623Data,
    inputFields623Props: inputFields624Data,
    inputFields624Props: inputFields625Data,
    inputFields625Props: inputFields626Data,
    inputFields626Props: inputFields627Data,
    inputFields627Props: inputFields628Data,
    inputFields628Props: inputFields629Data,
    inputFields629Props: inputFields630Data,
    inputFields630Props: inputFields631Data,
    inputFields631Props: inputFields632Data,
    inputFields632Props: inputFields633Data,
    inputFields633Props: inputFields634Data,
    scrollbar2Props: scrollbar22Data,
    navigationActionProps: navigationAction3Data,
    group391Props: group3913Data,
};

const menuLogo6Data = {
    className: "menu-logo-5",
};

const aTOMSICON2019close8Data = {
    className: "atomsicon2019close-2-1",
};

const mOLECULESFORMSEARCH6Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close8Data,
};

const aTOMSICON2019notification5Data = {
    className: "",
};

const aTOMSICON2019chatCopy6Data = {
    className: "atomsicon2019chat-copy-5",
};

const globalHeader25Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo6Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH6Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification5Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy6Data,
};

const globalHeader45Data = {
    globalHeader2Props: globalHeader25Data,
};

const inputFields26Data = {
    placeholderText: "Enter solution Name",
};

const inputs5Data = {
    className: "inputs-17",
    inputFields2Props: inputFields26Data,
};

const inputFields36Data = {
    placeholderText: "2023",
};

const inputs24Data = {
    className: "inputs-17",
    inputFields3Props: inputFields36Data,
};

const inputFields27Data = {
    placeholderText: "Lorem",
};

const fields2Data = {
    inputsProps: inputs5Data,
    inputs2Props: inputs24Data,
    inputFields2Props: inputFields27Data,
};

const checkbox6Data = {
    placeholderText: "4G",
};

const checkbox7Data = {
    placeholderText: "5G",
};

const frame5033Data = {
    checkbox1Props: checkbox6Data,
    checkbox2Props: checkbox7Data,
};

const solutionDetails1Data = {
    inputFields2Props: fields2Data,
    frame503Props: frame5033Data,
};

const aTOMSICON2019close9Data = {
    className: "atomsicon2019close-2",
};

const frame1832Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close9Data,
};

const searchInput2Data = {
    frame183Props: frame1832Data,
};

const actionBar2Data = {
    searchInputProps: searchInput2Data,
};

const tableItem24Data = {
    children: "700",
};

const tableItem25Data = {
    children: "850",
};

const tableItem26Data = {
    children: "700",
};

const cellRow3Data = {
    tableItem2Props: tableItem26Data,
};

const rowData2Data = {
    tableItem21Props: tableItem24Data,
    tableItem22Props: tableItem25Data,
    cellRowProps: cellRow3Data,
};

const inputFields436Data = {
    className: "input-fields-101",
};

const inputFields437Data = {
    className: "input-fields-102",
};

const inputFields438Data = {
    className: "input-fields-103",
};

const inputFields439Data = {
    className: "input-fields-104",
};

const inputFields440Data = {
    className: "input-fields-105",
};

const inputFields441Data = {
    className: "input-fields-106",
};

const inputFields553Data = {
    className: "input-fields-244",
};

const inputFields554Data = {
    className: "input-fields-245",
};

const inputFields555Data = {
    className: "input-fields-246",
};

const inputFields556Data = {
    className: "input-fields-247",
};

const inputFields557Data = {
    className: "input-fields-248",
};

const inputFields558Data = {
    className: "input-fields-249",
};

const inputFields559Data = {
    className: "input-fields-250",
};

const inputFields560Data = {
    className: "input-fields-251",
};

const inputFields561Data = {
    className: "input-fields-252",
};

const inputFields562Data = {
    className: "input-fields-253",
};

const inputFields563Data = {
    className: "input-fields-254",
};

const inputFields564Data = {
    className: "input-fields-255",
};

const inputFields565Data = {
    className: "input-fields-256",
};

const inputFields566Data = {
    className: "input-fields-257",
};

const inputFields567Data = {
    className: "input-fields-258",
};

const inputFields568Data = {
    className: "input-fields-259",
};

const inputFields569Data = {
    className: "input-fields-260",
};

const inputFields570Data = {
    className: "input-fields-261",
};

const inputFields571Data = {
    className: "input-fields-262",
};

const inputFields572Data = {
    className: "input-fields-263",
};

const inputFields442Data = {
    className: "input-fields-107",
};

const inputFields443Data = {
    className: "input-fields-108",
};

const inputFields444Data = {
    className: "input-fields-109",
};

const inputFields445Data = {
    className: "input-fields-110",
};

const inputFields446Data = {
    className: "input-fields-111",
};

const inputFields447Data = {
    className: "input-fields-112",
};

const inputFields448Data = {
    className: "input-fields-113",
};

const inputFields636Data = {
    className: "input-fields-424",
};

const inputFields637Data = {
    className: "input-fields-425",
};

const inputFields638Data = {
    className: "input-fields-426",
};

const inputFields639Data = {
    className: "input-fields-427",
};

const inputFields640Data = {
    className: "input-fields-428",
};

const inputFields641Data = {
    className: "input-fields-429",
};

const inputFields642Data = {
    className: "input-fields-430",
};

const inputFields643Data = {
    className: "input-fields-431",
};

const inputFields644Data = {
    className: "input-fields-432",
};

const inputFields645Data = {
    className: "input-fields-433",
};

const inputFields646Data = {
    className: "input-fields-434",
};

const inputFields647Data = {
    className: "input-fields-435",
};

const inputFields449Data = {
    className: "input-fields-114",
};

const inputFields450Data = {
    className: "input-fields-115",
};

const inputFields451Data = {
    className: "input-fields-116",
};

const inputFields452Data = {
    className: "input-fields-117",
};

const inputFields453Data = {
    className: "input-fields-118",
};

const inputFields454Data = {
    className: "input-fields-119",
};

const inputFields455Data = {
    className: "input-fields-120",
};

const inputFields456Data = {
    className: "input-fields-121",
};

const inputFields457Data = {
    className: "input-fields-122",
};

const inputFields458Data = {
    className: "input-fields-123",
};

const inputFields573Data = {
    className: "input-fields-264",
};

const inputFields574Data = {
    className: "input-fields-265",
};

const inputFields575Data = {
    className: "input-fields-266",
};

const inputFields576Data = {
    className: "input-fields-267",
};

const inputFields577Data = {
    className: "input-fields-268",
};

const inputFields578Data = {
    className: "input-fields-269",
};

const inputFields579Data = {
    className: "input-fields-270",
};

const inputFields580Data = {
    className: "input-fields-271",
};

const inputFields581Data = {
    className: "input-fields-272",
};

const inputFields582Data = {
    className: "input-fields-273",
};

const inputFields583Data = {
    className: "input-fields-274",
};

const inputFields584Data = {
    className: "input-fields-275",
};

const inputFields585Data = {
    className: "input-fields-276",
};

const inputFields586Data = {
    className: "input-fields-277",
};

const inputFields587Data = {
    className: "input-fields-278",
};

const inputFields588Data = {
    className: "input-fields-279",
};

const inputFields589Data = {
    className: "input-fields-280",
};

const inputFields590Data = {
    className: "input-fields-281",
};

const inputFields591Data = {
    className: "input-fields-282",
};

const inputFields592Data = {
    className: "input-fields-283",
};

const inputFields593Data = {
    className: "input-fields-284",
};

const inputFields594Data = {
    className: "input-fields-285",
};

const inputFields595Data = {
    className: "input-fields-286",
};

const inputFields596Data = {
    className: "input-fields-287",
};

const inputFields597Data = {
    className: "input-fields-288",
};

const inputFields598Data = {
    className: "input-fields-289",
};

const inputFields599Data = {
    className: "input-fields-290",
};

const inputFields5100Data = {
    className: "input-fields-291",
};

const inputFields5101Data = {
    className: "input-fields-292",
};

const inputFields5102Data = {
    className: "input-fields-293",
};

const inputFields459Data = {
    className: "input-fields-124",
};

const inputFields460Data = {
    className: "input-fields-125",
};

const inputFields461Data = {
    className: "input-fields-126",
};

const inputFields462Data = {
    className: "input-fields-127",
};

const inputFields463Data = {
    className: "input-fields-128",
};

const inputFields464Data = {
    className: "input-fields-129",
};

const inputFields465Data = {
    className: "input-fields-130",
};

const inputFields466Data = {
    className: "input-fields-131",
};

const inputFields467Data = {
    className: "input-fields-132",
};

const inputFields468Data = {
    className: "input-fields-133",
};

const inputFields648Data = {
    className: "input-fields-436",
};

const inputFields649Data = {
    className: "input-fields-437",
};

const inputFields650Data = {
    className: "input-fields-438",
};

const inputFields651Data = {
    className: "input-fields-439",
};

const inputFields652Data = {
    className: "input-fields-440",
};

const inputFields653Data = {
    className: "input-fields-441",
};

const inputFields654Data = {
    className: "input-fields-442",
};

const inputFields655Data = {
    className: "input-fields-443",
};

const inputFields656Data = {
    className: "input-fields-444",
};

const inputFields657Data = {
    className: "input-fields-445",
};

const inputFields658Data = {
    className: "input-fields-446",
};

const inputFields659Data = {
    className: "input-fields-447",
};

const inputFields660Data = {
    className: "input-fields-448",
};

const inputFields661Data = {
    className: "input-fields-449",
};

const inputFields662Data = {
    className: "input-fields-450",
};

const inputFields663Data = {
    className: "input-fields-451",
};

const inputFields664Data = {
    className: "input-fields-452",
};

const inputFields665Data = {
    className: "input-fields-453",
};

const inputFields666Data = {
    className: "input-fields-454",
};

const inputFields667Data = {
    className: "input-fields-455",
};

const inputFields668Data = {
    className: "input-fields-456",
};

const scrollbar23Data = {
    className: "scrollbar-4",
};

const navigationAction4Data = {
    className: "navigation-action-3",
};

const cBPM19Data = {
    label: "5G Carrier",
    ebene_1: "/img/ebene-1@2x.png",
    click2: "CLICK",
    globalHeader4Props: globalHeader45Data,
    solutionDetailsProps: solutionDetails1Data,
    actionBarProps: actionBar2Data,
    rowDataProps: rowData2Data,
    inputFields41Props: inputFields436Data,
    inputFields42Props: inputFields437Data,
    inputFields43Props: inputFields438Data,
    inputFields44Props: inputFields439Data,
    inputFields45Props: inputFields440Data,
    inputFields46Props: inputFields441Data,
    inputFields51Props: inputFields553Data,
    inputFields52Props: inputFields554Data,
    inputFields53Props: inputFields555Data,
    inputFields54Props: inputFields556Data,
    inputFields55Props: inputFields557Data,
    inputFields56Props: inputFields558Data,
    inputFields57Props: inputFields559Data,
    inputFields58Props: inputFields560Data,
    inputFields59Props: inputFields561Data,
    inputFields510Props: inputFields562Data,
    inputFields511Props: inputFields563Data,
    inputFields512Props: inputFields564Data,
    inputFields513Props: inputFields565Data,
    inputFields514Props: inputFields566Data,
    inputFields515Props: inputFields567Data,
    inputFields516Props: inputFields568Data,
    inputFields517Props: inputFields569Data,
    inputFields518Props: inputFields570Data,
    inputFields519Props: inputFields571Data,
    inputFields520Props: inputFields572Data,
    inputFields47Props: inputFields442Data,
    inputFields48Props: inputFields443Data,
    inputFields49Props: inputFields444Data,
    inputFields410Props: inputFields445Data,
    inputFields411Props: inputFields446Data,
    inputFields412Props: inputFields447Data,
    inputFields413Props: inputFields448Data,
    inputFields61Props: inputFields636Data,
    inputFields62Props: inputFields637Data,
    inputFields63Props: inputFields638Data,
    inputFields64Props: inputFields639Data,
    inputFields65Props: inputFields640Data,
    inputFields66Props: inputFields641Data,
    inputFields67Props: inputFields642Data,
    inputFields68Props: inputFields643Data,
    inputFields69Props: inputFields644Data,
    inputFields610Props: inputFields645Data,
    inputFields611Props: inputFields646Data,
    inputFields612Props: inputFields647Data,
    inputFields414Props: inputFields449Data,
    inputFields415Props: inputFields450Data,
    inputFields416Props: inputFields451Data,
    inputFields417Props: inputFields452Data,
    inputFields418Props: inputFields453Data,
    inputFields419Props: inputFields454Data,
    inputFields420Props: inputFields455Data,
    inputFields421Props: inputFields456Data,
    inputFields422Props: inputFields457Data,
    inputFields423Props: inputFields458Data,
    inputFields521Props: inputFields573Data,
    inputFields522Props: inputFields574Data,
    inputFields523Props: inputFields575Data,
    inputFields524Props: inputFields576Data,
    inputFields525Props: inputFields577Data,
    inputFields526Props: inputFields578Data,
    inputFields527Props: inputFields579Data,
    inputFields528Props: inputFields580Data,
    inputFields529Props: inputFields581Data,
    inputFields530Props: inputFields582Data,
    inputFields531Props: inputFields583Data,
    inputFields532Props: inputFields584Data,
    inputFields533Props: inputFields585Data,
    inputFields534Props: inputFields586Data,
    inputFields535Props: inputFields587Data,
    inputFields536Props: inputFields588Data,
    inputFields537Props: inputFields589Data,
    inputFields538Props: inputFields590Data,
    inputFields539Props: inputFields591Data,
    inputFields540Props: inputFields592Data,
    inputFields541Props: inputFields593Data,
    inputFields542Props: inputFields594Data,
    inputFields543Props: inputFields595Data,
    inputFields544Props: inputFields596Data,
    inputFields545Props: inputFields597Data,
    inputFields546Props: inputFields598Data,
    inputFields547Props: inputFields599Data,
    inputFields548Props: inputFields5100Data,
    inputFields549Props: inputFields5101Data,
    inputFields550Props: inputFields5102Data,
    inputFields424Props: inputFields459Data,
    inputFields425Props: inputFields460Data,
    inputFields426Props: inputFields461Data,
    inputFields427Props: inputFields462Data,
    inputFields428Props: inputFields463Data,
    inputFields429Props: inputFields464Data,
    inputFields430Props: inputFields465Data,
    inputFields431Props: inputFields466Data,
    inputFields432Props: inputFields467Data,
    inputFields433Props: inputFields468Data,
    inputFields613Props: inputFields648Data,
    inputFields614Props: inputFields649Data,
    inputFields615Props: inputFields650Data,
    inputFields616Props: inputFields651Data,
    inputFields617Props: inputFields652Data,
    inputFields618Props: inputFields653Data,
    inputFields619Props: inputFields654Data,
    inputFields620Props: inputFields655Data,
    inputFields621Props: inputFields656Data,
    inputFields622Props: inputFields657Data,
    inputFields623Props: inputFields658Data,
    inputFields624Props: inputFields659Data,
    inputFields625Props: inputFields660Data,
    inputFields626Props: inputFields661Data,
    inputFields627Props: inputFields662Data,
    inputFields628Props: inputFields663Data,
    inputFields629Props: inputFields664Data,
    inputFields630Props: inputFields665Data,
    inputFields631Props: inputFields666Data,
    inputFields632Props: inputFields667Data,
    inputFields633Props: inputFields668Data,
    scrollbar2Props: scrollbar23Data,
    navigationActionProps: navigationAction4Data,
};

const menuLogo7Data = {
    className: "",
};

const aTOMSICON2019close10Data = {
    className: "atomsicon2019close-3-1",
};

const mOLECULESFORMSEARCH7Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close10Data,
};

const aTOMSICON2019notification6Data = {
    className: "",
};

const aTOMSICON2019chatCopy7Data = {
    className: "",
};

const globalHeader26Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo7Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH7Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification6Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy7Data,
};

const globalHeader46Data = {
    globalHeader2Props: globalHeader26Data,
};

const heading5Data = {
    children: "Project Details",
    className: "heading-14",
};

const inputFields28Data = {
    placeholderText: "New Build",
};

const inputs6Data = {
    inputFields2Props: inputFields28Data,
};

const inputFields37Data = {
    placeholderText: "2023",
};

const inputs25Data = {
    inputFields3Props: inputFields37Data,
};

const inputFields38Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close25Data = {
    className: "",
};

const frame5013Data = {
    inputsProps: inputs6Data,
    inputs2Props: inputs25Data,
    inputFields3Props: inputFields38Data,
    aTOMSICON2019close2Props: aTOMSICON2019close25Data,
};

const heading6Data = {
    children: "Contact Information",
    className: "heading",
};

const aTOMSICON2019close11Data = {
    className: "atomsicon2019close-3",
};

const frame2292Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close11Data,
};

const columnHeader16Data = {
    children: "Name",
};

const columnHeader17Data = {
    children: "Company",
};

const columnHeader18Data = {
    children: "Contact Type",
};

const columnHeader19Data = {
    children: "Phone",
};

const columnHeader110Data = {
    children: "Email",
};

const cell01Text13Data = {
    children: "Jason Cham",
};

const cell01Text14Data = {
    children: "VERIZON",
};

const cell01Text15Data = {
    children: "8987654322",
};

const cell01Text16Data = {
    children: "josh@verizon.com",
};

const tableRow14Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text13Data,
    cell01Text2Props: cell01Text14Data,
    cell01Text3Props: cell01Text15Data,
    cell01Text4Props: cell01Text16Data,
};

const cell01Text17Data = {
    children: "Jack Hermasson",
};

const cell01Text18Data = {
    children: "VERIZON",
};

const cell01Text19Data = {
    children: "XXXXXXXXXX",
};

const cell01Text20Data = {
    children: "abc@verizon.com",
};

const tableRow15Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text17Data,
    cell01Text2Props: cell01Text18Data,
    cell01Text3Props: cell01Text19Data,
    cell01Text4Props: cell01Text20Data,
};

const cell01Text21Data = {
    children: "James",
};

const cell01Text22Data = {
    children: "VERIZON",
};

const cell01Text23Data = {
    children: "XXXXXXXXXX",
};

const cell01Text24Data = {
    children: "abc@verizon.com",
};

const tableRow16Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text21Data,
    cell01Text2Props: cell01Text22Data,
    cell01Text3Props: cell01Text23Data,
    cell01Text4Props: cell01Text24Data,
};

const showPage2Data = {
    placeholderText: "0",
};

const pageNumber42Data = {
    children: "2",
};

const frame5042Data = {
    columnHeader11Props: columnHeader16Data,
    columnHeader12Props: columnHeader17Data,
    columnHeader13Props: columnHeader18Data,
    columnHeader14Props: columnHeader19Data,
    columnHeader15Props: columnHeader110Data,
    tableRow11Props: tableRow14Data,
    tableRow12Props: tableRow15Data,
    tableRow13Props: tableRow16Data,
    showPageProps: showPage2Data,
    pageNumber4Props: pageNumber42Data,
};

const navigationAction5Data = {
    className: "navigation-action-4",
};

const cBPM261Data = {
    globalHeader4Props: globalHeader46Data,
    heading1Props: heading5Data,
    frame501Props: frame5013Data,
    heading2Props: heading6Data,
    frame229Props: frame2292Data,
    frame504Props: frame5042Data,
    navigationActionProps: navigationAction5Data,
};

const menuLogo8Data = {
    className: "",
};

const aTOMSICON2019close12Data = {
    className: "atomsicon2019close-4-1",
};

const mOLECULESFORMSEARCH8Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close12Data,
};

const aTOMSICON2019notification7Data = {
    className: "",
};

const aTOMSICON2019chatCopy8Data = {
    className: "atomsicon2019chat-copy-7",
};

const globalHeader27Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo8Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH8Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification7Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy8Data,
};

const globalHeader47Data = {
    globalHeader2Props: globalHeader27Data,
};

const heading7Data = {
    children: "Project Details",
    className: "heading-10",
};

const inputFields29Data = {
    placeholderText: "New Build",
};

const inputs7Data = {
    inputFields2Props: inputFields29Data,
};

const inputFields39Data = {
    placeholderText: "2023",
};

const inputs26Data = {
    inputFields3Props: inputFields39Data,
};

const inputFields310Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close26Data = {
    className: "atomsicon2019close-35",
};

const frame5014Data = {
    inputsProps: inputs7Data,
    inputs2Props: inputs26Data,
    inputFields3Props: inputFields310Data,
    aTOMSICON2019close2Props: aTOMSICON2019close26Data,
};

const heading8Data = {
    children: "Contact Information",
    className: "heading-14",
};

const aTOMSICON2019close13Data = {
    className: "atomsicon2019close-4",
};

const frame2293Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close13Data,
};

const columnHeader111Data = {
    children: "Name",
};

const columnHeader112Data = {
    children: "Company",
};

const columnHeader113Data = {
    children: "Contact Type",
};

const columnHeader114Data = {
    children: "Phone",
};

const columnHeader115Data = {
    children: "Email",
};

const header1Data = {
    columnHeader11Props: columnHeader111Data,
    columnHeader12Props: columnHeader112Data,
    columnHeader13Props: columnHeader113Data,
    columnHeader14Props: columnHeader114Data,
    columnHeader15Props: columnHeader115Data,
};

const navigationAction6Data = {
    className: "navigation-action-5",
};

const cBPM221Data = {
    globalHeader4Props: globalHeader47Data,
    heading1Props: heading7Data,
    frame501Props: frame5014Data,
    heading2Props: heading8Data,
    frame229Props: frame2293Data,
    headerProps: header1Data,
    navigationActionProps: navigationAction6Data,
};

const menuLogo9Data = {
    className: "",
};

const aTOMSICON2019close14Data = {
    className: "atomsicon2019close-5-1",
};

const mOLECULESFORMSEARCH9Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close14Data,
};

const aTOMSICON2019notification8Data = {
    className: "",
};

const aTOMSICON2019chatCopy9Data = {
    className: "atomsicon2019chat-copy-8",
};

const globalHeader28Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo9Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH9Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification8Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy9Data,
};

const globalHeader48Data = {
    globalHeader2Props: globalHeader28Data,
};

const inputFields210Data = {
    placeholderText: "Enter solution Name",
};

const inputs8Data = {
    className: "inputs-17",
    inputFields2Props: inputFields210Data,
};

const inputFields311Data = {
    placeholderText: "2023",
};

const inputs27Data = {
    className: "inputs-17",
    inputFields3Props: inputFields311Data,
};

const inputFields211Data = {
    placeholderText: "Lorem",
};

const fields3Data = {
    inputsProps: inputs8Data,
    inputs2Props: inputs27Data,
    inputFields2Props: inputFields211Data,
};

const checkbox8Data = {
    placeholderText: "4G",
};

const checkbox9Data = {
    placeholderText: "5G",
};

const frame5034Data = {
    checkbox1Props: checkbox8Data,
    checkbox2Props: checkbox9Data,
};

const solutionDetails2Data = {
    inputFields2Props: fields3Data,
    frame503Props: frame5034Data,
};

const aTOMSICON2019close15Data = {
    className: "atomsicon2019close-5",
};

const frame1833Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close15Data,
};

const searchInput3Data = {
    frame183Props: frame1833Data,
};

const actionBar3Data = {
    searchInputProps: searchInput3Data,
};

const tableItem27Data = {
    children: "700",
};

const tableItem28Data = {
    children: "850",
};

const tableItem29Data = {
    children: "700",
};

const cellRow4Data = {
    tableItem2Props: tableItem29Data,
};

const rowData22Data = {
    tableItem21Props: tableItem27Data,
    tableItem22Props: tableItem28Data,
    cellRowProps: cellRow4Data,
};

const inputFields470Data = {
    className: "input-fields-135",
};

const inputFields471Data = {
    className: "input-fields-136",
};

const inputFields472Data = {
    className: "input-fields-137",
};

const inputFields473Data = {
    className: "input-fields-138",
};

const inputFields474Data = {
    className: "input-fields-139",
};

const inputFields475Data = {
    className: "input-fields-140",
};

const inputFields5104Data = {
    className: "input-fields-295",
};

const inputFields5105Data = {
    className: "input-fields-296",
};

const inputFields5106Data = {
    className: "input-fields-297",
};

const inputFields5107Data = {
    className: "input-fields-298",
};

const inputFields5108Data = {
    className: "input-fields-299",
};

const inputFields5109Data = {
    className: "input-fields-300",
};

const inputFields5110Data = {
    className: "input-fields-301",
};

const inputFields5111Data = {
    className: "input-fields-302",
};

const inputFields5112Data = {
    className: "input-fields-303",
};

const inputFields5113Data = {
    className: "input-fields-304",
};

const inputFields5114Data = {
    className: "input-fields-305",
};

const inputFields5115Data = {
    className: "input-fields-306",
};

const inputFields5116Data = {
    className: "input-fields-307",
};

const inputFields5117Data = {
    className: "input-fields-308",
};

const inputFields5118Data = {
    className: "input-fields-309",
};

const inputFields5119Data = {
    className: "input-fields-310",
};

const inputFields5120Data = {
    className: "input-fields-311",
};

const inputFields5121Data = {
    className: "input-fields-312",
};

const inputFields5122Data = {
    className: "input-fields-313",
};

const inputFields5123Data = {
    className: "input-fields-314",
};

const inputFields476Data = {
    className: "input-fields-141",
};

const inputFields477Data = {
    className: "input-fields-142",
};

const inputFields478Data = {
    className: "input-fields-143",
};

const inputFields479Data = {
    className: "input-fields-144",
};

const inputFields480Data = {
    className: "input-fields-145",
};

const inputFields481Data = {
    className: "input-fields-146",
};

const inputFields482Data = {
    className: "input-fields-147",
};

const inputFields670Data = {
    className: "input-fields-458",
};

const inputFields671Data = {
    className: "input-fields-459",
};

const inputFields672Data = {
    className: "input-fields-460",
};

const inputFields673Data = {
    className: "input-fields-461",
};

const inputFields674Data = {
    className: "input-fields-462",
};

const inputFields675Data = {
    className: "input-fields-463",
};

const inputFields676Data = {
    className: "input-fields-464",
};

const inputFields677Data = {
    className: "input-fields-465",
};

const inputFields678Data = {
    className: "input-fields-466",
};

const inputFields679Data = {
    className: "input-fields-467",
};

const inputFields680Data = {
    className: "input-fields-468",
};

const inputFields681Data = {
    className: "input-fields-469",
};

const inputFields483Data = {
    className: "input-fields-148",
};

const inputFields484Data = {
    className: "input-fields-149",
};

const inputFields485Data = {
    className: "input-fields-150",
};

const inputFields486Data = {
    className: "input-fields-151",
};

const inputFields487Data = {
    className: "input-fields-152",
};

const inputFields488Data = {
    className: "input-fields-153",
};

const inputFields489Data = {
    className: "input-fields-154",
};

const inputFields490Data = {
    className: "input-fields-155",
};

const inputFields491Data = {
    className: "input-fields-156",
};

const inputFields492Data = {
    className: "input-fields-157",
};

const inputFields5124Data = {
    className: "input-fields-315",
};

const inputFields5125Data = {
    className: "input-fields-316",
};

const inputFields5126Data = {
    className: "input-fields-317",
};

const inputFields5127Data = {
    className: "input-fields-318",
};

const inputFields5128Data = {
    className: "input-fields-319",
};

const inputFields5129Data = {
    className: "input-fields-320",
};

const inputFields5130Data = {
    className: "input-fields-321",
};

const inputFields5131Data = {
    className: "input-fields-322",
};

const inputFields5132Data = {
    className: "input-fields-323",
};

const inputFields5133Data = {
    className: "input-fields-324",
};

const inputFields5134Data = {
    className: "input-fields-325",
};

const inputFields5135Data = {
    className: "input-fields-326",
};

const inputFields5136Data = {
    className: "input-fields-327",
};

const inputFields5137Data = {
    className: "input-fields-328",
};

const inputFields5138Data = {
    className: "input-fields-329",
};

const inputFields5139Data = {
    className: "input-fields-330",
};

const inputFields5140Data = {
    className: "input-fields-331",
};

const inputFields5141Data = {
    className: "input-fields-332",
};

const inputFields5142Data = {
    className: "input-fields-333",
};

const inputFields5143Data = {
    className: "input-fields-334",
};

const inputFields5144Data = {
    className: "input-fields-335",
};

const inputFields5145Data = {
    className: "input-fields-336",
};

const inputFields5146Data = {
    className: "input-fields-337",
};

const inputFields5147Data = {
    className: "input-fields-338",
};

const inputFields5148Data = {
    className: "input-fields-339",
};

const inputFields5149Data = {
    className: "input-fields-340",
};

const inputFields5150Data = {
    className: "input-fields-341",
};

const inputFields5151Data = {
    className: "input-fields-342",
};

const inputFields5152Data = {
    className: "input-fields-343",
};

const inputFields5153Data = {
    className: "input-fields-344",
};

const inputFields493Data = {
    className: "input-fields-158",
};

const inputFields494Data = {
    className: "input-fields-159",
};

const inputFields495Data = {
    className: "input-fields-160",
};

const inputFields496Data = {
    className: "input-fields-161",
};

const inputFields497Data = {
    className: "input-fields-162",
};

const inputFields498Data = {
    className: "input-fields-163",
};

const inputFields499Data = {
    className: "input-fields-164",
};

const inputFields4100Data = {
    className: "input-fields-165",
};

const inputFields4101Data = {
    className: "input-fields-166",
};

const inputFields4102Data = {
    className: "input-fields-167",
};

const inputFields682Data = {
    className: "input-fields-470",
};

const inputFields683Data = {
    className: "input-fields-471",
};

const inputFields684Data = {
    className: "input-fields-472",
};

const inputFields685Data = {
    className: "input-fields-473",
};

const inputFields686Data = {
    className: "input-fields-474",
};

const inputFields687Data = {
    className: "input-fields-475",
};

const inputFields688Data = {
    className: "input-fields-476",
};

const inputFields689Data = {
    className: "input-fields-477",
};

const inputFields690Data = {
    className: "input-fields-478",
};

const inputFields691Data = {
    className: "input-fields-479",
};

const inputFields692Data = {
    className: "input-fields-480",
};

const inputFields693Data = {
    className: "input-fields-481",
};

const inputFields694Data = {
    className: "input-fields-482",
};

const inputFields695Data = {
    className: "input-fields-483",
};

const inputFields696Data = {
    className: "input-fields-484",
};

const inputFields697Data = {
    className: "input-fields-485",
};

const inputFields698Data = {
    className: "input-fields-486",
};

const inputFields699Data = {
    className: "input-fields-487",
};

const inputFields6100Data = {
    className: "input-fields-488",
};

const inputFields6101Data = {
    className: "input-fields-489",
};

const inputFields6102Data = {
    className: "input-fields-490",
};

const scrollbar25Data = {
    className: "scrollbar-6",
};

const navigationAction7Data = {
    className: "navigation-action-6",
};

const cBPM20Data = {
    label: "5G Carrier",
    click2: "CLICK",
    globalHeader4Props: globalHeader48Data,
    solutionDetailsProps: solutionDetails2Data,
    actionBarProps: actionBar3Data,
    rowData2Props: rowData22Data,
    inputFields41Props: inputFields470Data,
    inputFields42Props: inputFields471Data,
    inputFields43Props: inputFields472Data,
    inputFields44Props: inputFields473Data,
    inputFields45Props: inputFields474Data,
    inputFields46Props: inputFields475Data,
    inputFields51Props: inputFields5104Data,
    inputFields52Props: inputFields5105Data,
    inputFields53Props: inputFields5106Data,
    inputFields54Props: inputFields5107Data,
    inputFields55Props: inputFields5108Data,
    inputFields56Props: inputFields5109Data,
    inputFields57Props: inputFields5110Data,
    inputFields58Props: inputFields5111Data,
    inputFields59Props: inputFields5112Data,
    inputFields510Props: inputFields5113Data,
    inputFields511Props: inputFields5114Data,
    inputFields512Props: inputFields5115Data,
    inputFields513Props: inputFields5116Data,
    inputFields514Props: inputFields5117Data,
    inputFields515Props: inputFields5118Data,
    inputFields516Props: inputFields5119Data,
    inputFields517Props: inputFields5120Data,
    inputFields518Props: inputFields5121Data,
    inputFields519Props: inputFields5122Data,
    inputFields520Props: inputFields5123Data,
    inputFields47Props: inputFields476Data,
    inputFields48Props: inputFields477Data,
    inputFields49Props: inputFields478Data,
    inputFields410Props: inputFields479Data,
    inputFields411Props: inputFields480Data,
    inputFields412Props: inputFields481Data,
    inputFields413Props: inputFields482Data,
    inputFields61Props: inputFields670Data,
    inputFields62Props: inputFields671Data,
    inputFields63Props: inputFields672Data,
    inputFields64Props: inputFields673Data,
    inputFields65Props: inputFields674Data,
    inputFields66Props: inputFields675Data,
    inputFields67Props: inputFields676Data,
    inputFields68Props: inputFields677Data,
    inputFields69Props: inputFields678Data,
    inputFields610Props: inputFields679Data,
    inputFields611Props: inputFields680Data,
    inputFields612Props: inputFields681Data,
    inputFields414Props: inputFields483Data,
    inputFields415Props: inputFields484Data,
    inputFields416Props: inputFields485Data,
    inputFields417Props: inputFields486Data,
    inputFields418Props: inputFields487Data,
    inputFields419Props: inputFields488Data,
    inputFields420Props: inputFields489Data,
    inputFields421Props: inputFields490Data,
    inputFields422Props: inputFields491Data,
    inputFields423Props: inputFields492Data,
    inputFields521Props: inputFields5124Data,
    inputFields522Props: inputFields5125Data,
    inputFields523Props: inputFields5126Data,
    inputFields524Props: inputFields5127Data,
    inputFields525Props: inputFields5128Data,
    inputFields526Props: inputFields5129Data,
    inputFields527Props: inputFields5130Data,
    inputFields528Props: inputFields5131Data,
    inputFields529Props: inputFields5132Data,
    inputFields530Props: inputFields5133Data,
    inputFields531Props: inputFields5134Data,
    inputFields532Props: inputFields5135Data,
    inputFields533Props: inputFields5136Data,
    inputFields534Props: inputFields5137Data,
    inputFields535Props: inputFields5138Data,
    inputFields536Props: inputFields5139Data,
    inputFields537Props: inputFields5140Data,
    inputFields538Props: inputFields5141Data,
    inputFields539Props: inputFields5142Data,
    inputFields540Props: inputFields5143Data,
    inputFields541Props: inputFields5144Data,
    inputFields542Props: inputFields5145Data,
    inputFields543Props: inputFields5146Data,
    inputFields544Props: inputFields5147Data,
    inputFields545Props: inputFields5148Data,
    inputFields546Props: inputFields5149Data,
    inputFields547Props: inputFields5150Data,
    inputFields548Props: inputFields5151Data,
    inputFields549Props: inputFields5152Data,
    inputFields550Props: inputFields5153Data,
    inputFields424Props: inputFields493Data,
    inputFields425Props: inputFields494Data,
    inputFields426Props: inputFields495Data,
    inputFields427Props: inputFields496Data,
    inputFields428Props: inputFields497Data,
    inputFields429Props: inputFields498Data,
    inputFields430Props: inputFields499Data,
    inputFields431Props: inputFields4100Data,
    inputFields432Props: inputFields4101Data,
    inputFields433Props: inputFields4102Data,
    inputFields613Props: inputFields682Data,
    inputFields614Props: inputFields683Data,
    inputFields615Props: inputFields684Data,
    inputFields616Props: inputFields685Data,
    inputFields617Props: inputFields686Data,
    inputFields618Props: inputFields687Data,
    inputFields619Props: inputFields688Data,
    inputFields620Props: inputFields689Data,
    inputFields621Props: inputFields690Data,
    inputFields622Props: inputFields691Data,
    inputFields623Props: inputFields692Data,
    inputFields624Props: inputFields693Data,
    inputFields625Props: inputFields694Data,
    inputFields626Props: inputFields695Data,
    inputFields627Props: inputFields696Data,
    inputFields628Props: inputFields697Data,
    inputFields629Props: inputFields698Data,
    inputFields630Props: inputFields699Data,
    inputFields631Props: inputFields6100Data,
    inputFields632Props: inputFields6101Data,
    inputFields633Props: inputFields6102Data,
    scrollbar2Props: scrollbar25Data,
    navigationActionProps: navigationAction7Data,
};

const menuLogo10Data = {
    className: "",
};

const aTOMSICON2019close16Data = {
    className: "atomsicon2019close-6-1",
};

const mOLECULESFORMSEARCH10Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close16Data,
};

const aTOMSICON2019notification9Data = {
    className: "",
};

const aTOMSICON2019chatCopy10Data = {
    className: "atomsicon2019chat-copy-9",
};

const globalHeader29Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo10Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH10Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification9Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy10Data,
};

const globalHeader49Data = {
    globalHeader2Props: globalHeader29Data,
};

const inputFields212Data = {
    placeholderText: "Enter solution Name",
};

const inputs9Data = {
    className: "inputs-17",
    inputFields2Props: inputFields212Data,
};

const inputFields312Data = {
    placeholderText: "2023",
};

const inputs28Data = {
    className: "inputs-17",
    inputFields3Props: inputFields312Data,
};

const inputFields213Data = {
    placeholderText: "Lorem",
};

const fields4Data = {
    inputsProps: inputs9Data,
    inputs2Props: inputs28Data,
    inputFields2Props: inputFields213Data,
};

const checkbox10Data = {
    placeholderText: "4G",
};

const checkbox11Data = {
    placeholderText: "5G",
};

const frame5035Data = {
    checkbox1Props: checkbox10Data,
    checkbox2Props: checkbox11Data,
};

const solutionDetails3Data = {
    inputFields2Props: fields4Data,
    frame503Props: frame5035Data,
};

const aTOMSICON2019close17Data = {
    className: "atomsicon2019close-6",
};

const frame1834Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close17Data,
};

const searchInput4Data = {
    frame183Props: frame1834Data,
};

const actionBar4Data = {
    searchInputProps: searchInput4Data,
};

const tableItem210Data = {
    children: "700",
};

const tableItem211Data = {
    children: "850",
};

const tableItem212Data = {
    children: "700",
};

const cellRow5Data = {
    tableItem2Props: tableItem212Data,
};

const rowData23Data = {
    tableItem21Props: tableItem210Data,
    tableItem22Props: tableItem211Data,
    cellRowProps: cellRow5Data,
};

const inputFields4104Data = {
    className: "input-fields-169",
};

const inputFields4105Data = {
    className: "input-fields-170",
};

const inputFields4106Data = {
    className: "input-fields-171",
};

const inputFields4107Data = {
    className: "input-fields-172",
};

const inputFields4108Data = {
    className: "input-fields-173",
};

const inputFields4109Data = {
    className: "input-fields-174",
};

const inputFields5155Data = {
    className: "input-fields-346",
};

const inputFields5156Data = {
    className: "input-fields-347",
};

const inputFields5157Data = {
    className: "input-fields-348",
};

const inputFields5158Data = {
    className: "input-fields-349",
};

const inputFields5159Data = {
    className: "input-fields-350",
};

const inputFields5160Data = {
    className: "input-fields-351",
};

const inputFields5161Data = {
    className: "input-fields-352",
};

const inputFields5162Data = {
    className: "input-fields-353",
};

const inputFields5163Data = {
    className: "input-fields-354",
};

const inputFields5164Data = {
    className: "input-fields-355",
};

const inputFields5165Data = {
    className: "input-fields-356",
};

const inputFields5166Data = {
    className: "input-fields-357",
};

const inputFields5167Data = {
    className: "input-fields-358",
};

const inputFields5168Data = {
    className: "input-fields-359",
};

const inputFields5169Data = {
    className: "input-fields-360",
};

const inputFields5170Data = {
    className: "input-fields-361",
};

const inputFields5171Data = {
    className: "input-fields-362",
};

const inputFields5172Data = {
    className: "input-fields-363",
};

const inputFields5173Data = {
    className: "input-fields-364",
};

const inputFields5174Data = {
    className: "input-fields-365",
};

const inputFields4110Data = {
    className: "input-fields-175",
};

const inputFields4111Data = {
    className: "input-fields-176",
};

const inputFields4112Data = {
    className: "input-fields-177",
};

const inputFields4113Data = {
    className: "input-fields-178",
};

const inputFields4114Data = {
    className: "input-fields-179",
};

const inputFields4115Data = {
    className: "input-fields-180",
};

const inputFields4116Data = {
    className: "input-fields-181",
};

const inputFields6104Data = {
    className: "input-fields-492",
};

const inputFields6105Data = {
    className: "input-fields-493",
};

const inputFields6106Data = {
    className: "input-fields-494",
};

const inputFields6107Data = {
    className: "input-fields-495",
};

const inputFields6108Data = {
    className: "input-fields-496",
};

const inputFields6109Data = {
    className: "input-fields-497",
};

const inputFields71Data = {
    placeholderText: "10",
};

const inputFields6110Data = {
    className: "input-fields-498",
};

const inputFields6111Data = {
    className: "input-fields-499",
};

const inputFields6112Data = {
    className: "input-fields-500",
};

const inputFields6113Data = {
    className: "input-fields-501",
};

const inputFields6114Data = {
    className: "input-fields-502",
};

const inputFields4117Data = {
    className: "input-fields-182",
};

const inputFields82Data = {
    className: "input-fields-523",
};

const inputFields83Data = {
    className: "input-fields-524",
};

const inputFields84Data = {
    className: "input-fields-525",
};

const inputFields4118Data = {
    className: "input-fields-183",
};

const inputFields4119Data = {
    className: "input-fields-184",
};

const inputFields4120Data = {
    className: "input-fields-185",
};

const inputFields4121Data = {
    className: "input-fields-186",
};

const inputFields4122Data = {
    className: "input-fields-187",
};

const inputFields5175Data = {
    className: "input-fields-366",
};

const inputFields92Data = {
    className: "input-fields-531",
};

const inputFields93Data = {
    className: "input-fields-532",
};

const inputFields94Data = {
    className: "input-fields-533",
};

const inputFields5176Data = {
    className: "input-fields-367",
};

const inputFields5177Data = {
    className: "input-fields-368",
};

const inputFields5178Data = {
    className: "input-fields-369",
};

const inputFields5179Data = {
    className: "input-fields-370",
};

const inputFields5180Data = {
    className: "input-fields-371",
};

const inputFields5181Data = {
    className: "input-fields-372",
};

const inputFields5182Data = {
    className: "input-fields-373",
};

const inputFields5183Data = {
    className: "input-fields-374",
};

const inputFields5184Data = {
    className: "input-fields-375",
};

const inputFields5185Data = {
    className: "input-fields-376",
};

const inputFields5186Data = {
    className: "input-fields-377",
};

const inputFields5187Data = {
    className: "input-fields-378",
};

const inputFields5188Data = {
    className: "input-fields-379",
};

const inputFields5189Data = {
    className: "input-fields-380",
};

const inputFields5190Data = {
    className: "input-fields-381",
};

const inputFields5191Data = {
    className: "input-fields-382",
};

const inputFields5192Data = {
    className: "input-fields-383",
};

const inputFields5193Data = {
    className: "input-fields-384",
};

const inputFields5194Data = {
    className: "input-fields-385",
};

const inputFields5195Data = {
    className: "input-fields-386",
};

const inputFields5196Data = {
    className: "input-fields-387",
};

const inputFields5197Data = {
    className: "input-fields-388",
};

const inputFields5198Data = {
    className: "input-fields-389",
};

const inputFields5199Data = {
    className: "input-fields-390",
};

const inputFields5200Data = {
    className: "input-fields-391",
};

const inputFields4123Data = {
    className: "input-fields-188",
};

const inputFields85Data = {
    className: "input-fields-526",
};

const inputFields86Data = {
    className: "input-fields-527",
};

const inputFields87Data = {
    className: "input-fields-528",
};

const inputFields88Data = {
    className: "input-fields-529",
};

const inputFields4124Data = {
    className: "input-fields-189",
};

const inputFields4125Data = {
    className: "input-fields-190",
};

const inputFields4126Data = {
    className: "input-fields-191",
};

const inputFields4127Data = {
    className: "input-fields-192",
};

const inputFields4128Data = {
    className: "input-fields-193",
};

const inputFields6115Data = {
    className: "input-fields-503",
};

const inputFields6116Data = {
    className: "input-fields-504",
};

const inputFields6117Data = {
    className: "input-fields-505",
};

const inputFields6118Data = {
    className: "input-fields-506",
};

const inputFields6119Data = {
    className: "input-fields-507",
};

const inputFields6120Data = {
    className: "input-fields-508",
};

const inputFields6121Data = {
    className: "input-fields-509",
};

const inputFields6122Data = {
    className: "input-fields-510",
};

const inputFields6123Data = {
    className: "input-fields-511",
};

const inputFields6124Data = {
    className: "input-fields-512",
};

const inputFields6125Data = {
    className: "input-fields-513",
};

const inputFields72Data = {
    placeholderText: "20",
    className: "input-fields-457",
};

const inputFields6126Data = {
    className: "input-fields-514",
};

const inputFields6127Data = {
    className: "input-fields-515",
};

const inputFields73Data = {
    placeholderText: "10",
    className: "input-fields-491",
};

const inputFields74Data = {
    placeholderText: "10",
    className: "input-fields-521",
};

const inputFields6128Data = {
    className: "input-fields-516",
};

const inputFields6129Data = {
    className: "input-fields-517",
};

const inputFields6130Data = {
    className: "input-fields-518",
};

const inputFields6131Data = {
    className: "input-fields-519",
};

const inputFields6132Data = {
    className: "input-fields-520",
};

const scrollbar26Data = {
    className: "scrollbar-7",
};

const group3914Data = {
    className: "group-391-3",
};

const cBPM21Data = {
    label1: "5G Carrier",
    label2: "Show All",
    label3: "Show Next",
    label4: "Save",
    globalHeader4Props: globalHeader49Data,
    solutionDetailsProps: solutionDetails3Data,
    actionBarProps: actionBar4Data,
    rowData2Props: rowData23Data,
    inputFields41Props: inputFields4104Data,
    inputFields42Props: inputFields4105Data,
    inputFields43Props: inputFields4106Data,
    inputFields44Props: inputFields4107Data,
    inputFields45Props: inputFields4108Data,
    inputFields46Props: inputFields4109Data,
    inputFields51Props: inputFields5155Data,
    inputFields52Props: inputFields5156Data,
    inputFields53Props: inputFields5157Data,
    inputFields54Props: inputFields5158Data,
    inputFields55Props: inputFields5159Data,
    inputFields56Props: inputFields5160Data,
    inputFields57Props: inputFields5161Data,
    inputFields58Props: inputFields5162Data,
    inputFields59Props: inputFields5163Data,
    inputFields510Props: inputFields5164Data,
    inputFields511Props: inputFields5165Data,
    inputFields512Props: inputFields5166Data,
    inputFields513Props: inputFields5167Data,
    inputFields514Props: inputFields5168Data,
    inputFields515Props: inputFields5169Data,
    inputFields516Props: inputFields5170Data,
    inputFields517Props: inputFields5171Data,
    inputFields518Props: inputFields5172Data,
    inputFields519Props: inputFields5173Data,
    inputFields520Props: inputFields5174Data,
    inputFields47Props: inputFields4110Data,
    inputFields48Props: inputFields4111Data,
    inputFields49Props: inputFields4112Data,
    inputFields410Props: inputFields4113Data,
    inputFields411Props: inputFields4114Data,
    inputFields412Props: inputFields4115Data,
    inputFields413Props: inputFields4116Data,
    inputFields61Props: inputFields6104Data,
    inputFields62Props: inputFields6105Data,
    inputFields63Props: inputFields6106Data,
    inputFields64Props: inputFields6107Data,
    inputFields65Props: inputFields6108Data,
    inputFields66Props: inputFields6109Data,
    inputFields71Props: inputFields71Data,
    inputFields67Props: inputFields6110Data,
    inputFields68Props: inputFields6111Data,
    inputFields69Props: inputFields6112Data,
    inputFields610Props: inputFields6113Data,
    inputFields611Props: inputFields6114Data,
    inputFields414Props: inputFields4117Data,
    inputFields81Props: inputFields82Data,
    inputFields82Props: inputFields83Data,
    inputFields83Props: inputFields84Data,
    inputFields415Props: inputFields4118Data,
    inputFields416Props: inputFields4119Data,
    inputFields417Props: inputFields4120Data,
    inputFields418Props: inputFields4121Data,
    inputFields419Props: inputFields4122Data,
    inputFields521Props: inputFields5175Data,
    inputFields91Props: inputFields92Data,
    inputFields92Props: inputFields93Data,
    inputFields93Props: inputFields94Data,
    inputFields522Props: inputFields5176Data,
    inputFields523Props: inputFields5177Data,
    inputFields524Props: inputFields5178Data,
    inputFields525Props: inputFields5179Data,
    inputFields526Props: inputFields5180Data,
    inputFields527Props: inputFields5181Data,
    inputFields528Props: inputFields5182Data,
    inputFields529Props: inputFields5183Data,
    inputFields530Props: inputFields5184Data,
    inputFields531Props: inputFields5185Data,
    inputFields532Props: inputFields5186Data,
    inputFields533Props: inputFields5187Data,
    inputFields534Props: inputFields5188Data,
    inputFields535Props: inputFields5189Data,
    inputFields536Props: inputFields5190Data,
    inputFields537Props: inputFields5191Data,
    inputFields538Props: inputFields5192Data,
    inputFields539Props: inputFields5193Data,
    inputFields540Props: inputFields5194Data,
    inputFields541Props: inputFields5195Data,
    inputFields542Props: inputFields5196Data,
    inputFields543Props: inputFields5197Data,
    inputFields544Props: inputFields5198Data,
    inputFields545Props: inputFields5199Data,
    inputFields546Props: inputFields5200Data,
    inputFields420Props: inputFields4123Data,
    inputFields84Props: inputFields85Data,
    inputFields85Props: inputFields86Data,
    inputFields86Props: inputFields87Data,
    inputFields87Props: inputFields88Data,
    inputFields421Props: inputFields4124Data,
    inputFields422Props: inputFields4125Data,
    inputFields423Props: inputFields4126Data,
    inputFields424Props: inputFields4127Data,
    inputFields425Props: inputFields4128Data,
    inputFields612Props: inputFields6115Data,
    inputFields613Props: inputFields6116Data,
    inputFields614Props: inputFields6117Data,
    inputFields615Props: inputFields6118Data,
    inputFields616Props: inputFields6119Data,
    inputFields617Props: inputFields6120Data,
    inputFields618Props: inputFields6121Data,
    inputFields619Props: inputFields6122Data,
    inputFields620Props: inputFields6123Data,
    inputFields621Props: inputFields6124Data,
    inputFields622Props: inputFields6125Data,
    inputFields72Props: inputFields72Data,
    inputFields623Props: inputFields6126Data,
    inputFields624Props: inputFields6127Data,
    inputFields73Props: inputFields73Data,
    inputFields74Props: inputFields74Data,
    inputFields625Props: inputFields6128Data,
    inputFields626Props: inputFields6129Data,
    inputFields627Props: inputFields6130Data,
    inputFields628Props: inputFields6131Data,
    inputFields629Props: inputFields6132Data,
    scrollbar2Props: scrollbar26Data,
    group391Props: group3914Data,
};

const menuLogo11Data = {
    className: "",
};

const aTOMSICON2019close18Data = {
    className: "atomsicon2019close-7-1",
};

const mOLECULESFORMSEARCH11Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close18Data,
};

const aTOMSICON2019notification10Data = {
    className: "",
};

const aTOMSICON2019chatCopy11Data = {
    className: "atomsicon2019chat-copy-10",
};

const globalHeader210Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo11Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH11Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification10Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy11Data,
};

const globalHeader410Data = {
    globalHeader2Props: globalHeader210Data,
};

const heading9Data = {
    children: "Project Details",
    className: "heading-12",
};

const inputFields214Data = {
    placeholderText: "New Build",
};

const inputs10Data = {
    inputFields2Props: inputFields214Data,
};

const inputFields313Data = {
    placeholderText: "2023",
};

const inputs29Data = {
    inputFields3Props: inputFields313Data,
};

const inputFields314Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close27Data = {
    className: "atomsicon2019close-36",
};

const frame5015Data = {
    inputsProps: inputs10Data,
    inputs2Props: inputs29Data,
    inputFields3Props: inputFields314Data,
    aTOMSICON2019close2Props: aTOMSICON2019close27Data,
};

const heading10Data = {
    children: "Contact Information",
    className: "heading-14",
};

const aTOMSICON2019close19Data = {
    className: "atomsicon2019close-7",
};

const frame2294Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close19Data,
};

const columnHeader116Data = {
    children: "Name",
};

const columnHeader117Data = {
    children: "Company",
};

const columnHeader118Data = {
    children: "Contact Type",
};

const columnHeader119Data = {
    children: "Phone",
};

const columnHeader120Data = {
    children: "Email",
};

const header2Data = {
    columnHeader11Props: columnHeader116Data,
    columnHeader12Props: columnHeader117Data,
    columnHeader13Props: columnHeader118Data,
    columnHeader14Props: columnHeader119Data,
    columnHeader15Props: columnHeader120Data,
};

const navigationAction8Data = {
    className: "navigation-action-7",
};

const cBPM222Data = {
    globalHeader4Props: globalHeader410Data,
    heading1Props: heading9Data,
    frame501Props: frame5015Data,
    heading2Props: heading10Data,
    frame229Props: frame2294Data,
    headerProps: header2Data,
    navigationActionProps: navigationAction8Data,
};

const menuLogo12Data = {
    className: "",
};

const aTOMSICON2019close20Data = {
    className: "atomsicon2019close-8-1",
};

const mOLECULESFORMSEARCH12Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close20Data,
};

const aTOMSICON2019notification11Data = {
    className: "",
};

const aTOMSICON2019chatCopy12Data = {
    className: "atomsicon2019chat-copy-11",
};

const globalHeader211Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo12Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH12Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification11Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy12Data,
};

const globalHeader411Data = {
    globalHeader2Props: globalHeader211Data,
};

const heading11Data = {
    children: "Project Details",
    className: "heading-7",
};

const inputFields215Data = {
    placeholderText: "New Build",
};

const inputs11Data = {
    inputFields2Props: inputFields215Data,
};

const inputFields315Data = {
    placeholderText: "2023",
};

const inputs210Data = {
    inputFields3Props: inputFields315Data,
};

const inputFields316Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close28Data = {
    className: "atomsicon2019close-37",
};

const frame5016Data = {
    inputsProps: inputs11Data,
    inputs2Props: inputs210Data,
    inputFields3Props: inputFields316Data,
    aTOMSICON2019close2Props: aTOMSICON2019close28Data,
};

const heading12Data = {
    children: "Contact Information",
    className: "heading-7",
};

const aTOMSICON2019close21Data = {
    className: "atomsicon2019close-8-2",
};

const frame2295Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close21Data,
};

const columnHeader121Data = {
    children: "Name",
};

const columnHeader122Data = {
    children: "Company",
};

const columnHeader123Data = {
    children: "Contact Type",
};

const columnHeader124Data = {
    children: "Phone",
};

const columnHeader125Data = {
    children: "Email",
};

const header3Data = {
    className: "header-2",
    columnHeader11Props: columnHeader121Data,
    columnHeader12Props: columnHeader122Data,
    columnHeader13Props: columnHeader123Data,
    columnHeader14Props: columnHeader124Data,
    columnHeader15Props: columnHeader125Data,
};

const text3Data = {
    className: "text-29",
};

const aTOMSICON2019close29Data = {
    className: "atomsicon2019close-8",
};

const checkbox22Data = {
    placeholderText: "Jason Cham",
};

const checkbox23Data = {
    placeholderText: "Jack Hammer",
};

const menuItem1Data = {
    checkbox2Props: checkbox23Data,
};

const checkbox24Data = {
    placeholderText: "Lorem",
};

const menuItem2Data = {
    checkbox2Props: checkbox24Data,
};

const checkbox25Data = {
    placeholderText: "Lorem",
};

const menuItem3Data = {
    checkbox2Props: checkbox25Data,
};

const scrollbar3Data = {
    className: "scrollbar-1",
};

const navigationAction9Data = {
    className: "navigation-action-8",
};

const cBPM24Data = {
    placeholderText1: "Search",
    text1: "Select All",
    text2: "Clear All",
    placeholderText2: "James",
    globalHeader4Props: globalHeader411Data,
    heading1Props: heading11Data,
    frame501Props: frame5016Data,
    heading2Props: heading12Data,
    frame229Props: frame2295Data,
    headerProps: header3Data,
    textProps: text3Data,
    aTOMSICON2019closeProps: aTOMSICON2019close29Data,
    checkbox2Props: checkbox22Data,
    menuItem1Props: menuItem1Data,
    menuItem2Props: menuItem2Data,
    menuItem3Props: menuItem3Data,
    scrollbarProps: scrollbar3Data,
    navigationActionProps: navigationAction9Data,
};

const menuLogo13Data = {
    className: "",
};

const aTOMSICON2019close30Data = {
    className: "atomsicon2019close-9-1",
};

const mOLECULESFORMSEARCH13Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close30Data,
};

const aTOMSICON2019notification12Data = {
    className: "",
};

const aTOMSICON2019chatCopy13Data = {
    className: "atomsicon2019chat-copy-12",
};

const globalHeader212Data = {
    className: "",
    aTOMSICON2019closeProps: menuLogo13Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH13Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification12Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy13Data,
};

const globalHeader412Data = {
    globalHeader2Props: globalHeader212Data,
};

const heading13Data = {
    children: "Project Details",
    className: "heading-14",
};

const inputFields216Data = {
    placeholderText: "New Build",
};

const inputs12Data = {
    inputFields2Props: inputFields216Data,
};

const inputFields317Data = {
    placeholderText: "2023",
};

const inputs211Data = {
    inputFields3Props: inputFields317Data,
};

const inputFields318Data = {
    placeholderText: "Lorem",
};

const aTOMSICON2019close210Data = {
    className: "",
};

const frame5017Data = {
    inputsProps: inputs12Data,
    inputs2Props: inputs211Data,
    inputFields3Props: inputFields318Data,
    aTOMSICON2019close2Props: aTOMSICON2019close210Data,
};

const heading14Data = {
    children: "Contact Information",
    className: "heading-4",
};

const aTOMSICON2019close31Data = {
    className: "atomsicon2019close-9",
};

const frame2296Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close31Data,
};

const columnHeader126Data = {
    children: "Name",
};

const columnHeader127Data = {
    children: "Company",
};

const columnHeader128Data = {
    children: "Contact Type",
};

const columnHeader129Data = {
    children: "Phone",
};

const columnHeader130Data = {
    children: "Email",
};

const cell01Text25Data = {
    children: "Jason Cham",
};

const cell01Text26Data = {
    children: "VERIZON",
};

const cell01Text27Data = {
    children: "8987654322",
};

const cell01Text28Data = {
    children: "josh@verizon.com",
};

const tableRow17Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text25Data,
    cell01Text2Props: cell01Text26Data,
    cell01Text3Props: cell01Text27Data,
    cell01Text4Props: cell01Text28Data,
};

const cell01Text29Data = {
    children: "Jack Hermasson",
};

const cell01Text30Data = {
    children: "VERIZON",
};

const cell01Text31Data = {
    children: "XXXXXXXXXX",
};

const cell01Text32Data = {
    children: "abc@verizon.com",
};

const tableRow18Data = {
    placeholderText: "RF",
    cell01Text1Props: cell01Text29Data,
    cell01Text2Props: cell01Text30Data,
    cell01Text3Props: cell01Text31Data,
    cell01Text4Props: cell01Text32Data,
};

const cell01Text33Data = {
    children: "James",
};

const cell01Text34Data = {
    children: "VERIZON",
};

const cell01Text35Data = {
    children: "XXXXXXXXXX",
};

const cell01Text36Data = {
    children: "abc@verizon.com",
};

const tableRow19Data = {
    placeholderText: "Traffic Engineer",
    cell01Text1Props: cell01Text33Data,
    cell01Text2Props: cell01Text34Data,
    cell01Text3Props: cell01Text35Data,
    cell01Text4Props: cell01Text36Data,
};

const showPage3Data = {
    placeholderText: "0",
};

const pageNumber43Data = {
    children: "2",
};

const frame5043Data = {
    columnHeader11Props: columnHeader126Data,
    columnHeader12Props: columnHeader127Data,
    columnHeader13Props: columnHeader128Data,
    columnHeader14Props: columnHeader129Data,
    columnHeader15Props: columnHeader130Data,
    tableRow11Props: tableRow17Data,
    tableRow12Props: tableRow18Data,
    tableRow13Props: tableRow19Data,
    showPageProps: showPage3Data,
    pageNumber4Props: pageNumber43Data,
};

const navigationAction10Data = {
    className: "navigation-action-9",
};

const cBPM262Data = {
    globalHeader4Props: globalHeader412Data,
    heading1Props: heading13Data,
    frame501Props: frame5017Data,
    heading2Props: heading14Data,
    frame229Props: frame2296Data,
    frame504Props: frame5043Data,
    navigationActionProps: navigationAction10Data,
};

const menuLogo14Data = {
    className: "",
};

const aTOMSICON2019close32Data = {
    className: "atomsicon2019close-10-1",
};

const mOLECULESFORMSEARCH14Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close32Data,
};

const aTOMSICON2019notification13Data = {
    className: "atomsicon2019notification-12",
};

const aTOMSICON2019chatCopy14Data = {
    className: "atomsicon2019chat-copy-13",
};

const globalHeader213Data = {
    className: "global-header-68",
    aTOMSICON2019closeProps: menuLogo14Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH14Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification13Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy14Data,
};

const globalHeader413Data = {
    globalHeader2Props: globalHeader213Data,
};

const heading45Data = {
    className: "heading-25",
};

const localSelectSolutionType31Data = {
    heading4Props: heading45Data,
};

const group1Data = {
    className: "",
};

const iconWithLabel41Data = {
    className: "",
    groupProps: group1Data,
};

const localCardsValidationStatus81Data = {
    iconWithLabel4Props: iconWithLabel41Data,
};

const aTOMSICON2019close33Data = {
    className: "atomsicon2019close-10",
};

const frame1835Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close33Data,
};

const searchInput5Data = {
    frame183Props: frame1835Data,
};

const icon5Data = {
    className: "icon-59",
};

const setting1Data = {
    frame18Props: searchInput5Data,
    frame18Props2: icon5Data,
};

const columnHeader21Data = {
    children: "Latitude",
};

const columnHeader31Data = {
    children: "Longtitude",
};

const columnHeader32Data = {
    children: "SR Name",
    className: "column-header-24",
};

const columnHeader22Data = {
    children: "PS Name",
};

const columnHeader61Data = {
    children: "SR Radius (miles)",
};

const columnHeader62Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-33-2",
};

const columnHeader63Data = {
    children: "Sector Count",
};

const columnHeader64Data = {
    children: "No. of RRH’s",
    className: "column-header-33",
};

const rowData111Data = {
    columnHeader21Props: columnHeader21Data,
    columnHeader31Props: columnHeader31Data,
    columnHeader32Props: columnHeader32Data,
    columnHeader22Props: columnHeader22Data,
    columnHeader61Props: columnHeader61Data,
    columnHeader62Props: columnHeader62Data,
    columnHeader63Props: columnHeader63Data,
    columnHeader64Props: columnHeader64Data,
};

const tableHeader1Data = {
    rowDataProps: rowData111Data,
};

const inputFields161Data = {
    children: "47.2042",
};

const inputFields162Data = {
    children: "-12.9822",
};

const inputFields163Data = {
    children: "Lorem",
};

const inputFields164Data = {
    children: "Lorem",
};

const inputFields222Data = {
    children: "3",
};

const inputFields223Data = {
    children: "5",
};

const statusIconSmall3Data = {
    className: "status-icon-small-18",
};

const cell01Text72Data = {
    statusIconSmallProps: statusIconSmall3Data,
};

const cell02Text1Data = {
    children: "47.2042",
};

const cell02Text2Data = {
    children: "-12.9822",
};

const cell02Text3Data = {
    children: "Lorem",
    className: "",
};

const cell02Text4Data = {
    children: "Lorem Ipsum",
};

const cell06Text1Data = {
    children: "1",
};

const cell06Text2Data = {
    children: "12",
};

const cell06Text3Data = {
    children: "3",
};

const cell06Text4Data = {
    children: "5",
};

const rowData222Data = {
    cell01TextProps: cell01Text72Data,
    cell02Text1Props: cell02Text1Data,
    cell02Text2Props: cell02Text2Data,
    cell02Text3Props: cell02Text3Data,
    cell02Text4Props: cell02Text4Data,
    cell06Text1Props: cell06Text1Data,
    cell06Text2Props: cell06Text2Data,
    cell06Text3Props: cell06Text3Data,
    cell06Text4Props: cell06Text4Data,
};

const tableRow21Data = {
    rowData2Props: rowData222Data,
};

const statusIconSmall4Data = {
    className: "status-icon-small-19",
};

const cell01Text73Data = {
    statusIconSmallProps: statusIconSmall4Data,
};

const cell02Text5Data = {
    children: "47.2042",
};

const cell02Text6Data = {
    children: "-12.9822",
};

const cell02Text7Data = {
    children: "Lorem",
    className: "",
};

const cell02Text8Data = {
    children: "Lorem Ipsum",
};

const cell06Text5Data = {
    children: "1",
};

const cell06Text6Data = {
    children: "12",
};

const cell06Text7Data = {
    children: "3",
};

const cell06Text8Data = {
    children: "5",
};

const rowData223Data = {
    cell01TextProps: cell01Text73Data,
    cell02Text1Props: cell02Text5Data,
    cell02Text2Props: cell02Text6Data,
    cell02Text3Props: cell02Text7Data,
    cell02Text4Props: cell02Text8Data,
    cell06Text1Props: cell06Text5Data,
    cell06Text2Props: cell06Text6Data,
    cell06Text3Props: cell06Text7Data,
    cell06Text4Props: cell06Text8Data,
};

const tableRow22Data = {
    rowData2Props: rowData223Data,
};

const statusIconSmall5Data = {
    className: "status-icon-small-20",
};

const cell01Text74Data = {
    statusIconSmallProps: statusIconSmall5Data,
};

const cell02Text9Data = {
    children: "47.2042",
};

const cell02Text10Data = {
    children: "-12.9822",
};

const cell02Text11Data = {
    children: "Lorem",
    className: "",
};

const cell02Text12Data = {
    children: "Lorem Ipsum",
};

const cell06Text9Data = {
    children: "1",
};

const cell06Text10Data = {
    children: "12",
};

const cell06Text11Data = {
    children: "3",
};

const cell06Text12Data = {
    children: "5",
};

const rowData224Data = {
    cell01TextProps: cell01Text74Data,
    cell02Text1Props: cell02Text9Data,
    cell02Text2Props: cell02Text10Data,
    cell02Text3Props: cell02Text11Data,
    cell02Text4Props: cell02Text12Data,
    cell06Text1Props: cell06Text9Data,
    cell06Text2Props: cell06Text10Data,
    cell06Text3Props: cell06Text11Data,
    cell06Text4Props: cell06Text12Data,
};

const tableRow23Data = {
    rowData2Props: rowData224Data,
};

const statusIconSmall6Data = {
    className: "status-icon-small-21",
};

const cell01Text75Data = {
    statusIconSmallProps: statusIconSmall6Data,
};

const cell02Text13Data = {
    children: "47.2042",
};

const cell02Text14Data = {
    children: "-12.9822",
};

const cell02Text15Data = {
    children: "Lorem",
    className: "",
};

const cell02Text16Data = {
    children: "Lorem Ipsum",
};

const cell06Text13Data = {
    children: "1",
};

const cell06Text14Data = {
    children: "12",
};

const cell06Text15Data = {
    children: "3",
};

const cell06Text16Data = {
    children: "5",
};

const rowData225Data = {
    cell01TextProps: cell01Text75Data,
    cell02Text1Props: cell02Text13Data,
    cell02Text2Props: cell02Text14Data,
    cell02Text3Props: cell02Text15Data,
    cell02Text4Props: cell02Text16Data,
    cell06Text1Props: cell06Text13Data,
    cell06Text2Props: cell06Text14Data,
    cell06Text3Props: cell06Text15Data,
    cell06Text4Props: cell06Text16Data,
};

const tableRow24Data = {
    rowData2Props: rowData225Data,
};

const statusIconSmall7Data = {
    className: "status-icon-small-22",
};

const cell01Text76Data = {
    statusIconSmallProps: statusIconSmall7Data,
};

const cell02Text17Data = {
    children: "47.2042",
};

const cell02Text18Data = {
    children: "-12.9822",
};

const cell02Text19Data = {
    children: "Lorem",
    className: "",
};

const cell02Text20Data = {
    children: "Lorem Ipsum",
};

const cell06Text17Data = {
    children: "1",
};

const cell06Text18Data = {
    children: "12",
};

const cell06Text19Data = {
    children: "3",
};

const cell06Text20Data = {
    children: "5",
};

const rowData226Data = {
    cell01TextProps: cell01Text76Data,
    cell02Text1Props: cell02Text17Data,
    cell02Text2Props: cell02Text18Data,
    cell02Text3Props: cell02Text19Data,
    cell02Text4Props: cell02Text20Data,
    cell06Text1Props: cell06Text17Data,
    cell06Text2Props: cell06Text18Data,
    cell06Text3Props: cell06Text19Data,
    cell06Text4Props: cell06Text20Data,
};

const tableRow25Data = {
    rowData2Props: rowData226Data,
};

const group2Data = {
    className: "group-124",
};

const cell01Text210Data = {
    label: "01",
    groupProps: group2Data,
};

const cell02Text21Data = {
    children: "47.2042",
};

const cell02Text22Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON1Data = {
    className: "",
};

const cell02Text23Data = {
    children: "Lorem Ipsum",
};

const cell06Text21Data = {
    children: "1",
};

const cell06Text22Data = {
    children: "12",
};

const cell06Text23Data = {
    children: "3",
};

const cell06Text24Data = {
    children: "5",
};

const rowData31Data = {
    cell01Text2Props: cell01Text210Data,
    cell02Text1Props: cell02Text21Data,
    cell02Text2Props: cell02Text22Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON1Data,
    cell02Text3Props: cell02Text23Data,
    cell06Text1Props: cell06Text21Data,
    cell06Text2Props: cell06Text22Data,
    cell06Text3Props: cell06Text23Data,
    cell06Text4Props: cell06Text24Data,
};

const tableRow71Data = {
    rowData3Props: rowData31Data,
};

const statusIconSmall8Data = {
    className: "status-icon-small-23",
};

const cell01Text77Data = {
    statusIconSmallProps: statusIconSmall8Data,
};

const cell02Text24Data = {
    children: "47.2042",
};

const cell02Text25Data = {
    children: "-12.9822",
};

const cell02Text26Data = {
    children: "Lorem",
    className: "",
};

const cell02Text27Data = {
    children: "Lorem Ipsum",
};

const cell06Text25Data = {
    children: "1",
};

const cell06Text26Data = {
    children: "12",
};

const cell06Text27Data = {
    children: "3",
};

const cell06Text28Data = {
    children: "5",
};

const rowData227Data = {
    cell01TextProps: cell01Text77Data,
    cell02Text1Props: cell02Text24Data,
    cell02Text2Props: cell02Text25Data,
    cell02Text3Props: cell02Text26Data,
    cell02Text4Props: cell02Text27Data,
    cell06Text1Props: cell06Text25Data,
    cell06Text2Props: cell06Text26Data,
    cell06Text3Props: cell06Text27Data,
    cell06Text4Props: cell06Text28Data,
};

const tableRow26Data = {
    rowData2Props: rowData227Data,
};

const statusIconSmall9Data = {
    className: "status-icon-small",
};

const cell01Text78Data = {
    statusIconSmallProps: statusIconSmall9Data,
};

const cell02Text28Data = {
    children: "47.2042",
};

const cell02Text29Data = {
    children: "12.9822",
};

const cell02Text30Data = {
    children: "Lorem",
    className: "",
};

const cell02Text31Data = {
    children: "Lorem Ipsum",
};

const cell06Text29Data = {
    children: "1",
};

const cell06Text30Data = {
    children: "12",
};

const cell06Text31Data = {
    children: "3",
};

const cell06Text32Data = {
    children: "5",
};

const rowData228Data = {
    cell01TextProps: cell01Text78Data,
    cell02Text1Props: cell02Text28Data,
    cell02Text2Props: cell02Text29Data,
    cell02Text3Props: cell02Text30Data,
    cell02Text4Props: cell02Text31Data,
    cell06Text1Props: cell06Text29Data,
    cell06Text2Props: cell06Text30Data,
    cell06Text3Props: cell06Text31Data,
    cell06Text4Props: cell06Text32Data,
};

const tableRow27Data = {
    rowData2Props: rowData228Data,
};

const showPage4Data = {
    placeholderText: "10",
};

const pageNumber44Data = {
    children: "2",
};

const pageNumber45Data = {
    children: "3",
};

const pageNumber46Data = {
    children: "4",
};

const pageNumber47Data = {
    children: "5",
};

const pageNumber22Data = {
    children: "6",
};

const pageNumber48Data = {
    children: "7",
};

const pageNumber23Data = {
    children: "8",
};

const pageNumber24Data = {
    children: "9",
};

const pagination1Data = {
    pageNumber1Props: showPage4Data,
    pageNumber1Props2: pageNumber44Data,
    pageNumber2Props: pageNumber45Data,
    pageNumber3Props: pageNumber46Data,
    pageNumber4Props: pageNumber47Data,
    pageNumber21Props: pageNumber22Data,
    pageNumber5Props: pageNumber48Data,
    pageNumber22Props: pageNumber23Data,
    pageNumber23Props: pageNumber24Data,
};

const navigationAction11Data = {
    className: "navigation-action-10",
};

const cBPM14Data = {
    accordionMargin: "/img/accordion-margin@2x.png",
    checkboxMargin: "/img/accordion-margin@2x.png",
    placeholderText1: "1",
    placeholderText2: "12",
    globalHeader4Props: globalHeader413Data,
    localSelectSolutionType3Props: localSelectSolutionType31Data,
    localCardsValidationStatus8Props: localCardsValidationStatus81Data,
    settingProps: setting1Data,
    tableHeaderProps: tableHeader1Data,
    inputFields161Props: inputFields161Data,
    inputFields162Props: inputFields162Data,
    inputFields163Props: inputFields163Data,
    inputFields164Props: inputFields164Data,
    inputFields221Props: inputFields222Data,
    inputFields222Props: inputFields223Data,
    tableRow21Props: tableRow21Data,
    tableRow22Props: tableRow22Data,
    tableRow23Props: tableRow23Data,
    tableRow24Props: tableRow24Data,
    tableRow25Props: tableRow25Data,
    tableRow7Props: tableRow71Data,
    tableRow26Props: tableRow26Data,
    tableRow27Props: tableRow27Data,
    paginationProps: pagination1Data,
    navigationActionProps: navigationAction11Data,
};

const menuLogo15Data = {
    className: "menu-logo-14",
};

const aTOMSICON2019close34Data = {
    className: "atomsicon2019close-26",
};

const mOLECULESFORMSEARCH15Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close34Data,
};

const aTOMSICON2019notification14Data = {
    className: "atomsicon2019notification-13",
};

const aTOMSICON2019chatCopy15Data = {
    className: "atomsicon2019chat-copy-14",
};

const globalHeader214Data = {
    className: "global-header-69",
    aTOMSICON2019closeProps: menuLogo15Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH15Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification14Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy15Data,
};

const headerAndDivider2Data = {
    className: "header-and-divider-1",
};

const cBPM01Data = {
    globalHeader2Props: globalHeader214Data,
    globalHeader2Props2: headerAndDivider2Data,
};

const menuLogo16Data = {
    className: "",
};

const aTOMSICON2019close35Data = {
    className: "atomsicon2019close-27",
};

const mOLECULESFORMSEARCH16Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close35Data,
};

const aTOMSICON2019notification15Data = {
    className: "atomsicon2019notification-14",
};

const aTOMSICON2019chatCopy16Data = {
    className: "atomsicon2019chat-copy-15",
};

const globalHeader215Data = {
    className: "global-header-70",
    aTOMSICON2019closeProps: menuLogo16Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH16Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification15Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy16Data,
};

const globalHeader414Data = {
    globalHeader2Props: globalHeader215Data,
};

const frame47443Data = {
    className: "local-swimlane",
};

const heading46Data = {
    className: "heading-26",
};

const navigationAction12Data = {
    className: "navigation-action-11",
};

const cBPM02Data = {
    globalHeader4Props: globalHeader414Data,
    frame4744Props: frame47443Data,
    heading4Props: heading46Data,
    navigationActionProps: navigationAction12Data,
};

const menuLogo17Data = {
    className: "menu-logo-16",
};

const aTOMSICON2019close36Data = {
    className: "atomsicon2019close-11-1",
};

const mOLECULESFORMSEARCH17Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close36Data,
};

const aTOMSICON2019notification16Data = {
    className: "atomsicon2019notification-15",
};

const aTOMSICON2019chatCopy17Data = {
    className: "atomsicon2019chat-copy-16",
};

const globalHeader216Data = {
    className: "global-header-71",
    aTOMSICON2019closeProps: menuLogo17Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH17Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification16Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy17Data,
};

const globalHeader415Data = {
    globalHeader2Props: globalHeader216Data,
};

const aTOMSICON2019close37Data = {
    className: "atomsicon2019close-11",
};

const frame1836Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close37Data,
};

const columnHeader132Data = {
    children: <React.Fragment>Error/<br />Warnings</React.Fragment>,
};

const columnHeader222Data = {
    children: "Latitude",
};

const columnHeader133Data = {
    children: "Longtitude",
    className: "column-header-42-2",
};

const columnHeader134Data = {
    children: "SR Name",
    className: "column-header-42-3",
};

const columnHeader223Data = {
    children: "PS Name",
};

const columnHeader135Data = {
    children: "SR Radius",
    className: "column-header-42-4",
};

const columnHeader136Data = {
    children: "Center Line",
    className: "column-header-42",
};

const columnHeader137Data = {
    children: "Sector Count",
};

const columnHeader138Data = {
    children: "No. of RRH’s",
};

const emptyTable1Data = {
    frame18Props: frame1836Data,
    columnHeader11Props: columnHeader132Data,
    columnHeader221Props: columnHeader222Data,
    columnHeader12Props: columnHeader133Data,
    columnHeader13Props: columnHeader134Data,
    columnHeader222Props: columnHeader223Data,
    columnHeader14Props: columnHeader135Data,
    columnHeader15Props: columnHeader136Data,
    columnHeader16Props: columnHeader137Data,
    columnHeader17Props: columnHeader138Data,
};

const navigationAction13Data = {
    className: "navigation-action-12",
};

const templateCreateBulkProjects31Data = {
    globalHeaderProps: globalHeader415Data,
    emptyTableProps: emptyTable1Data,
    navigationActionProps: navigationAction13Data,
};

const userInteraction2Data = {
    className: "user-interaction-3",
};

const cBPM03Data = {
    templateCreateBulkProjects3Props: templateCreateBulkProjects31Data,
    userInteractionProps: userInteraction2Data,
};

const menuLogo18Data = {
    className: "",
};

const aTOMSICON2019close38Data = {
    className: "atomsicon2019close-12-1",
};

const mOLECULESFORMSEARCH18Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close38Data,
};

const aTOMSICON2019notification17Data = {
    className: "atomsicon2019notification-16",
};

const aTOMSICON2019chatCopy18Data = {
    className: "atomsicon2019chat-copy-17",
};

const globalHeader217Data = {
    className: "global-header-72",
    aTOMSICON2019closeProps: menuLogo18Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH18Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification17Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy18Data,
};

const globalHeader416Data = {
    globalHeader2Props: globalHeader217Data,
};

const heading47Data = {
    className: "heading-27",
};

const localSelectSolutionType32Data = {
    heading4Props: heading47Data,
};

const group3Data = {
    className: "",
};

const iconWithLabel42Data = {
    className: "",
    groupProps: group3Data,
};

const localCardsValidationStatus82Data = {
    iconWithLabel4Props: iconWithLabel42Data,
};

const aTOMSICON2019close39Data = {
    className: "atomsicon2019close-12",
};

const frame1837Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close39Data,
};

const searchInput6Data = {
    frame183Props: frame1837Data,
};

const icon6Data = {
    className: "icon-60",
};

const setting2Data = {
    frame18Props: searchInput6Data,
    frame18Props2: icon6Data,
};

const actionBar22Data = {
    settingProps: setting2Data,
};

const columnHeader23Data = {
    children: "Latitude",
};

const columnHeader33Data = {
    children: "Longtitude",
};

const columnHeader34Data = {
    children: "SR Name",
    className: "column-header-25",
};

const columnHeader24Data = {
    children: "PS Name",
};

const columnHeader65Data = {
    children: "SR Radius (miles)",
};

const columnHeader66Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-34-2",
};

const columnHeader67Data = {
    children: "Sector Count",
};

const columnHeader68Data = {
    children: "No. of RRH’s",
    className: "column-header-34",
};

const rowData112Data = {
    columnHeader21Props: columnHeader23Data,
    columnHeader31Props: columnHeader33Data,
    columnHeader32Props: columnHeader34Data,
    columnHeader22Props: columnHeader24Data,
    columnHeader61Props: columnHeader65Data,
    columnHeader62Props: columnHeader66Data,
    columnHeader63Props: columnHeader67Data,
    columnHeader64Props: columnHeader68Data,
};

const tableHeader2Data = {
    rowDataProps: rowData112Data,
};

const statusIconSmall11Data = {
    className: "status-icon-small-1-1",
};

const cell01Text79Data = {
    statusIconSmallProps: statusIconSmall11Data,
};

const cell02Text32Data = {
    children: "47.2042",
};

const cell02Text33Data = {
    children: "-12.9822",
};

const cell02Text34Data = {
    children: "Lorem",
    className: "",
};

const cell02Text35Data = {
    children: "Lorem Ipsum",
};

const cell06Text33Data = {
    children: "1",
};

const cell06Text34Data = {
    children: "12",
};

const cell06Text35Data = {
    children: "3",
};

const cell06Text36Data = {
    children: "5",
};

const rowData229Data = {
    cell01TextProps: cell01Text79Data,
    cell02Text1Props: cell02Text32Data,
    cell02Text2Props: cell02Text33Data,
    cell02Text3Props: cell02Text34Data,
    cell02Text4Props: cell02Text35Data,
    cell06Text1Props: cell06Text33Data,
    cell06Text2Props: cell06Text34Data,
    cell06Text3Props: cell06Text35Data,
    cell06Text4Props: cell06Text36Data,
};

const tableRow28Data = {
    rowData2Props: rowData229Data,
};

const statusIconSmall12Data = {
    className: "status-icon-small-1-2",
};

const cell01Text710Data = {
    statusIconSmallProps: statusIconSmall12Data,
};

const cell02Text36Data = {
    children: "47.2042",
};

const cell02Text37Data = {
    children: "-12.9822",
};

const cell02Text38Data = {
    children: "Lorem",
    className: "",
};

const cell02Text39Data = {
    children: "Lorem Ipsum",
};

const cell06Text37Data = {
    children: "1",
};

const cell06Text38Data = {
    children: "12",
};

const cell06Text39Data = {
    children: "3",
};

const cell06Text40Data = {
    children: "5",
};

const rowData2210Data = {
    cell01TextProps: cell01Text710Data,
    cell02Text1Props: cell02Text36Data,
    cell02Text2Props: cell02Text37Data,
    cell02Text3Props: cell02Text38Data,
    cell02Text4Props: cell02Text39Data,
    cell06Text1Props: cell06Text37Data,
    cell06Text2Props: cell06Text38Data,
    cell06Text3Props: cell06Text39Data,
    cell06Text4Props: cell06Text40Data,
};

const tableRow29Data = {
    rowData2Props: rowData2210Data,
};

const statusIconSmall13Data = {
    className: "status-icon-small-1-3",
};

const cell01Text711Data = {
    statusIconSmallProps: statusIconSmall13Data,
};

const cell02Text40Data = {
    children: "47.2042",
};

const cell02Text41Data = {
    children: "-12.9822",
};

const cell02Text42Data = {
    children: "Lorem",
    className: "",
};

const cell02Text43Data = {
    children: "Lorem Ipsum",
};

const cell06Text41Data = {
    children: "1",
};

const cell06Text42Data = {
    children: "12",
};

const cell06Text43Data = {
    children: "3",
};

const cell06Text44Data = {
    children: "5",
};

const rowData2211Data = {
    cell01TextProps: cell01Text711Data,
    cell02Text1Props: cell02Text40Data,
    cell02Text2Props: cell02Text41Data,
    cell02Text3Props: cell02Text42Data,
    cell02Text4Props: cell02Text43Data,
    cell06Text1Props: cell06Text41Data,
    cell06Text2Props: cell06Text42Data,
    cell06Text3Props: cell06Text43Data,
    cell06Text4Props: cell06Text44Data,
};

const tableRow210Data = {
    rowData2Props: rowData2211Data,
};

const statusIconSmall14Data = {
    className: "status-icon-small-1-4",
};

const cell01Text712Data = {
    statusIconSmallProps: statusIconSmall14Data,
};

const cell02Text44Data = {
    children: "47.2042",
};

const cell02Text45Data = {
    children: "-12.9822",
};

const cell02Text46Data = {
    children: "Lorem",
    className: "",
};

const cell02Text47Data = {
    children: "Lorem Ipsum",
};

const cell06Text45Data = {
    children: "1",
};

const cell06Text46Data = {
    children: "12",
};

const cell06Text47Data = {
    children: "3",
};

const cell06Text48Data = {
    children: "5",
};

const rowData2212Data = {
    cell01TextProps: cell01Text712Data,
    cell02Text1Props: cell02Text44Data,
    cell02Text2Props: cell02Text45Data,
    cell02Text3Props: cell02Text46Data,
    cell02Text4Props: cell02Text47Data,
    cell06Text1Props: cell06Text45Data,
    cell06Text2Props: cell06Text46Data,
    cell06Text3Props: cell06Text47Data,
    cell06Text4Props: cell06Text48Data,
};

const tableRow211Data = {
    rowData2Props: rowData2212Data,
};

const statusIconSmall15Data = {
    className: "status-icon-small-1-5",
};

const cell01Text713Data = {
    statusIconSmallProps: statusIconSmall15Data,
};

const cell02Text48Data = {
    children: "47.2042",
};

const cell02Text49Data = {
    children: "-12.9822",
};

const cell02Text50Data = {
    children: "Lorem",
    className: "",
};

const cell02Text51Data = {
    children: "Lorem Ipsum",
};

const cell06Text49Data = {
    children: "1",
};

const cell06Text50Data = {
    children: "12",
};

const cell06Text51Data = {
    children: "3",
};

const cell06Text52Data = {
    children: "5",
};

const rowData2213Data = {
    cell01TextProps: cell01Text713Data,
    cell02Text1Props: cell02Text48Data,
    cell02Text2Props: cell02Text49Data,
    cell02Text3Props: cell02Text50Data,
    cell02Text4Props: cell02Text51Data,
    cell06Text1Props: cell06Text49Data,
    cell06Text2Props: cell06Text50Data,
    cell06Text3Props: cell06Text51Data,
    cell06Text4Props: cell06Text52Data,
};

const tableRow212Data = {
    rowData2Props: rowData2213Data,
};

const group4Data = {
    className: "group-126",
};

const cell01Text211Data = {
    label: "01",
    groupProps: group4Data,
};

const cell02Text52Data = {
    children: "47.2042",
};

const cell02Text53Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON2Data = {
    className: "",
};

const cell02Text54Data = {
    children: "Lorem Ipsum",
};

const cell06Text53Data = {
    children: "1",
};

const cell06Text54Data = {
    children: "12",
};

const cell06Text55Data = {
    children: "3",
};

const cell06Text56Data = {
    children: "5",
};

const rowData32Data = {
    cell01Text2Props: cell01Text211Data,
    cell02Text1Props: cell02Text52Data,
    cell02Text2Props: cell02Text53Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON2Data,
    cell02Text3Props: cell02Text54Data,
    cell06Text1Props: cell06Text53Data,
    cell06Text2Props: cell06Text54Data,
    cell06Text3Props: cell06Text55Data,
    cell06Text4Props: cell06Text56Data,
};

const tableRow72Data = {
    rowData3Props: rowData32Data,
};

const statusIconSmall16Data = {
    className: "status-icon-small-1-6",
};

const cell01Text714Data = {
    statusIconSmallProps: statusIconSmall16Data,
};

const cell02Text55Data = {
    children: "47.2042",
};

const cell02Text56Data = {
    children: "-12.9822",
};

const cell02Text57Data = {
    children: "Lorem",
    className: "",
};

const cell02Text58Data = {
    children: "Lorem Ipsum",
};

const cell06Text57Data = {
    children: "1",
};

const cell06Text58Data = {
    children: "12",
};

const cell06Text59Data = {
    children: "3",
};

const cell06Text60Data = {
    children: "5",
};

const rowData2214Data = {
    cell01TextProps: cell01Text714Data,
    cell02Text1Props: cell02Text55Data,
    cell02Text2Props: cell02Text56Data,
    cell02Text3Props: cell02Text57Data,
    cell02Text4Props: cell02Text58Data,
    cell06Text1Props: cell06Text57Data,
    cell06Text2Props: cell06Text58Data,
    cell06Text3Props: cell06Text59Data,
    cell06Text4Props: cell06Text60Data,
};

const tableRow213Data = {
    rowData2Props: rowData2214Data,
};

const statusIconSmall17Data = {
    className: "status-icon-small-1",
};

const cell01Text715Data = {
    statusIconSmallProps: statusIconSmall17Data,
};

const cell02Text59Data = {
    children: "47.2042",
};

const cell02Text60Data = {
    children: "12.9822",
};

const cell02Text61Data = {
    children: "Lorem",
    className: "",
};

const cell02Text62Data = {
    children: "Lorem Ipsum",
};

const cell06Text61Data = {
    children: "1",
};

const cell06Text62Data = {
    children: "12",
};

const cell06Text63Data = {
    children: "3",
};

const cell06Text64Data = {
    children: "5",
};

const rowData2215Data = {
    cell01TextProps: cell01Text715Data,
    cell02Text1Props: cell02Text59Data,
    cell02Text2Props: cell02Text60Data,
    cell02Text3Props: cell02Text61Data,
    cell02Text4Props: cell02Text62Data,
    cell06Text1Props: cell06Text61Data,
    cell06Text2Props: cell06Text62Data,
    cell06Text3Props: cell06Text63Data,
    cell06Text4Props: cell06Text64Data,
};

const tableRow214Data = {
    rowData2Props: rowData2215Data,
};

const showPage5Data = {
    placeholderText: "10",
};

const pageNumber49Data = {
    children: "2",
};

const pageNumber410Data = {
    children: "3",
};

const pageNumber411Data = {
    children: "4",
};

const pageNumber412Data = {
    children: "5",
};

const pageNumber25Data = {
    children: "6",
};

const pageNumber413Data = {
    children: "7",
};

const pageNumber26Data = {
    children: "8",
};

const pageNumber27Data = {
    children: "9",
};

const pagination2Data = {
    pageNumber1Props: showPage5Data,
    pageNumber1Props2: pageNumber49Data,
    pageNumber2Props: pageNumber410Data,
    pageNumber3Props: pageNumber411Data,
    pageNumber4Props: pageNumber412Data,
    pageNumber21Props: pageNumber25Data,
    pageNumber5Props: pageNumber413Data,
    pageNumber22Props: pageNumber26Data,
    pageNumber23Props: pageNumber27Data,
};

const navigationAction14Data = {
    className: "navigation-action-13",
};

const cBPM13Data = {
    accordionMargin: "/img/accordion-margin@2x.png",
    checkboxMargin: "/img/accordion-margin@2x.png",
    placeholderText: "Select",
    click2: "CLICK",
    globalHeader4Props: globalHeader416Data,
    localSelectSolutionType3Props: localSelectSolutionType32Data,
    localCardsValidationStatus8Props: localCardsValidationStatus82Data,
    actionBar2Props: actionBar22Data,
    tableHeaderProps: tableHeader2Data,
    tableRow21Props: tableRow28Data,
    tableRow22Props: tableRow29Data,
    tableRow23Props: tableRow210Data,
    tableRow24Props: tableRow211Data,
    tableRow25Props: tableRow212Data,
    tableRow7Props: tableRow72Data,
    tableRow26Props: tableRow213Data,
    tableRow27Props: tableRow214Data,
    paginationProps: pagination2Data,
    navigationActionProps: navigationAction14Data,
};

const menuLogo19Data = {
    className: "menu-logo-18",
};

const aTOMSICON2019close40Data = {
    className: "atomsicon2019close-13-1",
};

const mOLECULESFORMSEARCH19Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close40Data,
};

const aTOMSICON2019notification18Data = {
    className: "atomsicon2019notification-17",
};

const aTOMSICON2019chatCopy19Data = {
    className: "atomsicon2019chat-copy-18",
};

const globalHeader218Data = {
    className: "global-header-73",
    aTOMSICON2019closeProps: menuLogo19Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH19Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification18Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy19Data,
};

const globalHeader417Data = {
    globalHeader2Props: globalHeader218Data,
};

const aTOMSICON2019close41Data = {
    className: "atomsicon2019close-13",
};

const frame1838Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close41Data,
};

const columnHeader139Data = {
    children: <React.Fragment>Error/<br />Warnings</React.Fragment>,
};

const columnHeader224Data = {
    children: "Latitude",
};

const columnHeader1310Data = {
    children: "Longtitude",
    className: "column-header-43-2",
};

const columnHeader1311Data = {
    children: "SR Name",
    className: "column-header-43-3",
};

const columnHeader225Data = {
    children: "PS Name",
};

const columnHeader1312Data = {
    children: "SR Radius",
    className: "column-header-43-4",
};

const columnHeader1313Data = {
    children: "Center Line",
    className: "column-header-43",
};

const columnHeader1314Data = {
    children: "Sector Count",
};

const columnHeader1315Data = {
    children: "No. of RRH’s",
};

const emptyTable2Data = {
    frame18Props: frame1838Data,
    columnHeader11Props: columnHeader139Data,
    columnHeader221Props: columnHeader224Data,
    columnHeader12Props: columnHeader1310Data,
    columnHeader13Props: columnHeader1311Data,
    columnHeader222Props: columnHeader225Data,
    columnHeader14Props: columnHeader1312Data,
    columnHeader15Props: columnHeader1313Data,
    columnHeader16Props: columnHeader1314Data,
    columnHeader17Props: columnHeader1315Data,
};

const navigationAction15Data = {
    className: "navigation-action-14",
};

const templateCreateBulkProjects32Data = {
    globalHeaderProps: globalHeader417Data,
    emptyTableProps: emptyTable2Data,
    navigationActionProps: navigationAction15Data,
};

const group3915Data = {
    className: "group-215",
};

const cBPM04Data = {
    label1: "Upload Solution",
    placeholderText: "Upload document",
    text1: "Upload",
    text2: "Download Bulk Edit Template",
    label2: "Only CSV files are allowed maximum XXX solutions are allowed at one time",
    templateCreateBulkProjects3Props: templateCreateBulkProjects32Data,
    templateCreateBulkProjects3Props2: group3915Data,
};

const menuLogo20Data = {
    className: "menu-logo-19",
};

const aTOMSICON2019close42Data = {
    className: "atomsicon2019close-14-1",
};

const mOLECULESFORMSEARCH20Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close42Data,
};

const aTOMSICON2019notification19Data = {
    className: "atomsicon2019notification-18",
};

const aTOMSICON2019chatCopy20Data = {
    className: "atomsicon2019chat-copy-19",
};

const globalHeader219Data = {
    className: "global-header-74",
    aTOMSICON2019closeProps: menuLogo20Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH20Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification19Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy20Data,
};

const globalHeader418Data = {
    globalHeader2Props: globalHeader219Data,
};

const heading48Data = {
    className: "heading-28",
};

const localSelectSolutionType322Data = {
    headingProps: heading48Data,
};

const aTOMSICON2019close43Data = {
    className: "atomsicon2019close-14",
};

const frame1839Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close43Data,
};

const columnHeader1316Data = {
    children: <React.Fragment>Error/<br />Warnings</React.Fragment>,
};

const columnHeader226Data = {
    children: "Latitude",
};

const columnHeader1317Data = {
    children: "Longtitude",
    className: "column-header-44-2",
};

const columnHeader1318Data = {
    children: "SR Name",
    className: "column-header-44-3",
};

const columnHeader227Data = {
    children: "PS Name",
};

const columnHeader1319Data = {
    children: "SR Radius",
    className: "column-header-44-4",
};

const columnHeader1320Data = {
    children: "Center Line",
    className: "column-header-44",
};

const columnHeader1321Data = {
    children: "Sector Count",
};

const columnHeader1322Data = {
    children: "No. of RRH’s",
};

const emptyTable3Data = {
    frame18Props: frame1839Data,
    columnHeader11Props: columnHeader1316Data,
    columnHeader221Props: columnHeader226Data,
    columnHeader12Props: columnHeader1317Data,
    columnHeader13Props: columnHeader1318Data,
    columnHeader222Props: columnHeader227Data,
    columnHeader14Props: columnHeader1319Data,
    columnHeader15Props: columnHeader1320Data,
    columnHeader16Props: columnHeader1321Data,
    columnHeader17Props: columnHeader1322Data,
};

const navigationAction16Data = {
    className: "navigation-action-15",
};

const templateCreateBulkProjects322Data = {
    globalHeaderProps: globalHeader418Data,
    localSelectSolutionType32Props: localSelectSolutionType322Data,
    emptyTableProps: emptyTable3Data,
    navigationActionProps: navigationAction16Data,
};

const modalItems22Data = {
    className: "modal-items-4",
};

const cBPM06Data = {
    label: "Upload Solution",
    placeholderText: "Upload document",
    text1: "Upload",
    text2: "Download Bulk Edit Template",
    uploadStatus: "Upload Status",
    percent: "100%",
    templateCreateBulkProjects32Props: templateCreateBulkProjects322Data,
    modalItems2Props: modalItems22Data,
};

const menuLogo21Data = {
    className: "menu-logo-20",
};

const aTOMSICON2019close44Data = {
    className: "atomsicon2019close-15-1",
};

const mOLECULESFORMSEARCH21Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close44Data,
};

const aTOMSICON2019notification20Data = {
    className: "atomsicon2019notification-19",
};

const aTOMSICON2019chatCopy21Data = {
    className: "atomsicon2019chat-copy-20",
};

const globalHeader220Data = {
    className: "global-header-75",
    aTOMSICON2019closeProps: menuLogo21Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH21Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification20Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy21Data,
};

const globalHeader419Data = {
    globalHeader2Props: globalHeader220Data,
};

const heading49Data = {
    className: "heading-29",
};

const localSelectSolutionType323Data = {
    headingProps: heading49Data,
};

const aTOMSICON2019close45Data = {
    className: "atomsicon2019close-15",
};

const frame18310Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close45Data,
};

const columnHeader1323Data = {
    children: <React.Fragment>Error/<br />Warnings</React.Fragment>,
};

const columnHeader228Data = {
    children: "Latitude",
};

const columnHeader1324Data = {
    children: "Longtitude",
    className: "column-header-45-2",
};

const columnHeader1325Data = {
    children: "SR Name",
    className: "column-header-45-3",
};

const columnHeader229Data = {
    children: "PS Name",
};

const columnHeader1326Data = {
    children: "SR Radius",
    className: "column-header-45-4",
};

const columnHeader1327Data = {
    children: "Center Line",
    className: "column-header-45",
};

const columnHeader1328Data = {
    children: "Sector Count",
};

const columnHeader1329Data = {
    children: "No. of RRH’s",
};

const emptyTable4Data = {
    frame18Props: frame18310Data,
    columnHeader11Props: columnHeader1323Data,
    columnHeader221Props: columnHeader228Data,
    columnHeader12Props: columnHeader1324Data,
    columnHeader13Props: columnHeader1325Data,
    columnHeader222Props: columnHeader229Data,
    columnHeader14Props: columnHeader1326Data,
    columnHeader15Props: columnHeader1327Data,
    columnHeader16Props: columnHeader1328Data,
    columnHeader17Props: columnHeader1329Data,
};

const navigationAction17Data = {
    className: "navigation-action-16",
};

const templateCreateBulkProjects323Data = {
    globalHeaderProps: globalHeader419Data,
    localSelectSolutionType32Props: localSelectSolutionType323Data,
    emptyTableProps: emptyTable4Data,
    navigationActionProps: navigationAction17Data,
};

const modalItems23Data = {
    className: "modal-items-5",
};

const cBPM05Data = {
    label: "Upload Solution",
    placeholderText: "Upload document",
    text1: "Upload",
    text2: "Download Bulk Edit Template",
    uploadStatus: "Upload Status",
    percent: "25%",
    templateCreateBulkProjects32Props: templateCreateBulkProjects323Data,
    modalItems2Props: modalItems23Data,
};

const menuLogo22Data = {
    className: "",
};

const aTOMSICON2019close46Data = {
    className: "",
};

const mOLECULESFORMSEARCH22Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close46Data,
};

const aTOMSICON2019notification21Data = {
    className: "atomsicon2019notification-20",
};

const aTOMSICON2019chatCopy22Data = {
    className: "",
};

const globalHeader221Data = {
    className: "global-header-76",
    aTOMSICON2019closeProps: menuLogo22Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH22Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification21Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy22Data,
};

const globalHeader420Data = {
    globalHeader2Props: globalHeader221Data,
};

const heading410Data = {
    className: "heading-30",
};

const localSelectSolutionType33Data = {
    heading4Props: heading410Data,
};

const group5Data = {
    className: "group-127",
};

const iconWithLabel43Data = {
    className: "icon-with-label-38",
    groupProps: group5Data,
};

const localCardsValidationStatus83Data = {
    iconWithLabel4Props: iconWithLabel43Data,
};

const aTOMSICON2019close47Data = {
    className: "atomsicon2019close-16",
};

const frame18311Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close47Data,
};

const searchInput7Data = {
    frame183Props: frame18311Data,
};

const icon7Data = {
    className: "icon-61",
};

const setting3Data = {
    frame18Props: searchInput7Data,
    frame18Props2: icon7Data,
};

const actionBar23Data = {
    settingProps: setting3Data,
};

const columnHeader25Data = {
    children: "Latitude",
};

const columnHeader35Data = {
    children: "Longtitude",
};

const columnHeader36Data = {
    children: "SR Name",
    className: "column-header-26",
};

const columnHeader26Data = {
    children: "PS Name",
};

const columnHeader69Data = {
    children: "SR Radius (miles)",
};

const columnHeader610Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-35-2",
};

const columnHeader611Data = {
    children: "Sector Count",
};

const columnHeader612Data = {
    children: "No. of RRH’s",
    className: "column-header-35",
};

const rowData113Data = {
    columnHeader21Props: columnHeader25Data,
    columnHeader31Props: columnHeader35Data,
    columnHeader32Props: columnHeader36Data,
    columnHeader22Props: columnHeader26Data,
    columnHeader61Props: columnHeader69Data,
    columnHeader62Props: columnHeader610Data,
    columnHeader63Props: columnHeader611Data,
    columnHeader64Props: columnHeader612Data,
};

const tableHeader3Data = {
    rowDataProps: rowData113Data,
};

const statusIconSmall19Data = {
    className: "status-icon-small-2-1",
};

const cell01Text716Data = {
    statusIconSmallProps: statusIconSmall19Data,
};

const cell02Text63Data = {
    children: "47.2042",
};

const cell02Text64Data = {
    children: "-12.9822",
};

const cell02Text65Data = {
    children: "Lorem",
    className: "cell-0-5",
};

const cell02Text66Data = {
    children: "Lorem Ipsum",
};

const cell06Text65Data = {
    children: "1",
};

const cell06Text66Data = {
    children: "12",
};

const cell06Text67Data = {
    children: "3",
};

const cell06Text68Data = {
    children: "5",
};

const rowData2216Data = {
    cell01TextProps: cell01Text716Data,
    cell02Text1Props: cell02Text63Data,
    cell02Text2Props: cell02Text64Data,
    cell02Text3Props: cell02Text65Data,
    cell02Text4Props: cell02Text66Data,
    cell06Text1Props: cell06Text65Data,
    cell06Text2Props: cell06Text66Data,
    cell06Text3Props: cell06Text67Data,
    cell06Text4Props: cell06Text68Data,
};

const tableRow215Data = {
    rowData2Props: rowData2216Data,
};

const statusIconSmall20Data = {
    className: "status-icon-small-2-2",
};

const cell01Text717Data = {
    statusIconSmallProps: statusIconSmall20Data,
};

const cell02Text67Data = {
    children: "47.2042",
};

const cell02Text68Data = {
    children: "-12.9822",
};

const cell02Text69Data = {
    children: "Lorem",
    className: "",
};

const cell02Text70Data = {
    children: "Lorem Ipsum",
};

const cell06Text69Data = {
    children: "1",
};

const cell06Text70Data = {
    children: "12",
};

const cell06Text71Data = {
    children: "3",
};

const cell06Text72Data = {
    children: "5",
};

const rowData2217Data = {
    cell01TextProps: cell01Text717Data,
    cell02Text1Props: cell02Text67Data,
    cell02Text2Props: cell02Text68Data,
    cell02Text3Props: cell02Text69Data,
    cell02Text4Props: cell02Text70Data,
    cell06Text1Props: cell06Text69Data,
    cell06Text2Props: cell06Text70Data,
    cell06Text3Props: cell06Text71Data,
    cell06Text4Props: cell06Text72Data,
};

const tableRow216Data = {
    rowData2Props: rowData2217Data,
};

const statusIconSmall21Data = {
    className: "status-icon-small-2-3",
};

const cell01Text718Data = {
    statusIconSmallProps: statusIconSmall21Data,
};

const cell02Text71Data = {
    children: "47.2042",
};

const cell02Text72Data = {
    children: "-12.9822",
};

const cell02Text73Data = {
    children: "Lorem",
    className: "",
};

const cell02Text74Data = {
    children: "Lorem Ipsum",
};

const cell06Text73Data = {
    children: "1",
};

const cell06Text74Data = {
    children: "12",
};

const cell06Text75Data = {
    children: "3",
};

const cell06Text76Data = {
    children: "5",
};

const rowData2218Data = {
    cell01TextProps: cell01Text718Data,
    cell02Text1Props: cell02Text71Data,
    cell02Text2Props: cell02Text72Data,
    cell02Text3Props: cell02Text73Data,
    cell02Text4Props: cell02Text74Data,
    cell06Text1Props: cell06Text73Data,
    cell06Text2Props: cell06Text74Data,
    cell06Text3Props: cell06Text75Data,
    cell06Text4Props: cell06Text76Data,
};

const tableRow217Data = {
    rowData2Props: rowData2218Data,
};

const statusIconSmall24Data = {
    className: "status-icon-small-2-4",
};

const cell01Text719Data = {
    statusIconSmallProps: statusIconSmall24Data,
};

const cell02Text75Data = {
    children: "47.2042",
};

const cell02Text76Data = {
    children: "-12.9822",
};

const cell02Text77Data = {
    children: "Lorem",
    className: "",
};

const cell02Text78Data = {
    children: "Lorem Ipsum",
};

const cell06Text77Data = {
    children: "1",
};

const cell06Text78Data = {
    children: "12",
};

const cell06Text79Data = {
    children: "3",
};

const cell06Text80Data = {
    children: "5",
};

const rowData2219Data = {
    cell01TextProps: cell01Text719Data,
    cell02Text1Props: cell02Text75Data,
    cell02Text2Props: cell02Text76Data,
    cell02Text3Props: cell02Text77Data,
    cell02Text4Props: cell02Text78Data,
    cell06Text1Props: cell06Text77Data,
    cell06Text2Props: cell06Text78Data,
    cell06Text3Props: cell06Text79Data,
    cell06Text4Props: cell06Text80Data,
};

const tableRow218Data = {
    rowData2Props: rowData2219Data,
};

const statusIconSmall25Data = {
    className: "status-icon-small-2-5",
};

const cell01Text720Data = {
    statusIconSmallProps: statusIconSmall25Data,
};

const cell02Text79Data = {
    children: "47.2042",
};

const cell02Text80Data = {
    children: "-12.9822",
};

const cell02Text81Data = {
    children: "Lorem",
    className: "",
};

const cell02Text82Data = {
    children: "Lorem Ipsum",
};

const cell06Text81Data = {
    children: "1",
};

const cell06Text82Data = {
    children: "12",
};

const cell06Text83Data = {
    children: "3",
};

const cell06Text84Data = {
    children: "5",
};

const rowData2220Data = {
    cell01TextProps: cell01Text720Data,
    cell02Text1Props: cell02Text79Data,
    cell02Text2Props: cell02Text80Data,
    cell02Text3Props: cell02Text81Data,
    cell02Text4Props: cell02Text82Data,
    cell06Text1Props: cell06Text81Data,
    cell06Text2Props: cell06Text82Data,
    cell06Text3Props: cell06Text83Data,
    cell06Text4Props: cell06Text84Data,
};

const tableRow219Data = {
    rowData2Props: rowData2220Data,
};

const statusIconSmall26Data = {
    className: "status-icon-small-2-6",
};

const cell01Text721Data = {
    statusIconSmallProps: statusIconSmall26Data,
};

const cell02Text83Data = {
    children: "47.2042",
};

const cell02Text84Data = {
    children: "-12.9822",
};

const cell02Text85Data = {
    children: "Lorem",
    className: "",
};

const cell02Text86Data = {
    children: "Lorem Ipsum",
};

const cell06Text85Data = {
    children: "1",
};

const cell06Text86Data = {
    children: "12",
};

const cell06Text87Data = {
    children: "3",
};

const cell06Text88Data = {
    children: "5",
};

const rowData2221Data = {
    cell01TextProps: cell01Text721Data,
    cell02Text1Props: cell02Text83Data,
    cell02Text2Props: cell02Text84Data,
    cell02Text3Props: cell02Text85Data,
    cell02Text4Props: cell02Text86Data,
    cell06Text1Props: cell06Text85Data,
    cell06Text2Props: cell06Text86Data,
    cell06Text3Props: cell06Text87Data,
    cell06Text4Props: cell06Text88Data,
};

const tableRow220Data = {
    rowData2Props: rowData2221Data,
};

const group7Data = {
    className: "group-128",
};

const cell01Text212Data = {
    label: "01",
    groupProps: group7Data,
};

const cell02Text87Data = {
    children: "47.2042",
};

const cell02Text88Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON3Data = {
    className: "",
};

const cell02Text89Data = {
    children: "Lorem Ipsum",
};

const cell06Text89Data = {
    children: "1",
};

const cell06Text90Data = {
    children: "12",
};

const cell06Text91Data = {
    children: "3",
};

const cell06Text92Data = {
    children: "5",
};

const rowData33Data = {
    cell01Text2Props: cell01Text212Data,
    cell02Text1Props: cell02Text87Data,
    cell02Text2Props: cell02Text88Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON3Data,
    cell02Text3Props: cell02Text89Data,
    cell06Text1Props: cell06Text89Data,
    cell06Text2Props: cell06Text90Data,
    cell06Text3Props: cell06Text91Data,
    cell06Text4Props: cell06Text92Data,
};

const tableRow73Data = {
    rowData3Props: rowData33Data,
};

const statusIconSmall27Data = {
    className: "status-icon-small-2-7",
};

const cell01Text722Data = {
    statusIconSmallProps: statusIconSmall27Data,
};

const cell02Text90Data = {
    children: "47.2042",
};

const cell02Text91Data = {
    children: "-12.9822",
};

const cell02Text92Data = {
    children: "Lorem",
    className: "",
};

const cell02Text93Data = {
    children: "Lorem Ipsum",
};

const cell06Text93Data = {
    children: "1",
};

const cell06Text94Data = {
    children: "12",
};

const cell06Text95Data = {
    children: "3",
};

const cell06Text96Data = {
    children: "5",
};

const rowData2222Data = {
    cell01TextProps: cell01Text722Data,
    cell02Text1Props: cell02Text90Data,
    cell02Text2Props: cell02Text91Data,
    cell02Text3Props: cell02Text92Data,
    cell02Text4Props: cell02Text93Data,
    cell06Text1Props: cell06Text93Data,
    cell06Text2Props: cell06Text94Data,
    cell06Text3Props: cell06Text95Data,
    cell06Text4Props: cell06Text96Data,
};

const tableRow221Data = {
    rowData2Props: rowData2222Data,
};

const statusIconSmall28Data = {
    className: "status-icon-small-2",
};

const cell01Text723Data = {
    statusIconSmallProps: statusIconSmall28Data,
};

const cell02Text94Data = {
    children: "47.2042",
};

const cell02Text95Data = {
    children: "12.9822",
};

const cell02Text96Data = {
    children: "Lorem",
    className: "",
};

const cell02Text97Data = {
    children: "Lorem Ipsum",
};

const cell06Text97Data = {
    children: "1",
};

const cell06Text98Data = {
    children: "12",
};

const cell06Text99Data = {
    children: "3",
};

const cell06Text100Data = {
    children: "5",
};

const rowData2223Data = {
    cell01TextProps: cell01Text723Data,
    cell02Text1Props: cell02Text94Data,
    cell02Text2Props: cell02Text95Data,
    cell02Text3Props: cell02Text96Data,
    cell02Text4Props: cell02Text97Data,
    cell06Text1Props: cell06Text97Data,
    cell06Text2Props: cell06Text98Data,
    cell06Text3Props: cell06Text99Data,
    cell06Text4Props: cell06Text100Data,
};

const tableRow222Data = {
    rowData2Props: rowData2223Data,
};

const showPage6Data = {
    placeholderText: "10",
};

const pageNumber414Data = {
    children: "2",
};

const pageNumber415Data = {
    children: "3",
};

const pageNumber416Data = {
    children: "4",
};

const pageNumber417Data = {
    children: "5",
};

const pageNumber28Data = {
    children: "6",
};

const pageNumber418Data = {
    children: "7",
};

const pageNumber29Data = {
    children: "8",
};

const pageNumber210Data = {
    children: "9",
};

const pagination3Data = {
    className: "pagination-5",
    pageNumber1Props: showPage6Data,
    pageNumber1Props2: pageNumber414Data,
    pageNumber2Props: pageNumber415Data,
    pageNumber3Props: pageNumber416Data,
    pageNumber4Props: pageNumber417Data,
    pageNumber21Props: pageNumber28Data,
    pageNumber5Props: pageNumber418Data,
    pageNumber22Props: pageNumber29Data,
    pageNumber23Props: pageNumber210Data,
};

const navigationAction18Data = {
    className: "navigation-action-17",
};

const templateCreateBulkProjectsNewData = {
    globalHeaderProps: globalHeader420Data,
    globalHeaderProps2: localSelectSolutionType33Data,
    localCardsValidationStatus8Props: localCardsValidationStatus83Data,
    actionBar2Props: actionBar23Data,
    tableHeaderProps: tableHeader3Data,
    tableRow21Props: tableRow215Data,
    tableRow22Props: tableRow216Data,
    tableRow23Props: tableRow217Data,
    tableRow24Props: tableRow218Data,
    tableRow25Props: tableRow219Data,
    tableRow26Props: tableRow220Data,
    tableRow7Props: tableRow73Data,
    tableRow27Props: tableRow221Data,
    tableRow28Props: tableRow222Data,
    paginationProps: pagination3Data,
    navigationActionProps: navigationAction18Data,
};

const userInteraction3Data = {
    className: "user-interaction-4",
};

const cBPM15Data = {
    templateCreateBulkProjectsNewProps: templateCreateBulkProjectsNewData,
    userInteractionProps: userInteraction3Data,
};

const menuLogo23Data = {
    className: "menu-logo-22",
};

const aTOMSICON2019close48Data = {
    className: "atomsicon2019close-17-1",
};

const mOLECULESFORMSEARCH23Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close48Data,
};

const aTOMSICON2019notification22Data = {
    className: "atomsicon2019notification-21",
};

const aTOMSICON2019chatCopy23Data = {
    className: "atomsicon2019chat-copy-22",
};

const globalHeader222Data = {
    className: "global-header-77",
    aTOMSICON2019closeProps: menuLogo23Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH23Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification22Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy23Data,
};

const globalHeader421Data = {
    globalHeader2Props: globalHeader222Data,
};

const heading411Data = {
    className: "heading-31",
};

const localSelectSolutionType34Data = {
    heading4Props: heading411Data,
};

const group8Data = {
    className: "group-129",
};

const iconWithLabel44Data = {
    groupProps: group8Data,
};

const localCardsValidationStatus822Data = {
    iconWithLabel4Props: iconWithLabel44Data,
};

const aTOMSICON2019close49Data = {
    className: "atomsicon2019close-17",
};

const frame18312Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close49Data,
};

const searchInput8Data = {
    frame183Props: frame18312Data,
};

const icon8Data = {
    className: "icon-62",
};

const setting4Data = {
    frame18Props: searchInput8Data,
    frame18Props2: icon8Data,
};

const actionBar24Data = {
    settingProps: setting4Data,
};

const columnHeader27Data = {
    children: "Latitude",
};

const columnHeader37Data = {
    children: "Longtitude",
};

const columnHeader38Data = {
    children: "SR Name",
    className: "column-header-27",
};

const columnHeader28Data = {
    children: "PS Name",
};

const columnHeader613Data = {
    children: "SR Radius (miles)",
};

const columnHeader614Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-36-2",
};

const columnHeader615Data = {
    children: "Sector Count",
};

const columnHeader616Data = {
    children: "No. of RRH’s",
    className: "column-header-36",
};

const rowData114Data = {
    columnHeader21Props: columnHeader27Data,
    columnHeader31Props: columnHeader37Data,
    columnHeader32Props: columnHeader38Data,
    columnHeader22Props: columnHeader28Data,
    columnHeader61Props: columnHeader613Data,
    columnHeader62Props: columnHeader614Data,
    columnHeader63Props: columnHeader615Data,
    columnHeader64Props: columnHeader616Data,
};

const tableHeader4Data = {
    rowDataProps: rowData114Data,
};

const statusIconSmall211Data = {
    className: "status-icon-small-25-1",
};

const error1Data = {
    label: "130",
    statusIconSmall2Props: statusIconSmall211Data,
};

const group9Data = {
    className: "group-121",
};

const warning1Data = {
    label: "97",
    groupProps: group9Data,
};

const cell01Text37Data = {
    errorProps: error1Data,
    warningProps: warning1Data,
};

const cell02Text98Data = {
    children: "47.2042",
};

const cell02Text99Data = {
    children: "Lorem",
    className: "cell-0-6",
};

const cell02Text100Data = {
    children: "Lorem Ipsum",
};

const cell06Text101Data = {
    children: "1",
};

const cell06Text102Data = {
    children: "12",
};

const cell06Text103Data = {
    children: "3",
};

const cell06Text104Data = {
    children: "5",
};

const rowData41Data = {
    cell01Text3Props: cell01Text37Data,
    cell02Text1Props: cell02Text98Data,
    cell02Text2Props: cell02Text99Data,
    cell02Text3Props: cell02Text100Data,
    cell06Text1Props: cell06Text101Data,
    cell06Text2Props: cell06Text102Data,
    cell06Text3Props: cell06Text103Data,
    cell06Text4Props: cell06Text104Data,
};

const tableRow122Data = {
    rowData4Props: rowData41Data,
};

const statusIconSmall212Data = {
    className: "status-icon-small-25-2",
};

const group10Data = {
    className: "group-121",
};

const warning2Data = {
    label: "27",
    groupProps: group10Data,
};

const cell01Text42Data = {
    label: "34",
    statusIconSmall2Props: statusIconSmall212Data,
    warningProps: warning2Data,
};

const cell02Text101Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON4Data = {
    className: "localwarning-icon-18-1",
};

const table31Data = {
    lOCALWARNINGICONProps: lOCALWARNINGICON4Data,
};

const cell06Text105Data = {
    children: "1",
};

const cell06Text106Data = {
    children: "12",
};

const cell06Text107Data = {
    children: "3",
};

const cell06Text108Data = {
    children: "5",
};

const statusIconSmall213Data = {
    className: "status-icon-small-25-3",
};

const error2Data = {
    label: "14",
    statusIconSmall2Props: statusIconSmall213Data,
};

const group11Data = {
    className: "group-121",
};

const warning3Data = {
    label: "23",
    groupProps: group11Data,
};

const cell01Text38Data = {
    errorProps: error2Data,
    warningProps: warning3Data,
};

const cell02Text102Data = {
    children: "-12.9822",
};

const cell02Text103Data = {
    children: "Lorem",
};

const cell02Text104Data = {
    children: "Lorem Ipsum",
};

const cell06Text109Data = {
    children: "1",
};

const cell06Text110Data = {
    children: "12",
};

const cell06Text111Data = {
    children: "3",
};

const cell06Text112Data = {
    children: "5",
};

const rowData61Data = {
    cell01Text3Props: cell01Text38Data,
    cell02Text1Props: cell02Text102Data,
    cell02Text2Props: cell02Text103Data,
    cell02Text3Props: cell02Text104Data,
    cell06Text1Props: cell06Text109Data,
    cell06Text2Props: cell06Text110Data,
    cell06Text3Props: cell06Text111Data,
    cell06Text4Props: cell06Text112Data,
};

const tableRow31Data = {
    rowData6Props: rowData61Data,
};

const statusIconSmall214Data = {
    className: "status-icon-small-25-4",
};

const error3Data = {
    label: "09",
    className: "group-468",
    statusIconSmall2Props: statusIconSmall214Data,
};

const cell01Text52Data = {
    errorProps: error3Data,
};

const cell02Text105Data = {
    children: "47.2042",
};

const cell02Text106Data = {
    children: "Lorem Ipsum",
};

const cell06Text113Data = {
    children: "1",
};

const cell06Text114Data = {
    children: "12",
};

const cell06Text115Data = {
    children: "3",
};

const cell06Text116Data = {
    children: "5",
};

const rowData71Data = {
    cell01Text5Props: cell01Text52Data,
    cell02Text1Props: cell02Text105Data,
    cell02Text2Props: cell02Text106Data,
    cell06Text1Props: cell06Text113Data,
    cell06Text2Props: cell06Text114Data,
    cell06Text3Props: cell06Text115Data,
    cell06Text4Props: cell06Text116Data,
};

const tableRow41Data = {
    rowData7Props: rowData71Data,
};

const statusIconSmall215Data = {
    className: "status-icon-small-25",
};

const error4Data = {
    label: "08",
    className: "group-468",
    statusIconSmall2Props: statusIconSmall215Data,
};

const cell01Text53Data = {
    errorProps: error4Data,
};

const cell02Text107Data = {
    children: "47.2042",
};

const cell02Text108Data = {
    children: "-12.9822",
};

const cell02Text109Data = {
    children: "Lorem",
};

const cell06Text117Data = {
    children: "1",
};

const cell06Text118Data = {
    children: "12",
};

const cell06Text119Data = {
    children: "3",
};

const cell06Text120Data = {
    children: "5",
};

const rowData81Data = {
    cell01Text5Props: cell01Text53Data,
    cell02Text1Props: cell02Text107Data,
    cell02Text2Props: cell02Text108Data,
    cell02Text3Props: cell02Text109Data,
    cell06Text1Props: cell06Text117Data,
    cell06Text2Props: cell06Text118Data,
    cell06Text3Props: cell06Text119Data,
    cell06Text4Props: cell06Text120Data,
};

const tableRow51Data = {
    rowData8Props: rowData81Data,
};

const group12Data = {
    className: "group-122",
};

const cell01Text213Data = {
    label: "03",
    groupProps: group12Data,
};

const cell02Text110Data = {
    children: "47.2042",
};

const cell02Text111Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON5Data = {
    className: "localwarning-icon-18-2",
};

const cell02Text112Data = {
    children: "Lorem Ipsum",
};

const cell06Text121Data = {
    children: "1",
};

const cell06Text122Data = {
    children: "12",
};

const cell06Text123Data = {
    children: "3",
};

const cell06Text124Data = {
    children: "5",
};

const rowData34Data = {
    cell01Text2Props: cell01Text213Data,
    cell02Text1Props: cell02Text110Data,
    cell02Text2Props: cell02Text111Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON5Data,
    cell02Text3Props: cell02Text112Data,
    cell06Text1Props: cell06Text121Data,
    cell06Text2Props: cell06Text122Data,
    cell06Text3Props: cell06Text123Data,
    cell06Text4Props: cell06Text124Data,
};

const tableRow74Data = {
    rowData3Props: rowData34Data,
};

const group13Data = {
    className: "group-122",
};

const cell01Text214Data = {
    label: "01",
    groupProps: group13Data,
};

const cell02Text113Data = {
    children: "47.2042",
};

const cell02Text114Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON6Data = {
    className: "localwarning-icon-18",
};

const cell02Text115Data = {
    children: "Lorem Ipsum",
};

const cell06Text125Data = {
    children: "1",
};

const cell06Text126Data = {
    children: "12",
};

const cell06Text127Data = {
    children: "3",
};

const cell06Text128Data = {
    children: "5",
};

const rowData35Data = {
    cell01Text2Props: cell01Text214Data,
    cell02Text1Props: cell02Text113Data,
    cell02Text2Props: cell02Text114Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON6Data,
    cell02Text3Props: cell02Text115Data,
    cell06Text1Props: cell06Text125Data,
    cell06Text2Props: cell06Text126Data,
    cell06Text3Props: cell06Text127Data,
    cell06Text4Props: cell06Text128Data,
};

const tableRow75Data = {
    rowData3Props: rowData35Data,
};

const statusIconSmall30Data = {
    className: "status-icon-small-3-1",
};

const cell01Text724Data = {
    statusIconSmallProps: statusIconSmall30Data,
};

const cell02Text116Data = {
    children: "47.2042",
};

const cell02Text117Data = {
    children: "-12.9822",
};

const cell02Text118Data = {
    children: "Lorem",
    className: "",
};

const cell02Text119Data = {
    children: "Lorem Ipsum",
};

const cell06Text129Data = {
    children: "1",
};

const cell06Text130Data = {
    children: "12",
};

const cell06Text131Data = {
    children: "3",
};

const cell06Text132Data = {
    children: "5",
};

const rowData2224Data = {
    cell01TextProps: cell01Text724Data,
    cell02Text1Props: cell02Text116Data,
    cell02Text2Props: cell02Text117Data,
    cell02Text3Props: cell02Text118Data,
    cell02Text4Props: cell02Text119Data,
    cell06Text1Props: cell06Text129Data,
    cell06Text2Props: cell06Text130Data,
    cell06Text3Props: cell06Text131Data,
    cell06Text4Props: cell06Text132Data,
};

const tableRow223Data = {
    rowData2Props: rowData2224Data,
};

const statusIconSmall31Data = {
    className: "status-icon-small-3",
};

const cell01Text725Data = {
    statusIconSmallProps: statusIconSmall31Data,
};

const cell02Text120Data = {
    children: "47.2042",
};

const cell02Text121Data = {
    children: "12.9822",
};

const cell02Text122Data = {
    children: "Lorem",
    className: "",
};

const cell02Text123Data = {
    children: "Lorem Ipsum",
};

const cell06Text133Data = {
    children: "1",
};

const cell06Text134Data = {
    children: "12",
};

const cell06Text135Data = {
    children: "3",
};

const cell06Text136Data = {
    children: "5",
};

const rowData2225Data = {
    cell01TextProps: cell01Text725Data,
    cell02Text1Props: cell02Text120Data,
    cell02Text2Props: cell02Text121Data,
    cell02Text3Props: cell02Text122Data,
    cell02Text4Props: cell02Text123Data,
    cell06Text1Props: cell06Text133Data,
    cell06Text2Props: cell06Text134Data,
    cell06Text3Props: cell06Text135Data,
    cell06Text4Props: cell06Text136Data,
};

const tableRow224Data = {
    rowData2Props: rowData2225Data,
};

const showPage7Data = {
    placeholderText: "10",
};

const pageNumber419Data = {
    children: "2",
};

const pageNumber420Data = {
    children: "3",
};

const pageNumber421Data = {
    children: "4",
};

const pageNumber422Data = {
    children: "5",
};

const pageNumber211Data = {
    children: "6",
};

const pageNumber423Data = {
    children: "7",
};

const pageNumber212Data = {
    children: "8",
};

const pageNumber213Data = {
    children: "9",
};

const pagination4Data = {
    className: "pagination-6",
    pageNumber1Props: showPage7Data,
    pageNumber1Props2: pageNumber419Data,
    pageNumber2Props: pageNumber420Data,
    pageNumber3Props: pageNumber421Data,
    pageNumber4Props: pageNumber422Data,
    pageNumber21Props: pageNumber211Data,
    pageNumber5Props: pageNumber423Data,
    pageNumber22Props: pageNumber212Data,
    pageNumber23Props: pageNumber213Data,
};

const navigationAction19Data = {
    className: "navigation-action-18",
};

const userInteraction4Data = {
    className: "user-interaction-5",
};

const cBPM07Data = {
    globalHeader4Props: globalHeader421Data,
    localSelectSolutionType3Props: localSelectSolutionType34Data,
    localCardsValidationStatus82Props: localCardsValidationStatus822Data,
    actionBar2Props: actionBar24Data,
    tableHeaderProps: tableHeader4Data,
    tableRow12Props: tableRow122Data,
    cell01Text4Props: cell01Text42Data,
    cell02TextProps: cell02Text101Data,
    table3Props: table31Data,
    cell06Text1Props: cell06Text105Data,
    cell06Text2Props: cell06Text106Data,
    cell06Text3Props: cell06Text107Data,
    cell06Text4Props: cell06Text108Data,
    tableRow3Props: tableRow31Data,
    tableRow4Props: tableRow41Data,
    tableRow5Props: tableRow51Data,
    tableRow71Props: tableRow74Data,
    tableRow72Props: tableRow75Data,
    tableRow21Props: tableRow223Data,
    tableRow22Props: tableRow224Data,
    paginationProps: pagination4Data,
    navigationActionProps: navigationAction19Data,
    userInteractionProps: userInteraction4Data,
};

const menuLogo24Data = {
    className: "menu-logo-23",
};

const aTOMSICON2019close50Data = {
    className: "atomsicon2019close-18-1",
};

const mOLECULESFORMSEARCH24Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close50Data,
};

const aTOMSICON2019notification23Data = {
    className: "atomsicon2019notification-22",
};

const aTOMSICON2019chatCopy24Data = {
    className: "atomsicon2019chat-copy-23",
};

const globalHeader223Data = {
    className: "global-header-78",
    aTOMSICON2019closeProps: menuLogo24Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH24Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification23Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy24Data,
};

const globalHeader422Data = {
    globalHeader2Props: globalHeader223Data,
};

const heading412Data = {
    className: "heading-32",
};

const localSelectSolutionType35Data = {
    heading4Props: heading412Data,
};

const group14Data = {
    className: "",
};

const iconWithLabel45Data = {
    groupProps: group14Data,
};

const localCardsValidationStatus823Data = {
    iconWithLabel4Props: iconWithLabel45Data,
};

const aTOMSICON2019close51Data = {
    className: "atomsicon2019close-18",
};

const frame18313Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close51Data,
};

const searchInput9Data = {
    frame183Props: frame18313Data,
};

const icon9Data = {
    className: "icon-63",
};

const setting5Data = {
    frame18Props: searchInput9Data,
    frame18Props2: icon9Data,
};

const actionBar25Data = {
    settingProps: setting5Data,
};

const columnHeader29Data = {
    children: "Latitude",
};

const columnHeader39Data = {
    children: "Longtitude",
};

const columnHeader310Data = {
    children: "SR Name",
    className: "column-header-28",
};

const columnHeader210Data = {
    children: "PS Name",
};

const columnHeader617Data = {
    children: "SR Radius (miles)",
};

const columnHeader618Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-37-2",
};

const columnHeader619Data = {
    children: "Sector Count",
};

const columnHeader620Data = {
    children: "No. of RRH’s",
    className: "column-header-37",
};

const rowData115Data = {
    columnHeader21Props: columnHeader29Data,
    columnHeader31Props: columnHeader39Data,
    columnHeader32Props: columnHeader310Data,
    columnHeader22Props: columnHeader210Data,
    columnHeader61Props: columnHeader617Data,
    columnHeader62Props: columnHeader618Data,
    columnHeader63Props: columnHeader619Data,
    columnHeader64Props: columnHeader620Data,
};

const statusIconSmall217Data = {
    className: "status-icon-small-26-1",
};

const error5Data = {
    label: "130",
    statusIconSmall2Props: statusIconSmall217Data,
};

const group15Data = {
    className: "group-109",
};

const warning4Data = {
    label: "97",
    groupProps: group15Data,
};

const cell01Text39Data = {
    errorProps: error5Data,
    warningProps: warning4Data,
};

const cell02Text124Data = {
    children: "47.2042",
};

const cell02Text125Data = {
    children: "Lorem",
    className: "cell-0-7",
};

const cell02Text126Data = {
    children: "Lorem Ipsum",
};

const cell06Text137Data = {
    children: "1",
};

const cell06Text138Data = {
    children: "12",
};

const cell06Text139Data = {
    children: "3",
};

const cell06Text140Data = {
    children: "5",
};

const rowData42Data = {
    cell01Text3Props: cell01Text39Data,
    cell02Text1Props: cell02Text124Data,
    cell02Text2Props: cell02Text125Data,
    cell02Text3Props: cell02Text126Data,
    cell06Text1Props: cell06Text137Data,
    cell06Text2Props: cell06Text138Data,
    cell06Text3Props: cell06Text139Data,
    cell06Text4Props: cell06Text140Data,
};

const tableRow123Data = {
    rowData4Props: rowData42Data,
};

const statusIconSmall218Data = {
    className: "status-icon-small-26-2",
};

const group16Data = {
    className: "group-109",
};

const warning5Data = {
    label: "27",
    groupProps: group16Data,
};

const cell01Text43Data = {
    label: "34",
    statusIconSmall2Props: statusIconSmall218Data,
    warningProps: warning5Data,
};

const cell02Text127Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON7Data = {
    className: "localwarning-icon-19-1",
};

const table32Data = {
    lOCALWARNINGICONProps: lOCALWARNINGICON7Data,
};

const cell06Text141Data = {
    children: "1",
};

const cell06Text142Data = {
    children: "12",
};

const cell06Text143Data = {
    children: "3",
};

const cell06Text144Data = {
    children: "5",
};

const rowData51Data = {
    cell01Text4Props: cell01Text43Data,
    cell02TextProps: cell02Text127Data,
    cell06Text1Props: table32Data,
    cell06Text1Props2: cell06Text141Data,
    cell06Text2Props: cell06Text142Data,
    cell06Text3Props: cell06Text143Data,
    cell06Text4Props: cell06Text144Data,
};

const statusIconSmall219Data = {
    className: "status-icon-small-26-3",
};

const error6Data = {
    label: "14",
    statusIconSmall2Props: statusIconSmall219Data,
};

const group17Data = {
    className: "group-109",
};

const warning6Data = {
    label: "23",
    groupProps: group17Data,
};

const cell01Text310Data = {
    errorProps: error6Data,
    warningProps: warning6Data,
};

const cell02Text128Data = {
    children: "-12.9822",
};

const cell02Text129Data = {
    children: "Lorem",
};

const cell02Text130Data = {
    children: "Lorem Ipsum",
};

const cell06Text145Data = {
    children: "1",
};

const cell06Text146Data = {
    children: "12",
};

const cell06Text147Data = {
    children: "3",
};

const cell06Text148Data = {
    children: "5",
};

const rowData62Data = {
    cell01Text3Props: cell01Text310Data,
    cell02Text1Props: cell02Text128Data,
    cell02Text2Props: cell02Text129Data,
    cell02Text3Props: cell02Text130Data,
    cell06Text1Props: cell06Text145Data,
    cell06Text2Props: cell06Text146Data,
    cell06Text3Props: cell06Text147Data,
    cell06Text4Props: cell06Text148Data,
};

const tableRow32Data = {
    rowData6Props: rowData62Data,
};

const statusIconSmall220Data = {
    className: "status-icon-small-26-4",
};

const error7Data = {
    label: "09",
    className: "group-468-1",
    statusIconSmall2Props: statusIconSmall220Data,
};

const cell01Text54Data = {
    errorProps: error7Data,
};

const cell02Text131Data = {
    children: "47.2042",
};

const cell02Text132Data = {
    children: "Lorem Ipsum",
};

const cell06Text149Data = {
    children: "1",
};

const cell06Text150Data = {
    children: "12",
};

const cell06Text151Data = {
    children: "3",
};

const cell06Text152Data = {
    children: "5",
};

const rowData72Data = {
    cell01Text5Props: cell01Text54Data,
    cell02Text1Props: cell02Text131Data,
    cell02Text2Props: cell02Text132Data,
    cell06Text1Props: cell06Text149Data,
    cell06Text2Props: cell06Text150Data,
    cell06Text3Props: cell06Text151Data,
    cell06Text4Props: cell06Text152Data,
};

const tableRow42Data = {
    rowData7Props: rowData72Data,
};

const statusIconSmall221Data = {
    className: "status-icon-small-26",
};

const error8Data = {
    label: "08",
    className: "group-468-1",
    statusIconSmall2Props: statusIconSmall221Data,
};

const cell01Text55Data = {
    errorProps: error8Data,
};

const cell02Text133Data = {
    children: "47.2042",
};

const cell02Text134Data = {
    children: "-12.9822",
};

const cell02Text135Data = {
    children: "Lorem",
};

const cell06Text153Data = {
    children: "1",
};

const cell06Text154Data = {
    children: "12",
};

const cell06Text155Data = {
    children: "3",
};

const cell06Text156Data = {
    children: "5",
};

const rowData82Data = {
    cell01Text5Props: cell01Text55Data,
    cell02Text1Props: cell02Text133Data,
    cell02Text2Props: cell02Text134Data,
    cell02Text3Props: cell02Text135Data,
    cell06Text1Props: cell06Text153Data,
    cell06Text2Props: cell06Text154Data,
    cell06Text3Props: cell06Text155Data,
    cell06Text4Props: cell06Text156Data,
};

const tableRow52Data = {
    rowData8Props: rowData82Data,
};

const group18Data = {
    className: "group-116",
};

const cell01Text215Data = {
    label: "03",
    groupProps: group18Data,
};

const cell02Text136Data = {
    children: "47.2042",
};

const cell02Text137Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON8Data = {
    className: "",
};

const cell02Text138Data = {
    children: "Lorem Ipsum",
};

const cell06Text157Data = {
    children: "1",
};

const cell06Text158Data = {
    children: "12",
};

const cell06Text159Data = {
    children: "3",
};

const cell06Text160Data = {
    children: "5",
};

const rowData36Data = {
    cell01Text2Props: cell01Text215Data,
    cell02Text1Props: cell02Text136Data,
    cell02Text2Props: cell02Text137Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON8Data,
    cell02Text3Props: cell02Text138Data,
    cell06Text1Props: cell06Text157Data,
    cell06Text2Props: cell06Text158Data,
    cell06Text3Props: cell06Text159Data,
    cell06Text4Props: cell06Text160Data,
};

const tableRow76Data = {
    rowData3Props: rowData36Data,
};

const group19Data = {
    className: "group-116",
};

const cell01Text216Data = {
    label: "01",
    groupProps: group19Data,
};

const cell02Text139Data = {
    children: "47.2042",
};

const cell02Text140Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON9Data = {
    className: "",
};

const cell02Text141Data = {
    children: "Lorem Ipsum",
};

const cell06Text161Data = {
    children: "1",
};

const cell06Text162Data = {
    children: "12",
};

const cell06Text163Data = {
    children: "3",
};

const cell06Text164Data = {
    children: "5",
};

const rowData37Data = {
    cell01Text2Props: cell01Text216Data,
    cell02Text1Props: cell02Text139Data,
    cell02Text2Props: cell02Text140Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON9Data,
    cell02Text3Props: cell02Text141Data,
    cell06Text1Props: cell06Text161Data,
    cell06Text2Props: cell06Text162Data,
    cell06Text3Props: cell06Text163Data,
    cell06Text4Props: cell06Text164Data,
};

const tableRow77Data = {
    rowData3Props: rowData37Data,
};

const statusIconSmall40Data = {
    className: "status-icon-small-4-1",
};

const cell01Text726Data = {
    statusIconSmallProps: statusIconSmall40Data,
};

const cell02Text142Data = {
    children: "47.2042",
};

const cell02Text143Data = {
    children: "-12.9822",
};

const cell02Text144Data = {
    children: "Lorem",
    className: "",
};

const cell02Text145Data = {
    children: "Lorem Ipsum",
};

const cell06Text165Data = {
    children: "1",
};

const cell06Text166Data = {
    children: "12",
};

const cell06Text167Data = {
    children: "3",
};

const cell06Text168Data = {
    children: "5",
};

const rowData2226Data = {
    cell01TextProps: cell01Text726Data,
    cell02Text1Props: cell02Text142Data,
    cell02Text2Props: cell02Text143Data,
    cell02Text3Props: cell02Text144Data,
    cell02Text4Props: cell02Text145Data,
    cell06Text1Props: cell06Text165Data,
    cell06Text2Props: cell06Text166Data,
    cell06Text3Props: cell06Text167Data,
    cell06Text4Props: cell06Text168Data,
};

const tableRow225Data = {
    rowData2Props: rowData2226Data,
};

const statusIconSmall41Data = {
    className: "status-icon-small-4",
};

const cell01Text727Data = {
    statusIconSmallProps: statusIconSmall41Data,
};

const cell02Text146Data = {
    children: "47.2042",
};

const cell02Text147Data = {
    children: "12.9822",
};

const cell02Text148Data = {
    children: "Lorem",
    className: "",
};

const cell02Text149Data = {
    children: "Lorem Ipsum",
};

const cell06Text169Data = {
    children: "1",
};

const cell06Text170Data = {
    children: "12",
};

const cell06Text171Data = {
    children: "3",
};

const cell06Text172Data = {
    children: "5",
};

const rowData2227Data = {
    cell01TextProps: cell01Text727Data,
    cell02Text1Props: cell02Text146Data,
    cell02Text2Props: cell02Text147Data,
    cell02Text3Props: cell02Text148Data,
    cell02Text4Props: cell02Text149Data,
    cell06Text1Props: cell06Text169Data,
    cell06Text2Props: cell06Text170Data,
    cell06Text3Props: cell06Text171Data,
    cell06Text4Props: cell06Text172Data,
};

const tableRow226Data = {
    rowData2Props: rowData2227Data,
};

const showPage8Data = {
    placeholderText: "10",
};

const pageNumber424Data = {
    children: "2",
};

const pageNumber425Data = {
    children: "3",
};

const pageNumber426Data = {
    children: "4",
};

const pageNumber427Data = {
    children: "5",
};

const pageNumber214Data = {
    children: "6",
};

const pageNumber428Data = {
    children: "7",
};

const pageNumber215Data = {
    children: "8",
};

const pageNumber216Data = {
    children: "9",
};

const pagination5Data = {
    className: "pagination-7",
    pageNumber1Props: showPage8Data,
    pageNumber1Props2: pageNumber424Data,
    pageNumber2Props: pageNumber425Data,
    pageNumber3Props: pageNumber426Data,
    pageNumber4Props: pageNumber427Data,
    pageNumber21Props: pageNumber214Data,
    pageNumber5Props: pageNumber428Data,
    pageNumber22Props: pageNumber215Data,
    pageNumber23Props: pageNumber216Data,
};

const navigationAction20Data = {
    className: "navigation-action-19",
};

const userInteraction5Data = {
    className: "user-interaction-6",
};

const cBPM08Data = {
    srNameDoesNotMatch: "SR name does not match",
    globalHeader4Props: globalHeader422Data,
    localSelectSolutionType3Props: localSelectSolutionType35Data,
    localCardsValidationStatus82Props: localCardsValidationStatus823Data,
    actionBar2Props: actionBar25Data,
    rowData11Props: rowData115Data,
    tableRow12Props: tableRow123Data,
    rowData5Props: rowData51Data,
    tableRow3Props: tableRow32Data,
    tableRow4Props: tableRow42Data,
    tableRow5Props: tableRow52Data,
    tableRow71Props: tableRow76Data,
    tableRow72Props: tableRow77Data,
    tableRow21Props: tableRow225Data,
    tableRow22Props: tableRow226Data,
    paginationProps: pagination5Data,
    navigationActionProps: navigationAction20Data,
    userInteractionProps: userInteraction5Data,
};

const menuLogo25Data = {
    className: "",
};

const aTOMSICON2019close52Data = {
    className: "atomsicon2019close-19-1",
};

const mOLECULESFORMSEARCH25Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close52Data,
};

const aTOMSICON2019notification24Data = {
    className: "atomsicon2019notification-23",
};

const aTOMSICON2019chatCopy25Data = {
    className: "atomsicon2019chat-copy-24",
};

const globalHeader224Data = {
    className: "global-header-79",
    aTOMSICON2019closeProps: menuLogo25Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH25Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification24Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy25Data,
};

const globalHeader423Data = {
    globalHeader2Props: globalHeader224Data,
};

const heading413Data = {
    className: "heading-33",
};

const localSelectSolutionType36Data = {
    heading4Props: heading413Data,
};

const group20Data = {
    className: "",
};

const iconWithLabel46Data = {
    groupProps: group20Data,
};

const localCardsValidationStatus824Data = {
    iconWithLabel4Props: iconWithLabel46Data,
};

const aTOMSICON2019close53Data = {
    className: "atomsicon2019close-19",
};

const frame18314Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close53Data,
};

const searchInput10Data = {
    frame183Props: frame18314Data,
};

const icon10Data = {
    className: "icon-64",
};

const setting6Data = {
    frame18Props: searchInput10Data,
    frame18Props2: icon10Data,
};

const columnHeader211Data = {
    children: "Latitude",
};

const columnHeader311Data = {
    children: "Longtitude",
};

const columnHeader312Data = {
    children: "SR Name",
    className: "column-header-29",
};

const columnHeader212Data = {
    children: "PS Name",
};

const columnHeader621Data = {
    children: "SR Radius (miles)",
};

const columnHeader622Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-38-2",
};

const columnHeader623Data = {
    children: "Sector Count",
};

const columnHeader624Data = {
    children: "No. of RRH’s",
    className: "column-header-38",
};

const rowData116Data = {
    columnHeader21Props: columnHeader211Data,
    columnHeader31Props: columnHeader311Data,
    columnHeader32Props: columnHeader312Data,
    columnHeader22Props: columnHeader212Data,
    columnHeader61Props: columnHeader621Data,
    columnHeader62Props: columnHeader622Data,
    columnHeader63Props: columnHeader623Data,
    columnHeader64Props: columnHeader624Data,
};

const tableHeader22Data = {
    rowDataProps: rowData116Data,
};

const statusIconSmall223Data = {
    className: "status-icon-small-27-1",
};

const error9Data = {
    label: "130",
    statusIconSmall2Props: statusIconSmall223Data,
};

const group21Data = {
    className: "group-118",
};

const warning7Data = {
    label: "97",
    groupProps: group21Data,
};

const cell01Text311Data = {
    errorProps: error9Data,
    warningProps: warning7Data,
};

const cell02Text150Data = {
    children: "47.2042",
};

const cell02Text151Data = {
    children: "Lorem",
    className: "cell-0-8",
};

const cell02Text152Data = {
    children: "Lorem Ipsum",
};

const cell06Text173Data = {
    children: "1",
};

const cell06Text174Data = {
    children: "12",
};

const cell06Text175Data = {
    children: "3",
};

const cell06Text176Data = {
    children: "5",
};

const rowData43Data = {
    cell01Text3Props: cell01Text311Data,
    cell02Text1Props: cell02Text150Data,
    cell02Text2Props: cell02Text151Data,
    cell02Text3Props: cell02Text152Data,
    cell06Text1Props: cell06Text173Data,
    cell06Text2Props: cell06Text174Data,
    cell06Text3Props: cell06Text175Data,
    cell06Text4Props: cell06Text176Data,
};

const statusIconSmall224Data = {
    className: "status-icon-small-27-2",
};

const group22Data = {
    className: "group-118",
};

const warning8Data = {
    label: "27",
    groupProps: group22Data,
};

const cell01Text44Data = {
    label: "34",
    statusIconSmall2Props: statusIconSmall224Data,
    warningProps: warning8Data,
};

const cell02Text153Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON10Data = {
    className: "localwarning-icon-20-1",
};

const table33Data = {
    lOCALWARNINGICONProps: lOCALWARNINGICON10Data,
};

const cell06Text177Data = {
    children: "1",
};

const cell06Text178Data = {
    children: "12",
};

const cell06Text179Data = {
    children: "3",
};

const cell06Text180Data = {
    children: "5",
};

const rowData52Data = {
    cell01Text4Props: cell01Text44Data,
    cell02TextProps: cell02Text153Data,
    cell06Text1Props: table33Data,
    cell06Text1Props2: cell06Text177Data,
    cell06Text2Props: cell06Text178Data,
    cell06Text3Props: cell06Text179Data,
    cell06Text4Props: cell06Text180Data,
};

const statusIconSmall225Data = {
    className: "status-icon-small-27-3",
};

const error10Data = {
    label: "14",
    statusIconSmall2Props: statusIconSmall225Data,
};

const group23Data = {
    className: "group-118",
};

const warning9Data = {
    label: "23",
    groupProps: group23Data,
};

const cell01Text312Data = {
    errorProps: error10Data,
    warningProps: warning9Data,
};

const cell02Text154Data = {
    children: "-12.9822",
};

const cell02Text155Data = {
    children: "Lorem",
};

const cell02Text156Data = {
    children: "Lorem Ipsum",
};

const cell06Text181Data = {
    children: "1",
};

const cell06Text182Data = {
    children: "12",
};

const cell06Text183Data = {
    children: "3",
};

const cell06Text184Data = {
    children: "5",
};

const rowData63Data = {
    cell01Text3Props: cell01Text312Data,
    cell02Text1Props: cell02Text154Data,
    cell02Text2Props: cell02Text155Data,
    cell02Text3Props: cell02Text156Data,
    cell06Text1Props: cell06Text181Data,
    cell06Text2Props: cell06Text182Data,
    cell06Text3Props: cell06Text183Data,
    cell06Text4Props: cell06Text184Data,
};

const statusIconSmall226Data = {
    className: "status-icon-small-27-4",
};

const error11Data = {
    label: "09",
    className: "group-468-2",
    statusIconSmall2Props: statusIconSmall226Data,
};

const cell01Text56Data = {
    errorProps: error11Data,
};

const cell02Text157Data = {
    children: "47.2042",
};

const cell02Text158Data = {
    children: "Lorem Ipsum",
};

const cell06Text185Data = {
    children: "1",
};

const cell06Text186Data = {
    children: "12",
};

const cell06Text187Data = {
    children: "3",
};

const cell06Text188Data = {
    children: "5",
};

const rowData73Data = {
    cell01Text5Props: cell01Text56Data,
    cell02Text1Props: cell02Text157Data,
    cell02Text2Props: cell02Text158Data,
    cell06Text1Props: cell06Text185Data,
    cell06Text2Props: cell06Text186Data,
    cell06Text3Props: cell06Text187Data,
    cell06Text4Props: cell06Text188Data,
};

const statusIconSmall227Data = {
    className: "status-icon-small-27",
};

const error12Data = {
    label: "08",
    className: "group-468-2",
    statusIconSmall2Props: statusIconSmall227Data,
};

const cell01Text57Data = {
    errorProps: error12Data,
};

const cell02Text159Data = {
    children: "47.2042",
};

const cell02Text160Data = {
    children: "-12.9822",
};

const cell02Text161Data = {
    children: "Lorem",
};

const cell06Text189Data = {
    children: "1",
};

const cell06Text190Data = {
    children: "12",
};

const cell06Text191Data = {
    children: "3",
};

const cell06Text192Data = {
    children: "5",
};

const rowData83Data = {
    cell01Text5Props: cell01Text57Data,
    cell02Text1Props: cell02Text159Data,
    cell02Text2Props: cell02Text160Data,
    cell02Text3Props: cell02Text161Data,
    cell06Text1Props: cell06Text189Data,
    cell06Text2Props: cell06Text190Data,
    cell06Text3Props: cell06Text191Data,
    cell06Text4Props: cell06Text192Data,
};

const group24Data = {
    className: "group-117",
};

const cell01Text217Data = {
    label: "03",
    groupProps: group24Data,
};

const cell02Text162Data = {
    children: "47.2042",
};

const cell02Text163Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON11Data = {
    className: "",
};

const cell02Text164Data = {
    children: "Lorem Ipsum",
};

const cell06Text193Data = {
    children: "1",
};

const cell06Text194Data = {
    children: "12",
};

const cell06Text195Data = {
    children: "3",
};

const cell06Text196Data = {
    children: "5",
};

const rowData38Data = {
    cell01Text2Props: cell01Text217Data,
    cell02Text1Props: cell02Text162Data,
    cell02Text2Props: cell02Text163Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON11Data,
    cell02Text3Props: cell02Text164Data,
    cell06Text1Props: cell06Text193Data,
    cell06Text2Props: cell06Text194Data,
    cell06Text3Props: cell06Text195Data,
    cell06Text4Props: cell06Text196Data,
};

const tableRow61Data = {
    rowData3Props: rowData38Data,
};

const group25Data = {
    className: "group-117",
};

const cell01Text218Data = {
    label: "01",
    groupProps: group25Data,
};

const cell02Text165Data = {
    children: "47.2042",
};

const cell02Text166Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON12Data = {
    className: "",
};

const cell02Text167Data = {
    children: "Lorem Ipsum",
};

const cell06Text197Data = {
    children: "1",
};

const cell06Text198Data = {
    children: "12",
};

const cell06Text199Data = {
    children: "3",
};

const cell06Text200Data = {
    children: "5",
};

const rowData39Data = {
    cell01Text2Props: cell01Text218Data,
    cell02Text1Props: cell02Text165Data,
    cell02Text2Props: cell02Text166Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON12Data,
    cell02Text3Props: cell02Text167Data,
    cell06Text1Props: cell06Text197Data,
    cell06Text2Props: cell06Text198Data,
    cell06Text3Props: cell06Text199Data,
    cell06Text4Props: cell06Text200Data,
};

const tableRow62Data = {
    rowData3Props: rowData39Data,
};

const statusIconSmall43Data = {
    className: "status-icon-small-5-1",
};

const cell01Text728Data = {
    statusIconSmallProps: statusIconSmall43Data,
};

const cell02Text168Data = {
    children: "47.2042",
};

const cell02Text169Data = {
    children: "-12.9822",
};

const cell02Text170Data = {
    children: "Lorem",
    className: "",
};

const cell02Text171Data = {
    children: "Lorem Ipsum",
};

const cell06Text201Data = {
    children: "1",
};

const cell06Text202Data = {
    children: "12",
};

const cell06Text203Data = {
    children: "3",
};

const cell06Text204Data = {
    children: "5",
};

const rowData2228Data = {
    cell01TextProps: cell01Text728Data,
    cell02Text1Props: cell02Text168Data,
    cell02Text2Props: cell02Text169Data,
    cell02Text3Props: cell02Text170Data,
    cell02Text4Props: cell02Text171Data,
    cell06Text1Props: cell06Text201Data,
    cell06Text2Props: cell06Text202Data,
    cell06Text3Props: cell06Text203Data,
    cell06Text4Props: cell06Text204Data,
};

const tableRow81Data = {
    rowData2Props: rowData2228Data,
};

const statusIconSmall44Data = {
    className: "status-icon-small-5",
};

const cell01Text729Data = {
    statusIconSmallProps: statusIconSmall44Data,
};

const cell02Text172Data = {
    children: "47.2042",
};

const cell02Text173Data = {
    children: "12.9822",
};

const cell02Text174Data = {
    children: "Lorem",
    className: "",
};

const cell02Text175Data = {
    children: "Lorem Ipsum",
};

const cell06Text205Data = {
    children: "1",
};

const cell06Text206Data = {
    children: "12",
};

const cell06Text207Data = {
    children: "3",
};

const cell06Text208Data = {
    children: "5",
};

const rowData2229Data = {
    cell01TextProps: cell01Text729Data,
    cell02Text1Props: cell02Text172Data,
    cell02Text2Props: cell02Text173Data,
    cell02Text3Props: cell02Text174Data,
    cell02Text4Props: cell02Text175Data,
    cell06Text1Props: cell06Text205Data,
    cell06Text2Props: cell06Text206Data,
    cell06Text3Props: cell06Text207Data,
    cell06Text4Props: cell06Text208Data,
};

const tableRow82Data = {
    rowData2Props: rowData2229Data,
};

const showPage9Data = {
    placeholderText: "10",
};

const pageNumber429Data = {
    children: "2",
};

const pageNumber430Data = {
    children: "3",
};

const pageNumber431Data = {
    children: "4",
};

const pageNumber432Data = {
    children: "5",
};

const pageNumber217Data = {
    children: "6",
};

const pageNumber433Data = {
    children: "7",
};

const pageNumber218Data = {
    children: "8",
};

const pageNumber219Data = {
    children: "9",
};

const pagination6Data = {
    className: "pagination-8",
    pageNumber1Props: showPage9Data,
    pageNumber1Props2: pageNumber429Data,
    pageNumber2Props: pageNumber430Data,
    pageNumber3Props: pageNumber431Data,
    pageNumber4Props: pageNumber432Data,
    pageNumber21Props: pageNumber217Data,
    pageNumber5Props: pageNumber433Data,
    pageNumber22Props: pageNumber218Data,
    pageNumber23Props: pageNumber219Data,
};

const navigationAction21Data = {
    className: "navigation-action-20",
};

const userInteraction6Data = {
    className: "user-interaction-7",
};

const cBPM09Data = {
    action: "Edit",
    globalHeader4Props: globalHeader423Data,
    localSelectSolutionType3Props: localSelectSolutionType36Data,
    localCardsValidationStatus82Props: localCardsValidationStatus824Data,
    settingProps: setting6Data,
    tableHeader2Props: tableHeader22Data,
    rowData4Props: rowData43Data,
    rowData5Props: rowData52Data,
    rowData6Props: rowData63Data,
    rowData7Props: rowData73Data,
    rowData8Props: rowData83Data,
    tableRow61Props: tableRow61Data,
    tableRow62Props: tableRow62Data,
    tableRow81Props: tableRow81Data,
    tableRow82Props: tableRow82Data,
    paginationProps: pagination6Data,
    navigationActionProps: navigationAction21Data,
    userInteractionProps: userInteraction6Data,
};

const menuLogo26Data = {
    className: "",
};

const aTOMSICON2019close54Data = {
    className: "atomsicon2019close-20-1",
};

const mOLECULESFORMSEARCH26Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close54Data,
};

const aTOMSICON2019notification25Data = {
    className: "atomsicon2019notification-24",
};

const aTOMSICON2019chatCopy26Data = {
    className: "atomsicon2019chat-copy-25",
};

const globalHeader225Data = {
    className: "global-header-80",
    aTOMSICON2019closeProps: menuLogo26Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH26Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification25Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy26Data,
};

const globalHeader424Data = {
    globalHeader2Props: globalHeader225Data,
};

const heading414Data = {
    className: "heading-34",
};

const localSelectSolutionType37Data = {
    heading4Props: heading414Data,
};

const group26Data = {
    className: "",
};

const iconWithLabel47Data = {
    groupProps: group26Data,
};

const localCardsValidationStatus825Data = {
    iconWithLabel4Props: iconWithLabel47Data,
};

const aTOMSICON2019close55Data = {
    className: "atomsicon2019close-20",
};

const frame18315Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close55Data,
};

const searchInput11Data = {
    frame183Props: frame18315Data,
};

const icon11Data = {
    className: "icon-65",
};

const setting7Data = {
    frame18Props: searchInput11Data,
    frame18Props2: icon11Data,
};

const actionBar42Data = {
    settingProps: setting7Data,
};

const columnHeader213Data = {
    children: "Latitude",
};

const columnHeader313Data = {
    children: "Longtitude",
};

const columnHeader314Data = {
    children: "SR Name",
    className: "column-header-30",
};

const columnHeader214Data = {
    children: "PS Name",
};

const columnHeader625Data = {
    children: "SR Radius (miles)",
};

const columnHeader626Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-39-2",
};

const columnHeader627Data = {
    children: "Sector Count",
};

const columnHeader628Data = {
    children: "No. of RRH’s",
    className: "column-header-39",
};

const rowData117Data = {
    columnHeader21Props: columnHeader213Data,
    columnHeader31Props: columnHeader313Data,
    columnHeader32Props: columnHeader314Data,
    columnHeader22Props: columnHeader214Data,
    columnHeader61Props: columnHeader625Data,
    columnHeader62Props: columnHeader626Data,
    columnHeader63Props: columnHeader627Data,
    columnHeader64Props: columnHeader628Data,
};

const tableHeader23Data = {
    rowDataProps: rowData117Data,
};

const statusIconSmall229Data = {
    className: "status-icon-small-28-1",
};

const error13Data = {
    label: "99",
    statusIconSmall2Props: statusIconSmall229Data,
};

const group27Data = {
    className: "group-119",
};

const warning10Data = {
    label: "17",
    groupProps: group27Data,
};

const cell01Text313Data = {
    errorProps: error13Data,
    warningProps: warning10Data,
};

const frame201Data = {
    placeholderText: "47.2042",
};

const inputFields4210Data = {
    className: "",
    frame20Props: frame201Data,
};

const frame202Data = {
    placeholderText: "-12.982",
};

const inputFields4211Data = {
    className: "input-fields-542-1",
    frame20Props: frame202Data,
};

const frame203Data = {
    placeholderText: "Lorem",
};

const inputFields4212Data = {
    frame20Props: frame203Data,
};

const frame204Data = {
    placeholderText: "Lorem",
};

const inputFields4213Data = {
    frame20Props: frame204Data,
};

const inputFields5210Data = {
    placeholderText: "1",
};

const inputFields5211Data = {
    placeholderText: "3",
    className: "input-fields-549-2",
};

const inputFields5212Data = {
    placeholderText: "5",
    className: "input-fields-549-3",
};

const tableRow132Data = {
    cell01Text3Props: cell01Text313Data,
    inputFields41Props: inputFields4210Data,
    inputFields42Props: inputFields4211Data,
    inputFields43Props: inputFields4212Data,
    inputFields44Props: inputFields4213Data,
    inputFields51Props: inputFields5210Data,
    inputFields52Props: inputFields5211Data,
    inputFields53Props: inputFields5212Data,
};

const statusIconSmall230Data = {
    className: "status-icon-small-28-2",
};

const group28Data = {
    className: "group-119",
};

const warning11Data = {
    label: "17",
    groupProps: group28Data,
};

const cell01Text45Data = {
    label: "99",
    className: "cell-01-text-26",
    statusIconSmall2Props: statusIconSmall230Data,
    warningProps: warning11Data,
};

const frame205Data = {
    placeholderText: "47.2042",
};

const inputFields4214Data = {
    className: "input-fields-542-2",
    frame20Props: frame205Data,
};

const frame206Data = {
    placeholderText: "-12.982",
};

const inputFields4215Data = {
    frame20Props: frame206Data,
};

const frame207Data = {
    placeholderText: "Borem",
};

const frame208Data = {
    placeholderText: "Lorem",
};

const inputFields4216Data = {
    className: "input-fields-542-3",
    frame20Props: frame208Data,
};

const inputFields5213Data = {
    placeholderText: "1",
};

const inputFields5214Data = {
    placeholderText: "3",
    className: "input-fields-549-5",
};

const inputFields5215Data = {
    placeholderText: "5",
    className: "input-fields-551",
};

const statusIconSmall231Data = {
    className: "status-icon-small-28-3",
};

const error14Data = {
    label: "99",
    statusIconSmall2Props: statusIconSmall231Data,
};

const group29Data = {
    className: "group-119",
};

const warning12Data = {
    label: "17",
    groupProps: group29Data,
};

const cell01Text314Data = {
    errorProps: error14Data,
    warningProps: warning12Data,
};

const frame209Data = {
    placeholderText: "47.2042",
};

const inputFields4217Data = {
    className: "input-fields-545",
    frame20Props: frame209Data,
};

const frame2010Data = {
    placeholderText: "-12.982",
};

const inputFields4218Data = {
    className: "",
    frame20Props: frame2010Data,
};

const frame2011Data = {
    placeholderText: "Lorem",
};

const inputFields4219Data = {
    frame20Props: frame2011Data,
};

const frame2012Data = {
    placeholderText: "Lorem",
};

const inputFields4220Data = {
    frame20Props: frame2012Data,
};

const inputFields5216Data = {
    placeholderText: "1",
};

const inputFields5217Data = {
    placeholderText: "3",
    className: "input-fields-549-6",
};

const inputFields5218Data = {
    placeholderText: "5",
    className: "input-fields-549-7",
};

const tableRow133Data = {
    cell01Text3Props: cell01Text314Data,
    inputFields41Props: inputFields4217Data,
    inputFields42Props: inputFields4218Data,
    inputFields43Props: inputFields4219Data,
    inputFields44Props: inputFields4220Data,
    inputFields51Props: inputFields5216Data,
    inputFields52Props: inputFields5217Data,
    inputFields53Props: inputFields5218Data,
};

const statusIconSmall232Data = {
    className: "status-icon-small-28-4",
};

const error15Data = {
    label: "099",
    className: "group-468-4",
    statusIconSmall2Props: statusIconSmall232Data,
};

const cell01Text58Data = {
    errorProps: error15Data,
};

const frame2013Data = {
    placeholderText: "47.2042",
};

const inputFields4221Data = {
    frame20Props: frame2013Data,
};

const frame2014Data = {
    placeholderText: "-12.982",
};

const inputFields4222Data = {
    className: "input-fields-542-4",
    frame20Props: frame2014Data,
};

const frame2015Data = {
    placeholderText: "Lorem",
};

const inputFields4223Data = {
    className: "input-fields-542-5",
    frame20Props: frame2015Data,
};

const frame2016Data = {
    placeholderText: "Lorem",
};

const inputFields4224Data = {
    className: "",
    frame20Props: frame2016Data,
};

const inputFields5219Data = {
    placeholderText: "1",
};

const inputFields5220Data = {
    placeholderText: "3",
    className: "input-fields-549-8",
};

const inputFields5221Data = {
    placeholderText: "5",
    className: "input-fields-549-9",
};

const tableRow431Data = {
    cell01Text5Props: cell01Text58Data,
    inputFields41Props: inputFields4221Data,
    inputFields42Props: inputFields4222Data,
    inputFields43Props: inputFields4223Data,
    inputFields44Props: inputFields4224Data,
    inputFields51Props: inputFields5219Data,
    inputFields52Props: inputFields5220Data,
    inputFields53Props: inputFields5221Data,
};

const statusIconSmall233Data = {
    className: "status-icon-small-28",
};

const error16Data = {
    label: "099",
    className: "group-468-4",
    statusIconSmall2Props: statusIconSmall233Data,
};

const cell01Text59Data = {
    errorProps: error16Data,
};

const frame2017Data = {
    placeholderText: "47.2042",
};

const inputFields4225Data = {
    frame20Props: frame2017Data,
};

const frame2018Data = {
    placeholderText: "-12.982",
};

const inputFields4226Data = {
    className: "",
    frame20Props: frame2018Data,
};

const frame2019Data = {
    placeholderText: "Lorem",
};

const inputFields4227Data = {
    className: "",
    frame20Props: frame2019Data,
};

const frame2020Data = {
    placeholderText: "Lorem",
};

const inputFields4228Data = {
    className: "input-fields-542-6",
    frame20Props: frame2020Data,
};

const inputFields5222Data = {
    placeholderText: "1",
};

const inputFields5223Data = {
    placeholderText: "3",
    className: "input-fields-549-10",
};

const inputFields5224Data = {
    placeholderText: "5",
    className: "input-fields-549-11",
};

const tableRow432Data = {
    cell01Text5Props: cell01Text59Data,
    inputFields41Props: inputFields4225Data,
    inputFields42Props: inputFields4226Data,
    inputFields43Props: inputFields4227Data,
    inputFields44Props: inputFields4228Data,
    inputFields51Props: inputFields5222Data,
    inputFields52Props: inputFields5223Data,
    inputFields53Props: inputFields5224Data,
};

const group30Data = {
    className: "group-133",
};

const cell01Text219Data = {
    label: "099",
    groupProps: group30Data,
};

const frame2021Data = {
    placeholderText: "47.2042",
};

const inputFields4229Data = {
    className: "",
    frame20Props: frame2021Data,
};

const frame2022Data = {
    placeholderText: "-12.982",
};

const inputFields4230Data = {
    frame20Props: frame2022Data,
};

const frame2023Data = {
    placeholderText: "Lorem",
};

const inputFields4231Data = {
    className: "input-fields-542-7",
    frame20Props: frame2023Data,
};

const frame2024Data = {
    placeholderText: "Lorem",
};

const inputFields4232Data = {
    frame20Props: frame2024Data,
};

const inputFields5225Data = {
    placeholderText: "1",
};

const inputFields5226Data = {
    placeholderText: "3",
    className: "input-fields-549-12",
};

const inputFields5227Data = {
    placeholderText: "5",
    className: "input-fields-549-13",
};

const tableRow622Data = {
    cell01Text2Props: cell01Text219Data,
    inputFields41Props: inputFields4229Data,
    inputFields42Props: inputFields4230Data,
    inputFields43Props: inputFields4231Data,
    inputFields44Props: inputFields4232Data,
    inputFields51Props: inputFields5225Data,
    inputFields52Props: inputFields5226Data,
    inputFields53Props: inputFields5227Data,
};

const group31Data = {
    className: "group-119",
};

const cell01Text220Data = {
    label: "099",
    groupProps: group31Data,
};

const frame2025Data = {
    placeholderText: "47.2042",
};

const inputFields4233Data = {
    className: "input-fields-546",
    frame20Props: frame2025Data,
};

const frame2026Data = {
    placeholderText: "-12.982",
};

const inputFields4234Data = {
    frame20Props: frame2026Data,
};

const frame2027Data = {
    placeholderText: "Lorem",
};

const inputFields4235Data = {
    className: "input-fields-542",
    frame20Props: frame2027Data,
};

const frame2028Data = {
    placeholderText: "Lorem",
};

const inputFields4236Data = {
    frame20Props: frame2028Data,
};

const inputFields5228Data = {
    placeholderText: "1",
};

const inputFields5229Data = {
    placeholderText: "3",
    className: "input-fields-549-14",
};

const inputFields5230Data = {
    placeholderText: "5",
    className: "input-fields-549-15",
};

const tableRow623Data = {
    cell01Text2Props: cell01Text220Data,
    inputFields41Props: inputFields4233Data,
    inputFields42Props: inputFields4234Data,
    inputFields43Props: inputFields4235Data,
    inputFields44Props: inputFields4236Data,
    inputFields51Props: inputFields5228Data,
    inputFields52Props: inputFields5229Data,
    inputFields53Props: inputFields5230Data,
};

const statusIconSmall46Data = {
    className: "status-icon-small-6-1",
};

const cell01Text730Data = {
    statusIconSmallProps: statusIconSmall46Data,
};

const frame2029Data = {
    placeholderText: "47.2042",
};

const inputFields4237Data = {
    frame20Props: frame2029Data,
};

const frame2030Data = {
    placeholderText: "-12.982",
};

const inputFields4238Data = {
    frame20Props: frame2030Data,
};

const frame2031Data = {
    placeholderText: "Lorem",
};

const inputFields4239Data = {
    frame20Props: frame2031Data,
};

const frame2032Data = {
    placeholderText: "Lorem",
};

const inputFields4240Data = {
    frame20Props: frame2032Data,
};

const inputFields5231Data = {
    placeholderText: "1",
};

const inputFields5232Data = {
    placeholderText: "3",
    className: "input-fields-549-16",
};

const inputFields5233Data = {
    placeholderText: "5",
    className: "input-fields-549-17",
};

const tableRow822Data = {
    cell01TextProps: cell01Text730Data,
    inputFields41Props: inputFields4237Data,
    inputFields42Props: inputFields4238Data,
    inputFields43Props: inputFields4239Data,
    inputFields44Props: inputFields4240Data,
    inputFields51Props: inputFields5231Data,
    inputFields52Props: inputFields5232Data,
    inputFields53Props: inputFields5233Data,
};

const statusIconSmall47Data = {
    className: "status-icon-small-6",
};

const cell01Text731Data = {
    statusIconSmallProps: statusIconSmall47Data,
};

const frame2033Data = {
    placeholderText: "47.2042",
};

const inputFields4241Data = {
    frame20Props: frame2033Data,
};

const frame2034Data = {
    placeholderText: "-12.982",
};

const inputFields4242Data = {
    frame20Props: frame2034Data,
};

const frame2035Data = {
    placeholderText: "Lorem",
};

const inputFields4243Data = {
    frame20Props: frame2035Data,
};

const frame2036Data = {
    placeholderText: "Lorem",
};

const inputFields4244Data = {
    frame20Props: frame2036Data,
};

const inputFields5234Data = {
    placeholderText: "1",
};

const inputFields5235Data = {
    placeholderText: "3",
    className: "input-fields-549-18",
};

const inputFields5236Data = {
    placeholderText: "5",
    className: "input-fields-549",
};

const tableRow823Data = {
    cell01TextProps: cell01Text731Data,
    inputFields41Props: inputFields4241Data,
    inputFields42Props: inputFields4242Data,
    inputFields43Props: inputFields4243Data,
    inputFields44Props: inputFields4244Data,
    inputFields51Props: inputFields5234Data,
    inputFields52Props: inputFields5235Data,
    inputFields53Props: inputFields5236Data,
};

const showPage10Data = {
    placeholderText: "10",
};

const pageNumber434Data = {
    children: "2",
};

const pageNumber435Data = {
    children: "3",
};

const pageNumber436Data = {
    children: "4",
};

const pageNumber437Data = {
    children: "5",
};

const pageNumber220Data = {
    children: "6",
};

const pageNumber438Data = {
    children: "7",
};

const pageNumber221Data = {
    children: "8",
};

const pageNumber222Data = {
    children: "9",
};

const pagination7Data = {
    pageNumber1Props: showPage10Data,
    pageNumber1Props2: pageNumber434Data,
    pageNumber2Props: pageNumber435Data,
    pageNumber3Props: pageNumber436Data,
    pageNumber4Props: pageNumber437Data,
    pageNumber21Props: pageNumber220Data,
    pageNumber5Props: pageNumber438Data,
    pageNumber22Props: pageNumber221Data,
    pageNumber23Props: pageNumber222Data,
};

const navigationAction22Data = {
    className: "navigation-action-21",
};

const userInteraction7Data = {
    className: "user-interaction-8",
};

const cBPM10Data = {
    globalHeader4Props: globalHeader424Data,
    localSelectSolutionType3Props: localSelectSolutionType37Data,
    localCardsValidationStatus82Props: localCardsValidationStatus825Data,
    actionBar4Props: actionBar42Data,
    tableHeader2Props: tableHeader23Data,
    tableRow131Props: tableRow132Data,
    cell01Text4Props: cell01Text45Data,
    inputFields421Props: inputFields4214Data,
    inputFields422Props: inputFields4215Data,
    frame20Props: frame207Data,
    inputFields423Props: inputFields4216Data,
    inputFields521Props: inputFields5213Data,
    inputFields522Props: inputFields5214Data,
    inputFields523Props: inputFields5215Data,
    tableRow132Props: tableRow133Data,
    tableRow431Props: tableRow431Data,
    tableRow432Props: tableRow432Data,
    tableRow621Props: tableRow622Data,
    tableRow622Props: tableRow623Data,
    tableRow821Props: tableRow822Data,
    tableRow822Props: tableRow823Data,
    paginationProps: pagination7Data,
    navigationActionProps: navigationAction22Data,
    userInteractionProps: userInteraction7Data,
};

const menuLogo27Data = {
    className: "",
};

const aTOMSICON2019close56Data = {
    className: "atomsicon2019close-21-1",
};

const mOLECULESFORMSEARCH27Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close56Data,
};

const aTOMSICON2019notification26Data = {
    className: "atomsicon2019notification-25",
};

const aTOMSICON2019chatCopy27Data = {
    className: "atomsicon2019chat-copy-26",
};

const globalHeader226Data = {
    className: "global-header-81",
    aTOMSICON2019closeProps: menuLogo27Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH27Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification26Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy27Data,
};

const globalHeader425Data = {
    globalHeader2Props: globalHeader226Data,
};

const heading415Data = {
    className: "heading-35",
};

const localSelectSolutionType38Data = {
    heading4Props: heading415Data,
};

const group32Data = {
    className: "",
};

const iconWithLabel48Data = {
    groupProps: group32Data,
};

const localCardsValidationStatus826Data = {
    iconWithLabel4Props: iconWithLabel48Data,
};

const aTOMSICON2019close57Data = {
    className: "atomsicon2019close-21",
};

const frame18316Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close57Data,
};

const searchInput12Data = {
    frame183Props: frame18316Data,
};

const icon12Data = {
    className: "icon-66",
};

const setting8Data = {
    frame18Props: searchInput12Data,
    frame18Props2: icon12Data,
};

const columnHeader215Data = {
    children: "Latitude",
};

const columnHeader315Data = {
    children: "Longtitude",
};

const columnHeader316Data = {
    children: "SR Name",
    className: "column-header-31",
};

const columnHeader216Data = {
    children: "PS Name",
};

const columnHeader629Data = {
    children: "SR Radius (miles)",
};

const columnHeader630Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-40-2",
};

const columnHeader631Data = {
    children: "Sector Count",
};

const columnHeader632Data = {
    children: "No. of RRH’s",
    className: "column-header-40",
};

const rowData118Data = {
    columnHeader21Props: columnHeader215Data,
    columnHeader31Props: columnHeader315Data,
    columnHeader32Props: columnHeader316Data,
    columnHeader22Props: columnHeader216Data,
    columnHeader61Props: columnHeader629Data,
    columnHeader62Props: columnHeader630Data,
    columnHeader63Props: columnHeader631Data,
    columnHeader64Props: columnHeader632Data,
};

const tableHeader24Data = {
    rowDataProps: rowData118Data,
};

const statusIconSmall235Data = {
    className: "status-icon-small-29-1",
};

const error17Data = {
    label: "99",
    statusIconSmall2Props: statusIconSmall235Data,
};

const group33Data = {
    className: "group-120",
};

const warning13Data = {
    label: "17",
    groupProps: group33Data,
};

const cell01Text315Data = {
    errorProps: error17Data,
    warningProps: warning13Data,
};

const frame2037Data = {
    placeholderText: "47.2042",
};

const inputFields4245Data = {
    className: "",
    frame20Props: frame2037Data,
};

const frame2038Data = {
    placeholderText: "-12.982",
};

const inputFields4246Data = {
    className: "input-fields-544-1",
    frame20Props: frame2038Data,
};

const frame2039Data = {
    placeholderText: "Lorem",
};

const inputFields4247Data = {
    frame20Props: frame2039Data,
};

const frame2040Data = {
    placeholderText: "Lorem",
};

const inputFields4248Data = {
    frame20Props: frame2040Data,
};

const inputFields5237Data = {
    placeholderText: "1",
};

const inputFields5238Data = {
    placeholderText: "3",
    className: "input-fields-550-2",
};

const inputFields5239Data = {
    placeholderText: "5",
    className: "input-fields-550-3",
};

const tableRow134Data = {
    cell01Text3Props: cell01Text315Data,
    inputFields41Props: inputFields4245Data,
    inputFields42Props: inputFields4246Data,
    inputFields43Props: inputFields4247Data,
    inputFields44Props: inputFields4248Data,
    inputFields51Props: inputFields5237Data,
    inputFields52Props: inputFields5238Data,
    inputFields53Props: inputFields5239Data,
};

const statusIconSmall236Data = {
    className: "status-icon-small-29-2",
};

const group34Data = {
    className: "group-120",
};

const warning14Data = {
    label: "17",
    groupProps: group34Data,
};

const cell01Text46Data = {
    label: "99",
    className: "cell-01-text-27",
    statusIconSmall2Props: statusIconSmall236Data,
    warningProps: warning14Data,
};

const frame2041Data = {
    placeholderText: "47.2042",
};

const inputFields4249Data = {
    className: "input-fields-544-2",
    frame20Props: frame2041Data,
};

const frame2042Data = {
    placeholderText: "-12.982",
};

const inputFields4250Data = {
    frame20Props: frame2042Data,
};

const frame2043Data = {
    placeholderText: "Lorem",
};

const inputFields4251Data = {
    className: "input-fields-544-3",
    frame20Props: frame2043Data,
};

const frame2044Data = {
    placeholderText: "Lorem",
};

const inputFields4252Data = {
    className: "input-fields-544-4",
    frame20Props: frame2044Data,
};

const inputFields5240Data = {
    placeholderText: "1",
};

const inputFields5241Data = {
    placeholderText: "3",
    className: "input-fields-550-4",
};

const inputFields5242Data = {
    placeholderText: "5",
    className: "input-fields-552",
};

const statusIconSmall237Data = {
    className: "status-icon-small-29-3",
};

const error18Data = {
    label: "99",
    statusIconSmall2Props: statusIconSmall237Data,
};

const group35Data = {
    className: "group-120",
};

const warning15Data = {
    label: "17",
    groupProps: group35Data,
};

const cell01Text316Data = {
    errorProps: error18Data,
    warningProps: warning15Data,
};

const frame2045Data = {
    placeholderText: "47.2042",
};

const inputFields4253Data = {
    className: "input-fields-547",
    frame20Props: frame2045Data,
};

const frame2046Data = {
    placeholderText: "-12.982",
};

const inputFields4254Data = {
    className: "",
    frame20Props: frame2046Data,
};

const frame2047Data = {
    placeholderText: "Lorem",
};

const inputFields4255Data = {
    frame20Props: frame2047Data,
};

const frame2048Data = {
    placeholderText: "Lorem",
};

const inputFields4256Data = {
    frame20Props: frame2048Data,
};

const inputFields5243Data = {
    placeholderText: "1",
};

const inputFields5244Data = {
    placeholderText: "3",
    className: "input-fields-550-5",
};

const inputFields5245Data = {
    placeholderText: "5",
    className: "input-fields-550-6",
};

const tableRow135Data = {
    cell01Text3Props: cell01Text316Data,
    inputFields41Props: inputFields4253Data,
    inputFields42Props: inputFields4254Data,
    inputFields43Props: inputFields4255Data,
    inputFields44Props: inputFields4256Data,
    inputFields51Props: inputFields5243Data,
    inputFields52Props: inputFields5244Data,
    inputFields53Props: inputFields5245Data,
};

const statusIconSmall238Data = {
    className: "status-icon-small-29-4",
};

const error19Data = {
    label: "099",
    className: "group-468-6",
    statusIconSmall2Props: statusIconSmall238Data,
};

const cell01Text510Data = {
    errorProps: error19Data,
};

const frame2049Data = {
    placeholderText: "47.2042",
};

const inputFields4257Data = {
    frame20Props: frame2049Data,
};

const frame2050Data = {
    placeholderText: "-12.982",
};

const inputFields4258Data = {
    className: "input-fields-544-5",
    frame20Props: frame2050Data,
};

const frame2051Data = {
    placeholderText: "Lorem",
};

const inputFields4259Data = {
    className: "input-fields-544-6",
    frame20Props: frame2051Data,
};

const frame2052Data = {
    placeholderText: "Lorem",
};

const inputFields4260Data = {
    className: "",
    frame20Props: frame2052Data,
};

const inputFields5246Data = {
    placeholderText: "1",
};

const inputFields5247Data = {
    placeholderText: "3",
    className: "input-fields-550-7",
};

const inputFields5248Data = {
    placeholderText: "5",
    className: "input-fields-550-8",
};

const tableRow433Data = {
    cell01Text5Props: cell01Text510Data,
    inputFields41Props: inputFields4257Data,
    inputFields42Props: inputFields4258Data,
    inputFields43Props: inputFields4259Data,
    inputFields44Props: inputFields4260Data,
    inputFields51Props: inputFields5246Data,
    inputFields52Props: inputFields5247Data,
    inputFields53Props: inputFields5248Data,
};

const statusIconSmall239Data = {
    className: "status-icon-small-29",
};

const error20Data = {
    label: "099",
    className: "group-468-6",
    statusIconSmall2Props: statusIconSmall239Data,
};

const cell01Text511Data = {
    errorProps: error20Data,
};

const frame2053Data = {
    placeholderText: "47.2042",
};

const inputFields4261Data = {
    frame20Props: frame2053Data,
};

const frame2054Data = {
    placeholderText: "-12.982",
};

const inputFields4262Data = {
    className: "",
    frame20Props: frame2054Data,
};

const frame2055Data = {
    placeholderText: "Lorem",
};

const inputFields4263Data = {
    className: "",
    frame20Props: frame2055Data,
};

const frame2056Data = {
    placeholderText: "Lorem",
};

const inputFields4264Data = {
    className: "input-fields-544-7",
    frame20Props: frame2056Data,
};

const inputFields5249Data = {
    placeholderText: "1",
};

const inputFields5250Data = {
    placeholderText: "3",
    className: "input-fields-550-9",
};

const inputFields5251Data = {
    placeholderText: "5",
    className: "input-fields-550-10",
};

const tableRow434Data = {
    cell01Text5Props: cell01Text511Data,
    inputFields41Props: inputFields4261Data,
    inputFields42Props: inputFields4262Data,
    inputFields43Props: inputFields4263Data,
    inputFields44Props: inputFields4264Data,
    inputFields51Props: inputFields5249Data,
    inputFields52Props: inputFields5250Data,
    inputFields53Props: inputFields5251Data,
};

const group36Data = {
    className: "group-135",
};

const cell01Text221Data = {
    label: "099",
    groupProps: group36Data,
};

const frame2057Data = {
    placeholderText: "47.2042",
};

const inputFields4265Data = {
    className: "",
    frame20Props: frame2057Data,
};

const frame2058Data = {
    placeholderText: "-12.982",
};

const inputFields4266Data = {
    frame20Props: frame2058Data,
};

const frame2059Data = {
    placeholderText: "Lorem",
};

const inputFields4267Data = {
    className: "input-fields-544-8",
    frame20Props: frame2059Data,
};

const frame2060Data = {
    placeholderText: "Lorem",
};

const inputFields4268Data = {
    frame20Props: frame2060Data,
};

const inputFields5252Data = {
    placeholderText: "1",
};

const inputFields5253Data = {
    placeholderText: "3",
    className: "input-fields-550-11",
};

const inputFields5254Data = {
    placeholderText: "5",
    className: "input-fields-550-12",
};

const tableRow624Data = {
    cell01Text2Props: cell01Text221Data,
    inputFields41Props: inputFields4265Data,
    inputFields42Props: inputFields4266Data,
    inputFields43Props: inputFields4267Data,
    inputFields44Props: inputFields4268Data,
    inputFields51Props: inputFields5252Data,
    inputFields52Props: inputFields5253Data,
    inputFields53Props: inputFields5254Data,
};

const group37Data = {
    className: "group-120",
};

const cell01Text222Data = {
    label: "099",
    groupProps: group37Data,
};

const frame2061Data = {
    placeholderText: "47.2042",
};

const inputFields4269Data = {
    className: "input-fields-548",
    frame20Props: frame2061Data,
};

const frame2062Data = {
    placeholderText: "-12.982",
};

const inputFields4270Data = {
    frame20Props: frame2062Data,
};

const frame2063Data = {
    placeholderText: "Lorem",
};

const inputFields4271Data = {
    className: "input-fields-544",
    frame20Props: frame2063Data,
};

const frame2064Data = {
    placeholderText: "Lorem",
};

const inputFields4272Data = {
    frame20Props: frame2064Data,
};

const inputFields5255Data = {
    placeholderText: "1",
};

const inputFields5256Data = {
    placeholderText: "3",
    className: "input-fields-550-13",
};

const inputFields5257Data = {
    placeholderText: "5",
    className: "input-fields-550-14",
};

const tableRow625Data = {
    cell01Text2Props: cell01Text222Data,
    inputFields41Props: inputFields4269Data,
    inputFields42Props: inputFields4270Data,
    inputFields43Props: inputFields4271Data,
    inputFields44Props: inputFields4272Data,
    inputFields51Props: inputFields5255Data,
    inputFields52Props: inputFields5256Data,
    inputFields53Props: inputFields5257Data,
};

const statusIconSmall49Data = {
    className: "status-icon-small-7-1",
};

const cell01Text732Data = {
    statusIconSmallProps: statusIconSmall49Data,
};

const frame2065Data = {
    placeholderText: "47.2042",
};

const inputFields4273Data = {
    frame20Props: frame2065Data,
};

const frame2066Data = {
    placeholderText: "-12.982",
};

const inputFields4274Data = {
    frame20Props: frame2066Data,
};

const frame2067Data = {
    placeholderText: "Lorem",
};

const inputFields4275Data = {
    frame20Props: frame2067Data,
};

const frame2068Data = {
    placeholderText: "Lorem",
};

const inputFields4276Data = {
    frame20Props: frame2068Data,
};

const inputFields5258Data = {
    placeholderText: "1",
};

const inputFields5259Data = {
    placeholderText: "3",
    className: "input-fields-550-15",
};

const inputFields5260Data = {
    placeholderText: "5",
    className: "input-fields-550-16",
};

const tableRow824Data = {
    cell01TextProps: cell01Text732Data,
    inputFields41Props: inputFields4273Data,
    inputFields42Props: inputFields4274Data,
    inputFields43Props: inputFields4275Data,
    inputFields44Props: inputFields4276Data,
    inputFields51Props: inputFields5258Data,
    inputFields52Props: inputFields5259Data,
    inputFields53Props: inputFields5260Data,
};

const statusIconSmall50Data = {
    className: "status-icon-small-7",
};

const cell01Text733Data = {
    statusIconSmallProps: statusIconSmall50Data,
};

const frame2069Data = {
    placeholderText: "47.2042",
};

const inputFields4277Data = {
    frame20Props: frame2069Data,
};

const frame2070Data = {
    placeholderText: "-12.982",
};

const inputFields4278Data = {
    frame20Props: frame2070Data,
};

const frame2071Data = {
    placeholderText: "Lorem",
};

const inputFields4279Data = {
    frame20Props: frame2071Data,
};

const frame2072Data = {
    placeholderText: "Lorem",
};

const inputFields4280Data = {
    frame20Props: frame2072Data,
};

const inputFields5261Data = {
    placeholderText: "1",
};

const inputFields5262Data = {
    placeholderText: "3",
    className: "input-fields-550-17",
};

const inputFields5263Data = {
    placeholderText: "5",
    className: "input-fields-550",
};

const tableRow825Data = {
    cell01TextProps: cell01Text733Data,
    inputFields41Props: inputFields4277Data,
    inputFields42Props: inputFields4278Data,
    inputFields43Props: inputFields4279Data,
    inputFields44Props: inputFields4280Data,
    inputFields51Props: inputFields5261Data,
    inputFields52Props: inputFields5262Data,
    inputFields53Props: inputFields5263Data,
};

const showPage11Data = {
    placeholderText: "10",
};

const pageNumber439Data = {
    children: "2",
};

const pageNumber440Data = {
    children: "3",
};

const pageNumber441Data = {
    children: "4",
};

const pageNumber442Data = {
    children: "5",
};

const pageNumber223Data = {
    children: "6",
};

const pageNumber443Data = {
    children: "7",
};

const pageNumber224Data = {
    children: "8",
};

const pageNumber225Data = {
    children: "9",
};

const pagination8Data = {
    pageNumber1Props: showPage11Data,
    pageNumber1Props2: pageNumber439Data,
    pageNumber2Props: pageNumber440Data,
    pageNumber3Props: pageNumber441Data,
    pageNumber4Props: pageNumber442Data,
    pageNumber21Props: pageNumber223Data,
    pageNumber5Props: pageNumber443Data,
    pageNumber22Props: pageNumber224Data,
    pageNumber23Props: pageNumber225Data,
};

const navigationAction23Data = {
    className: "navigation-action-22",
};

const userInteraction8Data = {
    className: "user-interaction-9",
};

const cBPM11Data = {
    globalHeader4Props: globalHeader425Data,
    localSelectSolutionType3Props: localSelectSolutionType38Data,
    localCardsValidationStatus82Props: localCardsValidationStatus826Data,
    settingProps: setting8Data,
    tableHeader2Props: tableHeader24Data,
    tableRow131Props: tableRow134Data,
    cell01Text4Props: cell01Text46Data,
    inputFields421Props: inputFields4249Data,
    inputFields422Props: inputFields4250Data,
    inputFields423Props: inputFields4251Data,
    inputFields424Props: inputFields4252Data,
    inputFields521Props: inputFields5240Data,
    inputFields522Props: inputFields5241Data,
    inputFields523Props: inputFields5242Data,
    tableRow132Props: tableRow135Data,
    tableRow431Props: tableRow433Data,
    tableRow432Props: tableRow434Data,
    tableRow621Props: tableRow624Data,
    tableRow622Props: tableRow625Data,
    tableRow821Props: tableRow824Data,
    tableRow822Props: tableRow825Data,
    paginationProps: pagination8Data,
    navigationActionProps: navigationAction23Data,
    userInteractionProps: userInteraction8Data,
};

const menuLogo28Data = {
    className: "",
};

const aTOMSICON2019close58Data = {
    className: "atomsicon2019close-22-1",
};

const mOLECULESFORMSEARCH28Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close58Data,
};

const aTOMSICON2019notification27Data = {
    className: "atomsicon2019notification-26",
};

const aTOMSICON2019chatCopy28Data = {
    className: "atomsicon2019chat-copy-27",
};

const globalHeader227Data = {
    className: "global-header-82",
    aTOMSICON2019closeProps: menuLogo28Data,
    aTOMSICON2019closeProps2: mOLECULESFORMSEARCH28Data,
    aTOMSICON2019notificationProps: aTOMSICON2019notification27Data,
    aTOMSICON2019chatCopyProps: aTOMSICON2019chatCopy28Data,
};

const globalHeader426Data = {
    globalHeader2Props: globalHeader227Data,
};

const heading416Data = {
    className: "heading-36",
};

const localSelectSolutionType39Data = {
    heading4Props: heading416Data,
};

const group38Data = {
    className: "",
};

const iconWithLabel49Data = {
    className: "",
    groupProps: group38Data,
};

const localCardsValidationStatus84Data = {
    iconWithLabel4Props: iconWithLabel49Data,
};

const aTOMSICON2019close59Data = {
    className: "atomsicon2019close-22",
};

const frame18317Data = {
    aTOMSICON2019closeProps: aTOMSICON2019close59Data,
};

const searchInput13Data = {
    frame183Props: frame18317Data,
};

const icon13Data = {
    className: "icon-67",
};

const setting9Data = {
    frame18Props: searchInput13Data,
    frame18Props2: icon13Data,
};

const columnHeader217Data = {
    children: "Latitude",
};

const columnHeader317Data = {
    children: "Longtitude",
};

const columnHeader318Data = {
    children: "SR Name",
    className: "column-header-32",
};

const columnHeader218Data = {
    children: "PS Name",
};

const columnHeader633Data = {
    children: "SR Radius (miles)",
};

const columnHeader634Data = {
    children: <React.Fragment>Center Line <br />(miles)</React.Fragment>,
    className: "column-header-41-2",
};

const columnHeader635Data = {
    children: "Sector Count",
};

const columnHeader636Data = {
    children: "No. of RRH’s",
    className: "column-header-41",
};

const rowData119Data = {
    columnHeader21Props: columnHeader217Data,
    columnHeader31Props: columnHeader317Data,
    columnHeader32Props: columnHeader318Data,
    columnHeader22Props: columnHeader218Data,
    columnHeader61Props: columnHeader633Data,
    columnHeader62Props: columnHeader634Data,
    columnHeader63Props: columnHeader635Data,
    columnHeader64Props: columnHeader636Data,
};

const tableHeader5Data = {
    rowDataProps: rowData119Data,
};

const statusIconSmall52Data = {
    className: "status-icon-small-8-1",
};

const cell01Text734Data = {
    statusIconSmallProps: statusIconSmall52Data,
};

const cell02Text176Data = {
    children: "47.2042",
};

const cell02Text177Data = {
    children: "-12.9822",
};

const cell02Text178Data = {
    children: "Lorem",
    className: "cell-0-9",
};

const cell02Text179Data = {
    children: "Lorem Ipsum",
};

const cell06Text209Data = {
    children: "1",
};

const cell06Text210Data = {
    children: "12",
};

const cell06Text211Data = {
    children: "3",
};

const cell06Text212Data = {
    children: "5",
};

const rowData2230Data = {
    cell01TextProps: cell01Text734Data,
    cell02Text1Props: cell02Text176Data,
    cell02Text2Props: cell02Text177Data,
    cell02Text3Props: cell02Text178Data,
    cell02Text4Props: cell02Text179Data,
    cell06Text1Props: cell06Text209Data,
    cell06Text2Props: cell06Text210Data,
    cell06Text3Props: cell06Text211Data,
    cell06Text4Props: cell06Text212Data,
};

const tableRow227Data = {
    rowData2Props: rowData2230Data,
};

const statusIconSmall53Data = {
    className: "status-icon-small-8-2",
};

const cell01Text735Data = {
    statusIconSmallProps: statusIconSmall53Data,
};

const cell02Text180Data = {
    children: "47.2042",
};

const cell02Text181Data = {
    children: "-12.9822",
};

const cell02Text182Data = {
    children: "Lorem",
    className: "",
};

const cell02Text183Data = {
    children: "Lorem Ipsum",
};

const cell06Text213Data = {
    children: "1",
};

const cell06Text214Data = {
    children: "12",
};

const cell06Text215Data = {
    children: "3",
};

const cell06Text216Data = {
    children: "5",
};

const rowData2231Data = {
    cell01TextProps: cell01Text735Data,
    cell02Text1Props: cell02Text180Data,
    cell02Text2Props: cell02Text181Data,
    cell02Text3Props: cell02Text182Data,
    cell02Text4Props: cell02Text183Data,
    cell06Text1Props: cell06Text213Data,
    cell06Text2Props: cell06Text214Data,
    cell06Text3Props: cell06Text215Data,
    cell06Text4Props: cell06Text216Data,
};

const tableRow228Data = {
    rowData2Props: rowData2231Data,
};

const statusIconSmall54Data = {
    className: "status-icon-small-8-3",
};

const cell01Text736Data = {
    statusIconSmallProps: statusIconSmall54Data,
};

const cell02Text184Data = {
    children: "47.2042",
};

const cell02Text185Data = {
    children: "-12.9822",
};

const cell02Text186Data = {
    children: "Lorem",
    className: "",
};

const cell02Text187Data = {
    children: "Lorem Ipsum",
};

const cell06Text217Data = {
    children: "1",
};

const cell06Text218Data = {
    children: "12",
};

const cell06Text219Data = {
    children: "3",
};

const cell06Text220Data = {
    children: "5",
};

const rowData2232Data = {
    cell01TextProps: cell01Text736Data,
    cell02Text1Props: cell02Text184Data,
    cell02Text2Props: cell02Text185Data,
    cell02Text3Props: cell02Text186Data,
    cell02Text4Props: cell02Text187Data,
    cell06Text1Props: cell06Text217Data,
    cell06Text2Props: cell06Text218Data,
    cell06Text3Props: cell06Text219Data,
    cell06Text4Props: cell06Text220Data,
};

const tableRow229Data = {
    rowData2Props: rowData2232Data,
};

const statusIconSmall55Data = {
    className: "status-icon-small-8-4",
};

const cell01Text737Data = {
    statusIconSmallProps: statusIconSmall55Data,
};

const cell02Text188Data = {
    children: "47.2042",
};

const cell02Text189Data = {
    children: "-12.9822",
};

const cell02Text190Data = {
    children: "Lorem",
    className: "",
};

const cell02Text191Data = {
    children: "Lorem Ipsum",
};

const cell06Text221Data = {
    children: "1",
};

const cell06Text222Data = {
    children: "12",
};

const cell06Text223Data = {
    children: "3",
};

const cell06Text224Data = {
    children: "5",
};

const rowData2233Data = {
    cell01TextProps: cell01Text737Data,
    cell02Text1Props: cell02Text188Data,
    cell02Text2Props: cell02Text189Data,
    cell02Text3Props: cell02Text190Data,
    cell02Text4Props: cell02Text191Data,
    cell06Text1Props: cell06Text221Data,
    cell06Text2Props: cell06Text222Data,
    cell06Text3Props: cell06Text223Data,
    cell06Text4Props: cell06Text224Data,
};

const tableRow230Data = {
    rowData2Props: rowData2233Data,
};

const statusIconSmall56Data = {
    className: "status-icon-small-8-5",
};

const cell01Text738Data = {
    statusIconSmallProps: statusIconSmall56Data,
};

const cell02Text192Data = {
    children: "47.2042",
};

const cell02Text193Data = {
    children: "-12.9822",
};

const cell02Text194Data = {
    children: "Lorem",
    className: "",
};

const cell02Text195Data = {
    children: "Lorem Ipsum",
};

const cell06Text225Data = {
    children: "1",
};

const cell06Text226Data = {
    children: "12",
};

const cell06Text227Data = {
    children: "3",
};

const cell06Text228Data = {
    children: "5",
};

const rowData2234Data = {
    cell01TextProps: cell01Text738Data,
    cell02Text1Props: cell02Text192Data,
    cell02Text2Props: cell02Text193Data,
    cell02Text3Props: cell02Text194Data,
    cell02Text4Props: cell02Text195Data,
    cell06Text1Props: cell06Text225Data,
    cell06Text2Props: cell06Text226Data,
    cell06Text3Props: cell06Text227Data,
    cell06Text4Props: cell06Text228Data,
};

const tableRow231Data = {
    rowData2Props: rowData2234Data,
};

const statusIconSmall57Data = {
    className: "status-icon-small-8-6",
};

const cell01Text739Data = {
    statusIconSmallProps: statusIconSmall57Data,
};

const cell02Text196Data = {
    children: "47.2042",
};

const cell02Text197Data = {
    children: "-12.9822",
};

const cell02Text198Data = {
    children: "Lorem",
    className: "",
};

const cell02Text199Data = {
    children: "Lorem Ipsum",
};

const cell06Text229Data = {
    children: "1",
};

const cell06Text230Data = {
    children: "12",
};

const cell06Text231Data = {
    children: "3",
};

const cell06Text232Data = {
    children: "5",
};

const rowData2235Data = {
    cell01TextProps: cell01Text739Data,
    cell02Text1Props: cell02Text196Data,
    cell02Text2Props: cell02Text197Data,
    cell02Text3Props: cell02Text198Data,
    cell02Text4Props: cell02Text199Data,
    cell06Text1Props: cell06Text229Data,
    cell06Text2Props: cell06Text230Data,
    cell06Text3Props: cell06Text231Data,
    cell06Text4Props: cell06Text232Data,
};

const tableRow232Data = {
    rowData2Props: rowData2235Data,
};

const group39Data = {
    className: "group-137",
};

const cell01Text223Data = {
    label: "01",
    groupProps: group39Data,
};

const cell02Text200Data = {
    children: "47.2042",
};

const cell02Text201Data = {
    children: "-12.9822",
};

const lOCALWARNINGICON13Data = {
    className: "",
};

const cell02Text202Data = {
    children: "Lorem Ipsum",
};

const cell06Text233Data = {
    children: "1",
};

const cell06Text234Data = {
    children: "12",
};

const cell06Text235Data = {
    children: "3",
};

const cell06Text236Data = {
    children: "5",
};

const rowData310Data = {
    cell01Text2Props: cell01Text223Data,
    cell02Text1Props: cell02Text200Data,
    cell02Text2Props: cell02Text201Data,
    lOCALWARNINGICONProps: lOCALWARNINGICON13Data,
    cell02Text3Props: cell02Text202Data,
    cell06Text1Props: cell06Text233Data,
    cell06Text2Props: cell06Text234Data,
    cell06Text3Props: cell06Text235Data,
    cell06Text4Props: cell06Text236Data,
};

const tableRow78Data = {
    rowData3Props: rowData310Data,
};

const statusIconSmall58Data = {
    className: "status-icon-small-8-7",
};

const cell01Text740Data = {
    statusIconSmallProps: statusIconSmall58Data,
};

const cell02Text203Data = {
    children: "47.2042",
};

const cell02Text204Data = {
    children: "-12.9822",
};

const cell02Text205Data = {
    children: "Lorem",
    className: "",
};

const cell02Text206Data = {
    children: "Lorem Ipsum",
};

const cell06Text237Data = {
    children: "1",
};

const cell06Text238Data = {
    children: "12",
};

const cell06Text239Data = {
    children: "3",
};

const cell06Text240Data = {
    children: "5",
};

const rowData2236Data = {
    cell01TextProps: cell01Text740Data,
    cell02Text1Props: cell02Text203Data,
    cell02Text2Props: cell02Text204Data,
    cell02Text3Props: cell02Text205Data,
    cell02Text4Props: cell02Text206Data,
    cell06Text1Props: cell06Text237Data,
    cell06Text2Props: cell06Text238Data,
    cell06Text3Props: cell06Text239Data,
    cell06Text4Props: cell06Text240Data,
};

const tableRow233Data = {
    rowData2Props: rowData2236Data,
};

const statusIconSmall59Data = {
    className: "status-icon-small-8",
};

const cell01Text741Data = {
    statusIconSmallProps: statusIconSmall59Data,
};

const cell02Text207Data = {
    children: "47.2042",
};

const cell02Text208Data = {
    children: "12.9822",
};

const cell02Text209Data = {
    children: "Lorem",
    className: "",
};

const cell02Text210Data = {
    children: "Lorem Ipsum",
};

const cell06Text241Data = {
    children: "1",
};

const cell06Text242Data = {
    children: "12",
};

const cell06Text243Data = {
    children: "3",
};

const cell06Text244Data = {
    children: "5",
};

const rowData2237Data = {
    cell01TextProps: cell01Text741Data,
    cell02Text1Props: cell02Text207Data,
    cell02Text2Props: cell02Text208Data,
    cell02Text3Props: cell02Text209Data,
    cell02Text4Props: cell02Text210Data,
    cell06Text1Props: cell06Text241Data,
    cell06Text2Props: cell06Text242Data,
    cell06Text3Props: cell06Text243Data,
    cell06Text4Props: cell06Text244Data,
};

const tableRow234Data = {
    rowData2Props: rowData2237Data,
};

const showPage12Data = {
    placeholderText: "10",
};

const pageNumber444Data = {
    children: "2",
};

const pageNumber445Data = {
    children: "3",
};

const pageNumber446Data = {
    children: "4",
};

const pageNumber447Data = {
    children: "5",
};

const pageNumber226Data = {
    children: "6",
};

const pageNumber448Data = {
    children: "7",
};

const pageNumber227Data = {
    children: "8",
};

const pageNumber228Data = {
    children: "9",
};

const pagination9Data = {
    className: "pagination-11",
    pageNumber1Props: showPage12Data,
    pageNumber1Props2: pageNumber444Data,
    pageNumber2Props: pageNumber445Data,
    pageNumber3Props: pageNumber446Data,
    pageNumber4Props: pageNumber447Data,
    pageNumber21Props: pageNumber226Data,
    pageNumber5Props: pageNumber448Data,
    pageNumber22Props: pageNumber227Data,
    pageNumber23Props: pageNumber228Data,
};

const navigationAction24Data = {
    className: "navigation-action-23",
};

const userInteraction9Data = {
    className: "user-interaction-10",
};

const cBPM12Data = {
    action: "Add Record",
    globalHeader4Props: globalHeader426Data,
    localSelectSolutionType3Props: localSelectSolutionType39Data,
    localCardsValidationStatus8Props: localCardsValidationStatus84Data,
    settingProps: setting9Data,
    tableHeaderProps: tableHeader5Data,
    tableRow21Props: tableRow227Data,
    tableRow22Props: tableRow228Data,
    tableRow23Props: tableRow229Data,
    tableRow24Props: tableRow230Data,
    tableRow25Props: tableRow231Data,
    tableRow26Props: tableRow232Data,
    tableRow7Props: tableRow78Data,
    tableRow27Props: tableRow233Data,
    tableRow28Props: tableRow234Data,
    paginationProps: pagination9Data,
    navigationActionProps: navigationAction24Data,
    userInteractionProps: userInteraction9Data,
};



