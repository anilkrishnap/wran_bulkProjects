import React from "react";
import Checkbox2 from "../Checkbox2";
import "./MenuItem.css";
import {Link} from "react-router-dom";

function MenuItem(props) {
  const { checkbox2Props } = props;

  return (
    <Link to="cbpm-25">
    <div className="menu-item-2">
      <Checkbox2 placeholderText={checkbox2Props.placeholderText} />
      <div className="divider-186"></div>
    </div>
    </Link>
  );
}

export default MenuItem;
