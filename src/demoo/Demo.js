import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowDemo, setShowActiveFeed } from "../redux/actions/actions";
import "./Demo.css";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import minus from "../static/images/minus-round.svg";
import plus from "../static/images/plus.svg";
import ActiveFeed from "../activeFeed/ActiveFeed";

const Demo = () => {
  const dispatch = useDispatch();

  const showDemoModal = useSelector((state) => state.showDemo.showDemo);

  const handleClose = () => {
    dispatch(setShowDemo(false));
  };

  const closeDemo = () => {
    dispatch(setShowDemo(false));
  };

  const openDemoFeedModal = () => {
    dispatch(setShowDemo(false));
    dispatch(setShowActiveFeed(true));
  };
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive((current) => !current);
  };

  const showList = () => {
    const x = document.getElementById("showListId");
    const y = document.getElementById("showListLabelImg");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.src = minus;
    } else {
      x.style.display = "none";
      y.src = plus.toString();
    }
  };

  return (
    <>
      <div>
        {/* Demo modal */}
        <Modal
          show={showDemoModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          contentClassName="demo-wrap"
          size="lg"
        >
          <Modal.Body>
            <div className="demo-body">
              <h4 className="header-text">Connect to..</h4>
              <div className="demo-background">
                <div className="demo-content">
                  <div className="demo-content1">
                    {" "}
                    <div>
                      <h5 className="m-3 showBack" onClick={showList}>
                        {" "}
                        <img
                          id="showListLabelImg"
                          src={plus}
                          alt="minus"
                          width={12}
                        />{" "}
                        &nbsp;Local
                      </h5>
                      <button
                        id="showListId"
                        style={{
                          border: "none",
                          display: "none",
                          backgroundColor: isActive ? "black" : "white",
                          color: isActive ? "white" : "",
                        }}
                        className="sub-text"
                        onClick={handleClick}
                      >
                        Demo feed
                      </button>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <label className="col-2">
                        <b>Session:</b>
                      </label>
                      <input
                        className="col-10 text-input"
                        type="text"
                        placeholder="Demo feed"
                      />
                    </div>

                    <div>
                      <label className="col-2">
                        <b>Password:</b>{" "}
                      </label>
                      <input className="col-10 text-input" type="password" />
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-row">
                      {" "}
                      <Button
                        variant="btn col-6 demo-close-btn"
                        onClick={openDemoFeedModal}
                      >
                        <img src={right_icon} alt="close alert" />
                      </Button>
                      <Button
                        variant="btn col-6 demo-close-btn"
                        onClick={closeDemo}
                      >
                        <img src={cross_icon} alt="close alert" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
      {/* <ActiveFeed /> */}
    </>
  );
};

export default Demo;
