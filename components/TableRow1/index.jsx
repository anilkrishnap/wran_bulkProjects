import React from "react";
import Cell01Text from "../Cell01Text";
import "./TableRow1.css";
import {Link} from "react-router-dom";

function TableRow1(props) {
  const { placeholderText, cell01Text1Props, cell01Text2Props, cell01Text3Props, cell01Text4Props } = props;

  return (
    <>
      <div className="click_icon" id="dropDownClick" style={{position:'absolute', top:'90px', left:'550px', zIndex:'9'}}><img src="/img/click_hand_icon.svg" alt="Click" style={{transform:'rotate(360deg)'}}/></div>
      <div className="table-row">
      <div className="inputs-22">
        <img className="icon-26" src="/img/accordion-margin@2x.png" alt="Icon" />
        
        <div className="row-data-3">
          <Cell01Text>{cell01Text1Props.children}</Cell01Text>
          <Cell01Text>{cell01Text2Props.children}</Cell01Text>
         
          
          <div className="cell-03-text">
            <div className="frame-18-39">
            <Link to="/cbpm-26">
              <div className="frame-32-28">
                <div className="placeholder-text-81 neuehaasgroteskdisplaystd-regular-normal-black-14px">
                  {placeholderText}
                </div>
              </div>
              </Link>
              <img
                className="atomsicon2019close-57"
                src="/img/atoms-icon-2019-close-203.svg"
                alt="ATOMS/ICON/2019/close"
              />
            </div>
            <div className="elements-65"></div>
          </div>
          
          <Cell01Text>{cell01Text3Props.children}</Cell01Text>
          <Cell01Text>{cell01Text4Props.children}</Cell01Text>
        </div>
      </div>
      <div className="divider-72"></div>
      
    </div>
    </>
  
    
  );
}

export default TableRow1;
