import React from "react";
import SearchInput from "../SearchInput";
import Icon from "../Icon";
import "./Setting.css";

function Setting(props) {
  const { frame18Props, frame18Props2 } = props;

  return (
    <div className="setting-4">
      <SearchInput frame183Props={frame18Props.frame183Props} />
      <div className="icon-104"></div>
      <Icon className={frame18Props2.className} />
    </div>
  );
}

export default Setting;
