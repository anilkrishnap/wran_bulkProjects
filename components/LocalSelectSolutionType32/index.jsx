import React from "react";
import Heading4 from "../Heading4";
import Fields3 from "../Fields3";
import "./LocalSelectSolutionType32.css";

function LocalSelectSolutionType32(props) {
  const { headingProps } = props;

  return (
    <div className="local-select-solution-type-4-2">
      <Heading4 className={headingProps.className} />
      <Fields3 />
    </div>
  );
}

export default LocalSelectSolutionType32;
