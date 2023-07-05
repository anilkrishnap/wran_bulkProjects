import React from "react";
import Checkbox from "../Checkbox";
import "./Frame503.css";

function Frame503(props) {
  const { checkbox1Props, checkbox2Props } = props;

  return (
    <div className="frame-503">
      <div className="add-carrier neuehaasgroteskdisplaystd-bold-black-14px">Add Carrier</div>
      <div className="frame-502">
        <Checkbox placeholderText={checkbox1Props.placeholderText} />
        <Checkbox placeholderText={checkbox2Props.placeholderText} />
      </div>
    </div>
  );
}

export default Frame503;
