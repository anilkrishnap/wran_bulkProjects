import React from "react";
import TableAction from "../TableAction";
import Setting from "../Setting";
import "./ActionBar4.css";

function ActionBar4(props) {
  const { settingProps } = props;

  return (
    <div className="action-bar-14">
      <div className="overlap-group1-45">
        <div className="action-bar-items-14">
          <div className="action-menu-14">
            <TableAction />
          </div>
          <Setting frame18Props={settingProps.frame18Props} frame18Props2={settingProps.frame18Props2} />
        </div>
        <div className="divider-291"></div>
      </div>
    </div>
  );
}

export default ActionBar4;
