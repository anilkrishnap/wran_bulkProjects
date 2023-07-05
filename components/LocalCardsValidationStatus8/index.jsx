import React from "react";
import TitleAndIcon from "../TitleAndIcon";
import LocalStatusCard from "../LocalStatusCard";
import IconWithLabel from "../IconWithLabel";
import IconWithLabel2 from "../IconWithLabel2";
import IconWithLabel3 from "../IconWithLabel3";
import IconWithLabel4 from "../IconWithLabel4";
import "./LocalCardsValidationStatus8.css";

function LocalCardsValidationStatus8(props) {
  const { iconWithLabel4Props } = props;

  return (
    <div className="local-cards-validation-status-8">
      <TitleAndIcon />
      <div className="status-cards neuehaasgroteskdisplaystd-bold-black-32px">
        <LocalStatusCard />
        <div className="local-status-card">
          <div className="x490">500</div>
          <IconWithLabel />
        </div>
        <div className="local-status-card">
          <div className="x490">0</div>
          <IconWithLabel2 />
        </div>
        <div className="local-status-card">
          <div className="x490">0</div>
          <IconWithLabel3 />
        </div>
        <div className="local-status-card">
          <div className="x490">09</div>
          <IconWithLabel4 className={iconWithLabel4Props.className} groupProps={iconWithLabel4Props.groupProps} />
        </div>
      </div>
    </div>
  );
}

export default LocalCardsValidationStatus8;
