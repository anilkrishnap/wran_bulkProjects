import React from "react";
import ColumnHeader1 from "../ColumnHeader1";
import "./Header.css";

function Header(props) {
  const {
    className,
    columnHeader11Props,
    columnHeader12Props,
    columnHeader13Props,
    columnHeader14Props,
    columnHeader15Props,
  } = props;

  return (
    <header className={`header ${className || ""}`}>
      <div className="table-4">
        <div className="table-header-3">
          <div className="inputs-29">
            <img className="accordion-margin-3" src="/img/accordion-margin@2x.png" alt="Accordion Margin" />
            <div className="row-data-8">
              <ColumnHeader1>{columnHeader11Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader12Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader13Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader14Props.children}</ColumnHeader1>
              <ColumnHeader1>{columnHeader15Props.children}</ColumnHeader1>
            </div>
          </div>
          <div className="divider-157"></div>
        </div>
        <div className="scrollbar-5"></div>
      </div>
      <div className="divider-158"></div>
    </header>
  );
}

export default Header;
