import React from "react";
import Heading3 from "../Heading3";
import Fields from "../Fields";
import Frame503 from "../Frame503";
import "./SolutionDetails.css";

function SolutionDetails(props) {
  const { inputFields2Props, frame503Props } = props;

  return (
    <div className="solution-details-1">
      <Heading3 />
      <Fields
        inputsProps={inputFields2Props.inputsProps}
        inputs2Props={inputFields2Props.inputs2Props}
        inputFields2Props={inputFields2Props.inputFields2Props}
      />
      <div className="action-items-1">
        <Frame503 checkbox1Props={frame503Props.checkbox1Props} checkbox2Props={frame503Props.checkbox2Props} />
      </div>
    </div>
  );
}

export default SolutionDetails;
