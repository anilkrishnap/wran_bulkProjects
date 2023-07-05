import React from "react";
import GlobalHeader4 from "../GlobalHeader4";
import Frame4744 from "../Frame4744";
import LocalSelectSolutionType32 from "../LocalSelectSolutionType32";
import EmptyTable from "../EmptyTable";
import NavigationAction from "../NavigationAction";
import "./TemplateCreateBulkProjects32.css";

function TemplateCreateBulkProjects32(props) {
  const { globalHeaderProps, localSelectSolutionType32Props, emptyTableProps, navigationActionProps } = props;

  return (
    <div className="template-create-bulk-projects-3-3">
      <GlobalHeader4 globalHeader2Props={globalHeaderProps.globalHeader2Props} />
      <Frame4744 />
      <div className="local-window-empty-table-2">
        <div className="navigation-window-17">
          <div className="overlap-group2-7">
            <div className="body-17">
              <div className="empty-table-with-solution-sites-2">
                <LocalSelectSolutionType32 headingProps={localSelectSolutionType32Props.headingProps} />
                <EmptyTable {...emptyTableProps} />
                <div className="divider-259"></div>
              </div>
            </div>
            <NavigationAction className={navigationActionProps.className} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default TemplateCreateBulkProjects32;
