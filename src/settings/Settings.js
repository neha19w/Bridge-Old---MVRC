import React, { useState } from "react";
import "./Settings.css";
import { useSelector, useDispatch } from "react-redux";
import { setAnnotation, setAutoSplit, setEnableDemo, setEnableFiles, setEnableFind, setEnableHelp, setEnableIndex, 
  setEnableIssues, setEnableKeyword, setEnableSend, setEnableSettings, setEnableSidebar, setEnableZoom, setPageNo,
   setShowSettings, setTimeCode,setEnableVerbose,setEnableRemote } from "../redux/actions/actions";
import { Modal, Button } from "react-bootstrap";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import page_no from "../static/images/page_no.png";
import time from "../static/images/time.png";
import annotations from "../static/images/annotations.png";
import autosplit from "../static/images/autosplit.png";
import keyword from "../static/images/keyword.png";
import files from "../static/images/enable_file.png";
import demo from "../static/images/enable_demo.png";
import help from "../static/images/enable_help.png";
import find from "../static/images/enable_find.png";
import issues from "../static/images/enable_issues.png";
import send from "../static/images/enable_send.png";
import settings from "../static/images/enable_setting.png";
import sidebar from "../static/images/enable_sidebar.png";
import zoom from "../static/images/enable_zoom.png";
import index from "../static/images/enable_index.png";
import secure from "../static/images/secure.png";
import notes from "../static/images/notes.svg";

