import React from "react";
import ColumnHeader1 from "../ColumnHeader1";
import TableRow1 from "../TableRow1";
import Scrollbar2 from "../Scrollbar2";
import ShowPage from "../ShowPage";
import Arrow from "../Arrow";
import PageNumber from "../PageNumber";
import PageNumber4 from "../PageNumber4";
import GoTo from "../GoTo";
import Button from "../Button";
import "./Frame504.css";

function Frame504(props) {
  const {
    columnHeader11Props,
    columnHeader12Props,
    columnHeader13Props,
    columnHeader14Props,
    columnHeader15Props,
    tableRow11Props,
    tableRow12Props,
    tableRow13Props,
    showPageProps,
    pageNumber4Props,
  } = props;

  return (
    <div className="frame-504">
      <div className="table">
        <div className="table-header">
          <div className="inputs-19">
            <img className="accordion-margin" src="/img/accordion-margin@2x.png" alt="Accordion Margin" />
            <div className="row-data">
              <ColumnHeader1>{columnHeader11Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader12Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader13Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader14Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader15Props.children}</ColumnHeader1>
            </div>
          </div>
          <div className="divider-66"></div>
        </div>
        <TableRow1
          placeholderText={tableRow11Props.placeholderText}
          cell01Text1Props={tableRow11Props.cell01Text1Props}
          cell01Text2Props={tableRow11Props.cell01Text2Props}
          cell01Text3Props={tableRow11Props.cell01Text3Props}
          cell01Text4Props={tableRow11Props.cell01Text4Props}
        />
        <TableRow1
          placeholderText={tableRow12Props.placeholderText}
          cell01Text1Props={tableRow12Props.cell01Text1Props}
          cell01Text2Props={tableRow12Props.cell01Text2Props}
          cell01Text3Props={tableRow12Props.cell01Text3Props}
          cell01Text4Props={tableRow12Props.cell01Text4Props}
        />
        <TableRow1
          placeholderText={tableRow13Props.placeholderText}
          cell01Text1Props={tableRow13Props.cell01Text1Props}
          cell01Text2Props={tableRow13Props.cell01Text2Props}
          cell01Text3Props={tableRow13Props.cell01Text3Props}
          cell01Text4Props={tableRow13Props.cell01Text4Props}
        />
        <Scrollbar2 />
        <div className="pagination">
          <div className="information">
            <ShowPage placeholderText={showPageProps.placeholderText} />
            <p className="displaying-5-of-50-rows neuehaasgroteskdisplaystd-regular-normal-black-14px">
              Displaying 2 of 2 Rows
            </p>
          </div>
          <div className="page">
            <div className="pages">
              <Arrow />
              <PageNumber />
              <PageNumber4>{pageNumber4Props.children}</PageNumber4>
              <Arrow />
            </div>
          </div>
          <GoTo />
          <Button />
        </div>
      </div>
      <div className="divider-67"></div>
    </div>
  );
}

export default Frame504;
