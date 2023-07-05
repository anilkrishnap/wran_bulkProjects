import React from "react";
import TitleAndIcon from "../TitleAndIcon";
import LocalStatusCard from "../LocalStatusCard";
import IconWithLabel from "../IconWithLabel";
import IconWithLabel2 from "../IconWithLabel2";
import IconWithLabel3 from "../IconWithLabel3";
import IconWithLabel4 from "../IconWithLabel4";
import "./LocalCardsValidationStatus82.css";

function LocalCardsValidationStatus82(props) {
  const { iconWithLabel4Props } = props;

  return (
    <div className="local-cards-validation-status-8-4">
      <TitleAndIcon />
      <div className="status-cards-4 neuehaasgroteskdisplaystd-bold-black-32px">
        <LocalStatusCard />
        <div className="local-status-card-13">
          <div className="number">490</div>
          <IconWithLabel />
        </div>
        <div className="local-status-card-13">
          <div className="x490-13">10</div>
          <IconWithLabel2 />
        </div>
        <div className="local-status-card-13">
          <div className="x490-14">327</div>
          <IconWithLabel3 />
        </div>
        <div className="local-status-card-13">
          <div className="x490-15">237</div>
          <IconWithLabel4 groupProps={iconWithLabel4Props.groupProps} />
        </div>
      </div>
    </div>
  );
}

export default LocalCardsValidationStatus82;