const Settings = () => {
  const pageNo=useSelector((state)=>state.pageNo.pageNo);
  const annotation=useSelector((state)=>state.annotation.annotation);
  const timeCode=useSelector((state)=>state.timeCode.timeCode);
  const autoSplit=useSelector((state)=>state.autoSplit.autoSplit);
  const enableDemo=useSelector((state)=>state.enableDemo.enableDemo);
  const enableFiles=useSelector((state)=>state.enableFiles.enableFiles);
  const enableFind=useSelector((state)=>state.enableFiles.enableFiles);
  const enableHelp=useSelector((state)=>state.enableHelp.enableHelp);
  const enableIndex=useSelector((state)=>state.enableIndex.enableIndex);
  const enableIssues=useSelector((state)=>state.enableIssues.enableIssues);
  const enableKeyword=useSelector((state)=>state.enableKeyword.enableKeyword);
  const enableRemote=useSelector((state)=>state.enableRemote.enableRemote);
  const enableSend=useSelector((state)=>state.enableSend.enableSend);
  const enableSettings=useSelector((state)=>state.enableSettings.enableSettings);
  const enableSidebar=useSelector((state)=>state.enableSidebar.enableSidebar);
  const enableVerbose=useSelector((state)=>state.enableVerbose.enableVerbose);
  const enableZoom=useSelector((state)=>state.enableZoom.enableZoom);
  const dispatch = useDispatch();
  const showSettingsModal = useSelector(
    (state) => state.showSettings.showSettings
  );

  const closeSettings = () => {
    dispatch(setShowSettings(false));
  };
  const applySettings = () => {
    const displaySettingsSelected =
    document.querySelectorAll(".display-active");
    console.log(displaySettingsSelected);
    dispatch(setShowSettings(false));
  };
  const handleClose = () => {
    dispatch(setShowSettings(false));
  };

  const displaySettings = (id) => {
    const btnClicked = document.querySelector("#" + id);
    if (btnClicked.matches(".display-btns")) {
      btnClicked.classList.remove("display-btns");
      btnClicked.classList.add("display-active");
    } else {
      btnClicked.classList.remove("display-active");
      btnClicked.classList.add("display-btns");
    }
  };

  const toolsSettings = (id) => {
    const btnClicked = document.querySelector("#" + id);
    if (btnClicked.matches(".tools-btn")) {
      btnClicked.classList.remove("tools-btn");
      btnClicked.classList.add("tools-active");
    } else {
      btnClicked.classList.remove("tools-active");
      btnClicked.classList.add("tools-btn");
    }
  };
  return (
    <div>
      {/* Settings modal */}
      <Modal
        show={showSettingsModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="settings-wrap"
        size="lg"
      >
        <Modal.Body>
          <div className="settings-body">
            <h4 className="header-text">Settings</h4>
            <div className="settings-background">
              <div className="settings-content">
                <ul className="nav nav-tabs" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link active"
                      id="display-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#display"
                      type="button"
                      role="tab"
                      aria-controls="display"
                      aria-selected="true"
                    >
                      Display
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="issues-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#issues"
                      type="button"
                      role="tab"
                      aria-controls="issues"
                      aria-selected="false"
                    >
                      Issues
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="keywords-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#keywords"
                      type="button"
                      role="tab"
                      aria-controls="keywords"
                      aria-selected="false"
                    >
                      Keywords
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="tools-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#tools"
                      type="button"
                      role="tab"
                      aria-controls="tools"
                      aria-selected="false"
                    >
                      Tools
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className="nav-link"
                      id="info-tab"
                      data-bs-toggle="tab"
                      data-bs-target="#info"
                      type="button"
                      role="tab"
                      aria-controls="info"
                      aria-selected="false"
                    >
                      Info
                    </button>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active displayTab"
                    id="display"
                    role="tabpanel"
                    aria-labelledby="display-tab"
                  >
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="pageNo"
                        value={pageNo}
                        onClick={(e) => {
                          dispatch(setPageNo(!pageNo));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={page_no} alt="page_number" />
                      </button>
                      <p className="col display-text">Page/line numbering</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="timeCode"
                        value={timeCode}
                        onClick={(e) => {
                          dispatch(setTimeCode(!timeCode));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={time} alt="timeCode" />
                      </button>
                      <p className="col display-text">Timecodes</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="annotation"
                        value={annotation}
                        onClick={(e) => {
                          dispatch(setAnnotation(!annotation));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={annotations} alt="annotation" />
                      </button>
                      <p className="col display-text">Annotations</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="keyword"
                        value={enableKeyword}
                        onClick={(e) => {
                          dispatch(setEnableKeyword(!enableKeyword));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={keyword} alt="keyword" />
                      </button>
                      <p className="col display-text">Keyword Highlighting</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-active text-white"
                        id="autoSplit"
                        value={autoSplit}
                        onClick={(e) => {
                          dispatch(setAutoSplit(false));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={autosplit} alt="autoSplit" />
                      </button>
                      <p className="col-9 display-text"> Auto-split screen</p>
                    </div>

                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableFiles"
                        value={enableFiles}
                        onClick={(e) => {
                          dispatch(setEnableFiles(!enableFiles));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={files} alt="enableFiles" />
                      </button>
                      <p className="col-9 display-text">Enable files</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableDemo"
                        value={enableDemo}
                        onClick={(e) => {
                          dispatch(setEnableDemo(!enableDemo));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={demo} alt="enableDemo" />
                      </button>
                      <p className="col-9 display-text">Enable Demo</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableHelp"
                        value={enableHelp}
                        onClick={(e) => {
                          dispatch(setEnableHelp(!enableHelp));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={help} alt="enableHelp" />
                      </button>
                      <p className="col-9 display-text">Enable Help</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableSettings"
                        value={enableSettings}
                        onClick={(e) => {
                          dispatch(setEnableSettings(!enableSettings));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={settings} alt="enableSettings" />
                      </button>
                      <p className="col-9 display-text">Enable Settings</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableSend"
                        value={enableSend}
                        onClick={(e) => {
                          dispatch(setEnableSend(!enableSend));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={send} alt="enableSend" />
                      </button>
                      <p className="col-9 display-text">Enable Send</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableZoom"
                        value={enableZoom}
                        onClick={(e) => {
                          dispatch(setEnableZoom(!enableZoom));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={zoom} alt="enableZoom" />
                      </button>
                      <p className="col-9 display-text">Enable Zoom</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableIssues"
                        value={enableIssues}
                        onClick={(e) => {
                          dispatch(setEnableIssues(!enableIssues));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={issues} alt="enableIssues" />
                      </button>
                      <p className="col-9 display-text">Enable Issues</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableFind"
                        value={enableFind}
                        onClick={(e) => {
                          dispatch(setEnableFind(!enableFind));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={find} alt="enableFind" />
                      </button>
                      <p className="col-9 display-text">Enable Find</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableSidebar"
                        value={enableSidebar}
                        onClick={(e) => {
                          dispatch(setEnableSidebar(!enableSidebar));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={notes} alt="enableSidebar" />
                      </button>
                      <p className="col-9 display-text">Enable Sidebar</p>
                    </div>
                    <div className="row mb-1">
                      <button
                        className="col-3 display-btns text-white"
                        id="enableIndex"
                        value={enableIndex}
                        onClick={(e) => {
                          dispatch(setEnableIndex(!enableIndex));
                          displaySettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={index} alt="enableIndex" />
                      </button>
                      <p className="col-9 display-text">Enable Index</p>
                    </div>
                  </div>
                  <div
                  className="tab-pane fade issuesTab"
                  id="issues"
                  role="tabpanel"
                  aria-labelledby="issues-tab"
                >
                   <div className="row gap-2">
                    <p className="col-1 text-center border issue1-id">1</p>
                    <input className="col-10 issue-input issue1 placeholder-text" placeholder="Issue 1"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue2-id">2</p>
                    <input className="col-10 issue-input issue2 placeholder-text" placeholder="Issue 2"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue3-id">3</p>
                    <input className="col-10 issue-input issue3 placeholder-text" placeholder="Issue 3"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue4-id">4</p>
                    <input className="col-10 issue-input issue4 placeholder-text" placeholder="Issue 4"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue5-id">5</p>
                    <input className="col-10 issue-input issue5 placeholder-text" placeholder="Issue 5"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue6-id">6</p>
                    <input className="col-10 issue-input issue6 placeholder-text" placeholder="Issue 6"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue7-id">7</p>
                    <input className="col-10 issue-input issue7 placeholder-text" placeholder="Issue 7"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue8-id">8</p>
                    <input className="col-10 issue-input issue8 placeholder-text" placeholder="Issue 8"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue9-id">9</p>
                    <input className="col-10 issue-input issue9 placeholder-text" placeholder="Issue 9"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue10-id">10</p>
                    <input className="col-10 issue-input issue10 placeholder-text" placeholder="Issue 10"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue11-id">11</p>
                    <input className="col-10 issue-input issue11 placeholder-text" placeholder="Issue 11"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue12-id">12</p>
                    <input className="col-10 issue-input issue12 placeholder-text" placeholder="Issue 12"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue13-id">13</p>
                    <input className="col-10 issue-input issue13 placeholder-text" placeholder="Issue 13"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue14-id">4</p>
                    <input className="col-10 issue-input issue14 placeholder-text" placeholder="Issue 14"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue15-id">15</p>
                    <input className="col-10 issue-input issue15 placeholder-text" placeholder="Issue 15"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue16-id">16</p>
                    <input className="col-10 issue-input issue16 placeholder-text" placeholder="Issue 16"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue17-id">17</p>
                    <input className="col-10 issue-input issue17 placeholder-text" placeholder="Issue 17"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue18-id">18</p>
                    <input className="col-10 issue-input issue18 placeholder-text" placeholder="Issue 18"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue19-id">19</p>
                    <input className="col-10 issue-input issue19 placeholder-text" placeholder="Issue 19"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue20-id">20</p>
                    <input className="col-10 issue-input issue20 placeholder-text" placeholder="Issue 20"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue21-id">21</p>
                    <input className="col-10 issue-input issue21 placeholder-text" placeholder="Issue 21"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue22-id">22</p>
                    <input className="col-10 issue-input issue22 placeholder-text" placeholder="Issue 22"/>
                  </div>
                  <div className="row gap-2">
                    <p className="col-1 text-center border issue23-id">23</p>
                    <input className="col-10 issue-input issue23 placeholder-text" placeholder="Issue 23"/>
                  </div>
                
                </div>
                  <div
                    className="tab-pane fade"
                    id="keywords"
                    role="tabpanel"
                    aria-labelledby="keywords-tab"
                  >
                    <textarea
                      className="form-control keyword-input"
                      aria-label="With textarea"
                    ></textarea>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="tools"
                    role="tabpanel"
                    aria-labelledby="tools-tab"
                  >
                    <div className="row mb-1">
                      <button
                        className="col-2 tools-active"
                        id="enableVerbose"
                        value={enableVerbose}
                        onClick={(e) => {
                          dispatch(setEnableVerbose(!enableVerbose));
                          toolsSettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={right_icon} alt="right_icon" />
                      </button>
                      <p className="col-10 tools-text">
                        Enable verbose app log
                      </p>
                    </div>
                    <div className="row mb-1 ">
                      <button
                        className="col-2 tools-active"
                        id="enableRemote"
                        value={enableRemote}
                        onClick={(e) => {
                          dispatch(setEnableRemote(!enableRemote));
                          toolsSettings(e.currentTarget.id);
                        }}
                      >
                        {" "}
                        <img src={right_icon} alt="right_icon" />
                      </button>
                      <p className="col-10 tools-text">
                        Enable remote request log
                      </p>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="info"
                    role="tabpanel"
                    aria-labelledby="info-tab"
                  >
                    <div className="row mb-1 ">
                      <p className="col info-text">Version</p>
                      <p className="col-10 info-text">3.0.3</p>
                    </div>
                    <div className="row mb-1 ">
                      <label for="name" className="col-2 form-label info-text">
                        Name
                      </label>
                      <input
                        type="text"
                        className="col-8 info-input"
                        id="name"
                      />
                    </div>
                    <div className="row mb-1 ">
                      <label for="email" className="col-2 form-label info-text">
                        e-mail
                      </label>
                      <input
                        type="email"
                        className="col-8 info-input"
                        id="email"
                      />
                    </div>
                    <div className="row mb-2 ">
                      <label
                        for="password"
                        className="col-2 form-label info-text"
                      >
                        Password
                      </label>
                      <input
                        type="password"
                        className="col-8 info-input"
                        id="password"
                      />
                    </div>

                    <div className="row">
                      <p className="col-2 secure-btn">
                        <img
                          className="mx-3"
                          src={secure}
                          alt="secure-connection"
                        />
                      </p>
                      <p className="col-8 " id="info-text secure-text">
                        Use secure connection
                      </p>
                    </div>
                    <div className="row mb-2 ">
                      <label for="ip" className="col-2 form-label info-text">
                        IP
                      </label>
                      <input
                        type="number"
                        className="col-8 info-input"
                        id="ip"
                      />
                    </div>
                  </div>
                </div>
                <div className="p-2 d-flex flex-row gap-2">
                  {" "}
                  <Button variant="btn col-6 close-btn" onClick={applySettings}>
                    <img src={right_icon} alt="close alert" />
                  </Button>
                  <Button variant="btn col-6 close-btn" onClick={closeSettings}>
                    <img src={cross_icon} alt="close alert" />
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
export default Settings;
