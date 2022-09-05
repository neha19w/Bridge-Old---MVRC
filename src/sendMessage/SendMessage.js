import React, { useState } from "react";
import "./sendMessage.css";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import { setNewCase, setShowSendMessage } from "../redux/actions/actions";
// import minus from "../static/images/minus-round.svg";
// import plus from "../static/images/plus.svg";

const SendMessage = () => {
  const dispatch = useDispatch();
  const moveToCaseOptions = ["create_new_case", "unfiled"];
  const emailOptions = ["bridge_mobile", "brg", "ascii", "ptf", "pdf"];
  const [exportOptionSelected, setExportOptionSelected] = useState("");
  const [userInput, setUserInput] = useState("");
  const showSendMessageModal = useSelector(
    (state) => state.showSendMessage.showSendMessage
  );
  const newCase = useSelector((state) => state.newCase.newCase);
  const handleClose = () => {
    dispatch(setShowSendMessage(false));
  };

  const exportTranscript = () => {
    const nameId = document.getElementById("name");
    //const caseName=nameId.innerText;
    if (exportOptionSelected === moveToCaseOptions[0] && userInput === "") {
      console.log("if");
      nameId.focus();
    } else {
      console.log(userInput);
      dispatch(setNewCase(userInput));
      dispatch(setShowSendMessage(false));
    }
  };

  const moveToCase = (e) => {
    const selected = document.getElementById(e.target.id);
    setExportOptionSelected(e.target.id);
    const changeSelect = (item) => {
      if (item === e.target.id) {
        selected.style.backgroundColor = "#000";
        selected.style.color = "#fff";
      } else {
        let unSelected = document.getElementById(item);
        unSelected.style.backgroundColor = "transparent";
        unSelected.style.color = "#000";
      }
    };
    moveToCaseOptions.forEach(changeSelect);
    emailOptions.forEach(changeSelect);
    console.log(e.target.id);
    if (e.target.id === "unfiled") {
      setUserInput(e.target.id);
    }
  };

  const sendEmail = (e) => {
    const selected = document.getElementById(e.target.id);
    setExportOptionSelected(e.target.id);
    const changeSelect = (item) => {
      if (item === e.target.id) {
        selected.style.backgroundColor = "#000";
        selected.style.color = "#fff";
      } else {
        let unSelected = document.getElementById(item);
        unSelected.style.backgroundColor = "transparent";
        unSelected.style.color = "#000";
      }
    };
    emailOptions.forEach(changeSelect);
    moveToCaseOptions.forEach(changeSelect);
    console.log(e.target.id);
  };

  return (
    <>
      <div>
        {/* Send Message modal */}
        <Modal
          show={showSendMessageModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          contentClassName="send-msg-wrap"
        >
          <Modal.Body>
            <div className="send-msg-body">
              <h4 className="send-msg-header-text">Export transcript</h4>
              <div className="send-msg-content">
               <div className="send-msg-content-parent">
               <div className="send-msg-content-child accordian-text">
                  <div className="accordion accordion-flush" id="export1">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          id="moveToCaseOption"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#export-content-1"
                          // onClick={moveToCase}
                        >
                          Move to case
                        </button>
                      </h2>
                      <div
                        id="export-content-1"
                        className="accordion-collapse collapse"
                        data-bs-parent="#export1"
                      >
                        <div className="accordion-body exportOne">
                          <ul>
                            <li onClick={moveToCase} id="create_new_case">
                              create new case
                            </li>
                            <li onClick={moveToCase} id="unfiled">
                              {" "}
                              unfiled
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="accordion accordion-flush" id="export2">
                    <div className="accordion-item">
                      <h2 className="accordion-header">
                        <button
                          id="email"
                          className="accordion-button collapsed"
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#export-content-2"
                          // onClick={sendEmail}
                        >
                          Attach to e-mail
                        </button>
                      </h2>
                      <div
                        id="export-content-2"
                        className="accordion-collapse collapse"
                        data-bs-parent="#export2"
                      >
                        <div className="accordion-body">
                          <ul>
                            <li onClick={sendEmail} id="bridge_mobile">
                              as a Bridge Mobile file
                            </li>
                            <li onClick={sendEmail} id="brg">
                              as a Bridge (brg) file
                            </li>
                            <li onClick={sendEmail} id="ascii">
                              as an ASCII file
                            </li>
                            <li onClick={sendEmail} id="ptf">
                              as a PTF file
                            </li>
                            <li onClick={sendEmail} id="pdf">
                              as a PDF file
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> 
               </div>

                <div>
                  <label>Name : </label>
                  <input
                    id="name"
                    className="col-10 send-msg-content1-text"
                    type="text"
                    onChange={(e) => {
                      setUserInput(e.target.value);
                    }}
                  />
                </div>

                <div className="p-1">
                  {" "}
                  <Button
                    variant="btn col-6 send-msg-c-btn"
                    onClick={exportTranscript}
                  >
                    <img src={right_icon} width={23} alt="apply alert" />
                  </Button>
                  <Button
                    variant="btn col-6 send-msg-c-btn"
                    onClick={handleClose}
                  >
                    <img src={cross_icon} alt="close alert" />
                  </Button>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};
export default SendMessage;
