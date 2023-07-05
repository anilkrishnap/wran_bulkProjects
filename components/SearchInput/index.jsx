import React from "react";
import Frame183 from "../Frame183";
import "./SearchInput.css";

function SearchInput(props) {
  const { frame183Props } = props;

  return (
    <div className="search-input">
      <Frame183 aTOMSICON2019closeProps={frame183Props.aTOMSICON2019closeProps} />
      <div className="elements-88"></div>
    </div>
  );
}

export default SearchInput;
