import React from "react";
import Heading4 from "../Heading4";
import Fields3 from "../Fields3";
import "./LocalSelectSolutionType3.css";

function LocalSelectSolutionType3(props) {
  const { heading4Props } = props;

  return (
    <div className="local-select-solution-type-3">
      <Heading4 className={heading4Props.className} />
      <Fields3 />
    </div>
  );
}

export default LocalSelectSolutionType3;
