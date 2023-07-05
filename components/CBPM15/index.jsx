import React from "react";
import TemplateCreateBulkProjectsNew from "../TemplateCreateBulkProjectsNew";
import UserInteraction from "../UserInteraction";
import "./CBPM15.css";
import {Link} from "react-router-dom";

function CBPM15(props) {
  const { templateCreateBulkProjectsNewProps, userInteractionProps } = props;


  return (
    <div className="container-center-horizontal">
      <div className="cbpm-15 screen">
        <div className="overlap-group4-4">
          <TemplateCreateBulkProjectsNew {...templateCreateBulkProjectsNewProps} />
          <UserInteraction className={userInteractionProps.className}/>
          <div className="nxt_btn">
            <Link to="/Cbpm-16" style={{color:'inherit', textDecoration:'none'}}>Show Next</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CBPM15;
