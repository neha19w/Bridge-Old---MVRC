import React from "react";
import "./Issues.css";
import { useDispatch, useSelector } from "react-redux";
import { Modal } from "react-bootstrap";
import cross_icon from "../static/images/cross_icon.svg";
import left_arrow from "../static/images/left_arrow.svg";
import right_arrow from "../static/images/right_arrow.svg";
import { setShowIssues } from "../redux/actions/actions";

const Issues = () => {
  const dispatch = useDispatch();
  const showIssuesModal = useSelector((state) => state.showIssues.showIssues);
  const showFindModal = useSelector((state) => state.showFind.showFind);
  const handleClose = () => {
    dispatch(setShowIssues(false));
  };

  return (
   <div className={showFindModal?"custom-dialog-issues2":"custom-dialog-issues"}>
    
    { showIssuesModal?(  <div className="issues-body">
            <div className="t-icon">
              <img src={left_arrow} className="t-icon-img" alt="close issues" />
            </div>
            <div className="i-icon"></div>
            <div className="i-icon"></div>
            <div className="i-icon"></div>
            <div className="i-icon"></div>
            <div className="i-icon"></div>
            <div className="i-icon"></div>
            <div className="t-icon">
              <img src={right_arrow} className="t-icon-img" alt="close issues" />
            </div>
            <div className="t-icon" onClick={handleClose}>
              <img src={cross_icon} className="t-icon-img" alt="close alert" />
            </div>
          </div>):null}
      
    </div>
  );
};
export default Issues;
