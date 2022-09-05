import "./ActiveFeed.css";
import React from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import { setAnnotationList, setShowActiveFeed, setWords } from "../redux/actions/actions";
import FeedInput from "../feedInput/FeedInput";

const ActiveFeed = () => {
  const dispatch = useDispatch();
  
  const showActiveFeedModal = useSelector(
    (state) => state.showActiveFeed.showActiveFeed
  );

  const handleClose = () => {
    console.log("close");
    dispatch(setShowActiveFeed(false));
    dispatch(setWords(""));
    dispatch(setAnnotationList(""));
  };
  return (
     
    <div>
       
   {showActiveFeedModal?   <div className="demoFeed-body">
            <div className="demoFeed-header">
              <Button type="btn" className="demoFeed-text">Demo Feed{" "}
                <button className="demoFeed-close-btn" onClick={handleClose}>
                  {" "} 
                 
                  <img src={cross_icon} alt="close alert" width={15} />
                </button>
              </Button>
            </div>
            <div className="input-feed mt-2 px-2">
                 <FeedInput/>
            </div>
          </div>:null}
       
    </div>
  );
};
export default ActiveFeed;
