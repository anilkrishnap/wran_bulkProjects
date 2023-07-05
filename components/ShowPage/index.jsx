import React from "react";
import "./ShowPage.css";

function ShowPage(props) {
  const { placeholderText } = props;

  return (
    <div className="show-page">
      <div className="input-fields-38">
        <div className="elements-68">
          <div className="frame-31-1">
            <div className="placeholder-text-84 neuehaasgroteskdisplaystd-regular-normal-black-14px">
              {placeholderText}
            </div>
            <img
              className="atomsicon2019close-60"
              src="/img/atoms-icon-2019-close-206.svg"
              alt="ATOMS/ICON/2019/close"
            />
          </div>
          <div className="divider-75"></div>
        </div>
      </div>
    </div>
  );
}

export default ShowPage;
