import React from "react";
import LOCALWARNINGICON from "../LOCALWARNINGICON";
import "./Table3.css";

function Table3(props) {
  const { lOCALWARNINGICONProps } = props;

  return (
    <div className="table-25">
      <div className="text-icon-33">
        <LOCALWARNINGICON className={lOCALWARNINGICONProps.className} />
        <div className="label-353 neuehaasgroteskdisplaystd-regular-normal-black-14px">Lorem Ipsum</div>
      </div>
    </div>
  );
}

export default Table3;
