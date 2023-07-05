import React from "react";
import ShowPage from "../ShowPage";
import Arrow from "../Arrow";
import PageNumber from "../PageNumber";
import PageNumber4 from "../PageNumber4";
import PageNumber2 from "../PageNumber2";
import GoTo from "../GoTo";
import Button from "../Button";
import "./Pagination.css";

function Pagination(props) {
  const {
    className,
    pageNumber1Props,
    pageNumber1Props2,
    pageNumber2Props,
    pageNumber3Props,
    pageNumber4Props,
    pageNumber21Props,
    pageNumber5Props,
    pageNumber22Props,
    pageNumber23Props,
  } = props;

  return (
    <div className={`pagination-3 ${className || ""}`}>
      <div className="information-3">
        <ShowPage placeholderText={pageNumber1Props.placeholderText} />
        <p className="displaying-5-of-50-rows-3 neuehaasgroteskdisplaystd-regular-normal-black-14px">
          Displaying 10 of 30 Rows
        </p>
      </div>
      <div className="page-3">
        <div className="pages-3">
          <Arrow />
          <PageNumber />
          <PageNumber4>{pageNumber1Props2.children}</PageNumber4>
          <PageNumber4>{pageNumber2Props.children}</PageNumber4>
          <PageNumber4>{pageNumber3Props.children}</PageNumber4>
          <PageNumber4>{pageNumber4Props.children}</PageNumber4>
          <PageNumber2>{pageNumber21Props.children}</PageNumber2>
          <PageNumber4>{pageNumber5Props.children}</PageNumber4>
          <PageNumber2>{pageNumber22Props.children}</PageNumber2>
          <PageNumber2>{pageNumber23Props.children}</PageNumber2>
          <div className="page-number-36">
            <div className="placeholder-text-211 neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">10</div>
          </div>
          <Arrow />
        </div>
      </div>
      <GoTo />
      <Button />
    </div>
  );
}

export default Pagination;
