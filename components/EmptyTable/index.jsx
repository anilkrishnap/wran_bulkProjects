import React from "react";
import TableAction5 from "../TableAction5";
import TableAction2 from "../TableAction2";
import Icon4 from "../Icon4";
import Frame183 from "../Frame183";
import Icon2 from "../Icon2";
import ColumnHeader13 from "../ColumnHeader13";
import ColumnHeader22 from "../ColumnHeader22";
import "./EmptyTable.css";

function EmptyTable(props) {
  const {
    frame18Props,
    columnHeader11Props,
    columnHeader221Props,
    columnHeader12Props,
    columnHeader13Props,
    columnHeader222Props,
    columnHeader14Props,
    columnHeader15Props,
    columnHeader16Props,
    columnHeader17Props,
  } = props;

  return (
    <div className="empty-table">
      <div className="table-14">
        <div className="action-bar-5">
          <div className="overlap-group-72">
            <div className="action-bar-items-5">
              <div className="action-menu-5">
                <TableAction5 />
                <TableAction2 />
                <div className="table-action-3">
                  <Icon4 />
                  <div className="action-3 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                    Download Bulk Solution Template
                  </div>
                </div>
              </div>
              <div className="setting-13">
                <div className="search-input-14">
                  <Frame183 aTOMSICON2019closeProps={frame18Props.aTOMSICON2019closeProps} />
                </div>
                <Icon2 />
                <Icon2 />
              </div>
            </div>
            <div className="divider-238"></div>
          </div>
        </div>
        <div className="table-header-11">
          <div className="inputs-50">
            <img className="inputs-item" src="/img/accordion-margin@2x.png" alt="Accordion Margin" />
            <img className="inputs-item" src="/img/checkbox-9.svg" alt="Checkbox" />
            <div className="row-data-36">
              <ColumnHeader13>{columnHeader11Props.children}</ColumnHeader13>
              <ColumnHeader22>{columnHeader221Props.children}</ColumnHeader22>
              <ColumnHeader13 className={columnHeader12Props.className}>{columnHeader12Props.children}</ColumnHeader13>
              <ColumnHeader13 className={columnHeader13Props.className}>{columnHeader13Props.children}</ColumnHeader13>
              <ColumnHeader22>{columnHeader222Props.children}</ColumnHeader22>
              <ColumnHeader13 className={columnHeader14Props.className}>{columnHeader14Props.children}</ColumnHeader13>
              <ColumnHeader13 className={columnHeader15Props.className}>{columnHeader15Props.children}</ColumnHeader13>
              <ColumnHeader13>{columnHeader16Props.children}</ColumnHeader13>
              <ColumnHeader13>{columnHeader17Props.children}</ColumnHeader13>
            </div>
          </div>
          <div className="divider-239"></div>
        </div>
      </div>
      <p className="click-here-to-upload valign-text-bottom neuehaasgroteskdisplaystd-regular-normal-white-14px-2">
        <span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">Click here to </span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-deep-cerulean-14px">upload</span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px"> or </span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-deep-cerulean-14px">download</span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px">
            {" "}
            the bulk solution template. You can also add data by clicking on{" "}
          </span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-deep-cerulean-14px">add record</span>
          <span className="neuehaasgroteskdisplaystd-regular-normal-sonic-silver-14px"> from the table option</span>
        </span>
      </p>
      <div className="divider-240"></div>
    </div>
  );
}

export default EmptyTable;
