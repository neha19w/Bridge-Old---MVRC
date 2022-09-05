import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  setSelectedFeed,
  setShowDelete,
  setShowActiveFeed,
  setShowFiles,
  setShowSendMessage,
  setShowSettings,
} from "../redux/actions/actions";
import "./Files.css";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import minus from "../static/images/minus-round.svg";
import plus from "../static/images/plus.svg";
import synced from "../static/images/synced.svg";
import send from "../static/images/email.svg";
import delete_icon from "../static/images/delete-icon.svg";

const Files = () => {
  const dispatch = useDispatch();
  const [isActive, setIsActive] = useState(false);
  const showFilesModal = useSelector((state) => state.showFiles.showFiles);
  const selectedFeed=useSelector((state)=>state.selectedFeed.selectedFeed);
  const newCase=useSelector((state)=>state.newCase.newCase);
  const handleClose = () => {
    
    dispatch(setShowFiles(false));
  };
  const closeFiles = () => {
    setIsActive(false);
    dispatch(setSelectedFeed(""));
    dispatch(setShowFiles(false));
  };

  const openSettingsModal = () => {
    dispatch(setShowSettings(true));
  };

  const openDemoFeedModal = () => {
    dispatch(setShowActiveFeed(true));
    dispatch(setSelectedFeed(""));
  };

  const deleteModal = () => {
    if(selectedFeed!==""){
    dispatch(setShowDelete(true));}
  };
  const sendMessageModal = () => {
    if(selectedFeed!==""){
    dispatch(setShowSendMessage(true));}
  };

  const openAlertModalForFiles = () => {};

  const showFilesList = () => {
    const x = document.getElementById("showFilesListId");
    const y = document.getElementById("showFilesListLabelImg");
    if (x.style.display === "none") {
      x.style.display = "block";
      y.src = minus;
    } else {
      x.style.display = "none";
      y.src = plus.toString();
    }
  };

  const handleFiles = () => {
    setIsActive(true);
    dispatch(setSelectedFeed(document.getElementById("showFilesListId").innerText));
  };
  return (
    <div>
      {/* Files modal */}
      <Modal
        show={showFilesModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="files-wrap"
        size="lg"
      >
        <Modal.Body>
          <div className="files-body">
            <h4 className="header-text">Transcripts</h4>
            <div className="files-background">
              <div className="files-content">
                <div className="files-content1">
                  <div>
                    <h4 className="m-3" onClick={showFilesList}>
                      <button className="files-feed-btn">
                        {" "}
                        <img  id="showFilesListLabelImg" src={plus} alt="minus" width={12} />
                      </button>{" "}
                      <span>{newCase!==""?newCase:"unfiled"}</span>
                    </h4>
                    <button
                      id="showFilesListId"
                      style={{
                        border: "none",
                        display: "none",
                        backgroundColor: isActive ? "black" : "white",
                        color: isActive ? "white" : "",
                      }}
                      className="sub-text"
                      onClick={handleFiles}
                    >
                      Demo feed
                    </button>
                  </div>
                </div>
                <div className="d-flex flex-row">
                  {" "}
                  <Button
                    variant="btn col files-btn"
                    id="dapply"
                    onClick={() => {
                      openDemoFeedModal();
                    }}
                  >
                    <img src={right_icon} alt="apply" />
                  </Button>
                  <Button
                    variant="btn col files-btn"
                    id="dsynced"
                    onClick={() => {
                      openSettingsModal();
                      openAlertModalForFiles();
                    }}
                  >
                    <img src={synced} width={30} alt="synced" />
                    <p>synced</p>
                  </Button>
                  <Button
                    variant="btn col files-btn"
                    id="dsend"
                    onClick={() => {sendMessageModal()}}
                  >
                    <img src={send} width={30} alt="send" />
                    <p>send</p>
                  </Button>
                  <Button
                    variant="btn col files-btn"
                    id="ddelete"
                    onClick={() => {
                      deleteModal();
                    }}
                  >
                    <img
                      src={delete_icon}
                      width={26}
                      className="mb-1"
                      alt="delete"
                    />
                    <p>delete</p>
                  </Button>
                  <Button
                    variant="btn col files-btn"
                    id="dsynced"
                    onClick={closeFiles}
                  >
                    <img src={cross_icon} alt="close" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default Files;
