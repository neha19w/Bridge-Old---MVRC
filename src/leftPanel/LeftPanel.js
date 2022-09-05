import "./leftPanel.css";
import email from "../static/images/email-1.svg";
import settings from "../static/images/settings.svg";
import help from "../static/images/help.svg";
import play from "../static/images/play.svg";
import connect from "../static/images/connect.svg";
import { useDispatch } from "react-redux";
import {
  setSelectedFeed,
  setShowConnect,
  setShowDemo,
  setShowActiveFeed,
  setShowFiles,
  setShowHelp,
  setShowSendAlert,
  setShowSettings,
} from "../redux/actions/actions";
import AlertModal from "../alert/AlertModal";
import Settings from "../settings/Settings";
import Help from "../help/Help";
import Files from "../files/Files";
import Demo from "../demoo/Demo";
import Delete from "../delete/Delete";
import SendMessage from "../sendMessage/SendMessage";
import Connect from "../connect/Connect";


const LeftPanel = () => {
  const dispatch = useDispatch();

  const openAlertModal = () => {
    dispatch(setShowSendAlert(true));
  };

  const openSettingsModal = () => {
    dispatch(setShowSettings(true));
  };

  const openHelp = () => {
    dispatch(setShowHelp(true));
  };

  const openDemoModal = () => {
    dispatch(setShowDemo(true));
  };

  const openFilesModal = () => {
    dispatch(setSelectedFeed(""));
    dispatch(setShowFiles(true));
  };

  const openDemoFeedModal = () => {
    dispatch(setShowActiveFeed(true));
  };

  const openConnectModal =() => {
    dispatch(setShowConnect(true));
  }
  return (
    <>
      <nav className="navbar justify-content-around h-100 border-end border-white">
       
        <div className="btn left-btns" onClick={openAlertModal}>
          {" "}
          <img className="menu-pics" src={email} alt="send" />
          <p className="left-text">Send</p>
        </div>
        <div className="btn left-btns" onClick={openSettingsModal}>
          <img className="menu-pics" src={settings} alt="settings" />
          <p className="left-text">Settings</p>{" "}
        </div>
        <div className="btn left-btns" onClick={openHelp}>
          {" "}
          <img className="menu-pics" src={help} alt="help" />
          <p className="left-text">Help</p>
        </div>
        <div className="btn left-btns" onClick={openDemoModal}>
          <img className="menu-pics" src={play} alt="demo" />
          <p className="left-text">Demo</p>
        </div>
        <div className="btn left-btns" onClick={openFilesModal}>
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="#fafaea"
            viewBox="0 0 512 512"
          >
            <path d="M496,152a56,56,0,0,0-56-56H220.11a23.89,23.89,0,0,1-13.31-4L179,73.41A55.77,55.77,0,0,0,147.89,64H72a56,56,0,0,0-56,56v48a8,8,0,0,0,8,8H488a8,8,0,0,0,8-8Z" />
            <path d="M16,392a56,56,0,0,0,56,56H440a56,56,0,0,0,56-56V216a8,8,0,0,0-8-8H24a8,8,0,0,0-8,8Z" />
          </svg>
          <p className="left-text">Files</p>
        </div>
        <div className="btn left-btns" onClick={openConnectModal}  >
          {" "}
          <img className="menu-pics" src={connect} alt="connect" />
          <p className="left-text">Connect</p>
        </div>
      </nav>
      <AlertModal />
      <Settings />
      <Help />
      <Demo />
      <Files />
      <Delete/>
      <SendMessage/>
      <Connect/>
    </>
  );
};

export default LeftPanel;
