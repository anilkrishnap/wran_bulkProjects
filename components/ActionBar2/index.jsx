import React from "react";
import TableAction5 from "../TableAction5";
import TableAction2 from "../TableAction2";
import TableAction4 from "../TableAction4";
import Setting from "../Setting";
import "./ActionBar2.css";

function ActionBar2(props) {
  const { settingProps } = props;

  return (
    <div className="action-bar-9">
      <div className="overlap-group1-40">
        <div className="action-bar-items-9">
          <div className="action-menu-9">
            <TableAction5 />
            <TableAction2 />
            <TableAction4 />
          </div>
          <Setting frame18Props={settingProps.frame18Props} frame18Props2={settingProps.frame18Props2} />
        </div>
        <div className="divider-252"></div>
      </div>
    </div>
  );
}

export default ActionBar2;
