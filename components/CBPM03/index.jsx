import React from "react";
import TemplateCreateBulkProjects3 from "../TemplateCreateBulkProjects3";
import UserInteraction from "../UserInteraction";
import "./CBPM03.css";

function CBPM03(props) {
  const { templateCreateBulkProjects3Props, userInteractionProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="cbpm-03 screen">
        <div className="overlap-group3-9">
          <TemplateCreateBulkProjects3
            globalHeaderProps={templateCreateBulkProjects3Props.globalHeaderProps}
            emptyTableProps={templateCreateBulkProjects3Props.emptyTableProps}
            navigationActionProps={templateCreateBulkProjects3Props.navigationActionProps}
          />
          <UserInteraction className={userInteractionProps.className} />
        </div>
      </div>
    </div>
  );
}

export default CBPM03;
