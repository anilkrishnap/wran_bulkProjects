import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import Fields3 from "../Fields3";
import EmptyTable from "../EmptyTable";
import NavigationAction from "../NavigationAction";
import "./TemplateCreateBulkProjects3.css";

function TemplateCreateBulkProjects3(props) {
  const { globalHeaderProps, emptyTableProps, navigationActionProps } = props;

  return (
    <div className="template-create-bulk-projects-3-1">
      <GlobalHeader4 globalHeader2Props={globalHeaderProps.globalHeader2Props} />
      <Frame4744 />
      <div className="local-window-empty-table">
        <div className="navigation-window-14">
          <div className="overlap-group2-5">
            <div className="body-14">
              <div className="empty-table-with-solution-sites">
                <div className="local-select-solution-type-4">
                  <div className="heading-23">
                    <div className="placeholder-text-230 neuehaasgroteskdisplaystd-bold-black-20px">
                      Solution&nbsp;&nbsp;Sites
                    </div>
                    <div className="atomsdividersline2-pxblack-7"></div>
                  </div>
                  <Fields3 />
                </div>
                <EmptyTable {...emptyTableProps} />
                <div className="divider-236"></div>
              </div>
            </div>
            <NavigationAction className={navigationActionProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCreateBulkProjects3;
