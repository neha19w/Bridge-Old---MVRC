import React from "react";
import "./Find.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowFind } from "../redux/actions/actions";
import { Modal } from "react-bootstrap";
import cross_icon from "../static/images/cross_icon.svg";
import up_arr from "../static/images/up_arr.svg";
import downarrow from "../static/images/downarrow.svg";
const Find = () => {
  const dispatch = useDispatch();
  const showFindModal = useSelector((state) => state.showFind.showFind);
  const showIssuesModal = useSelector((state) => state.showIssues.showIssues);
  const handleClose = () => {
    dispatch(setShowFind(false));
  };
 
  return (
   
       <div className="custom-dialog-find">
     
        {showFindModal?(  <div className="find-body">
            <div className="f-text">
              <p>Find : &nbsp;</p>
              <div className="search-container">
                {" "}
                <input type="text" className="f-search" name="search" />
              </div>
            </div>
            {/* <div className="t-icon"><img className="t-icon-img" alt="close alert" /></div> */}

            <div className="f-icon">
              <img src={downarrow} className="f-icon-img" alt="down_icon" />
            </div>
            <div className="f-icon">
              <img src={up_arr} className="f-icon-img" alt="up_icon" />
            </div>
            <div className="f-icon" onClick={handleClose}>
              <img src={cross_icon} className="f-icon-img" alt="close alert" />
            </div>
          </div>):null}
       
    </div>
  );
};

export default Find;
