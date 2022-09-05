import "./RightPanel.css";
import notes from "../static/images/notes.svg";
import find from "../static/images/find.svg";
import follow from "../static/images/down.svg";
import light from "../static/images/light.svg";
import Notes from "../notes/Notes";
import Find from "../find/Find";
import Issues from "../issues/Issues";
import zoom_in from "../static/images/zoom_in.svg";
import zoom_out from "../static/images/zoom_out.svg";
import { useDispatch, useSelector } from "react-redux";
import {
  setShowFind,
  setShowIssues,
  setShowNotes,
} from "../redux/actions/actions";

const RightPanel = () => {
  const dispatch = useDispatch();
  const showFindModal = useSelector((state) => state.showFind.showFind);
  const showIssuesModal = useSelector((state) => state.showIssues.showIssues);
  const showNotesModal = useSelector((state) => state.showNotes.showNotes);
  const openNotes = () => {
    if (showNotesModal) {
      dispatch(setShowNotes(false));
    } else {
      dispatch(setShowNotes(true));
    }
  };

  const openFind = () => {
    if (showFindModal) {
      dispatch(setShowFind(false));
    } else {
      dispatch(setShowFind(true));
    }
  };

  const openIssues = () => {
    if (showIssuesModal) {
      dispatch(setShowIssues(false));
    } else {
      dispatch(setShowIssues(true));
    }
  };

  var fontSize = 1;

  const IncreaseFont = () => {
    console.log("IncreaseFont");
    fontSize += 0.1;
    var spanFeed = document.getElementById("zoomareaFeed");
    spanFeed.style.fontSize = fontSize + "em";
    var spanNotes = document.getElementById("zoomareaNotes");
    spanNotes.style.fontSize = fontSize + "em";
  };
  const DecreaseFont = () => {
    console.log("DecreaseFont");
    fontSize -= 0.1;
    var spanFeed = document.getElementById("zoomareaFeed");
    spanFeed.style.fontSize = fontSize + "em";
    var spanNotes = document.getElementById("zoomareaNotes");
    spanNotes.style.fontSize = fontSize + "em";
  };

  return (
    <>
      {" "}
      <nav className="navbar justify-content-around h-100 border-end border-white">
        <div className="btn right-btns" onClick={openNotes}>
          {" "}
          <img className="icon-pic" src={notes} alt="notes" />
          <p className="icon-text">Notes</p>
        </div>
        <div className="btn right-btns" onClick={openFind}>
          <img className="icon-pic" src={find} alt="find" />
          <p className="icon-text">Find</p>{" "}
        </div>
        <div className="btn right-btns" onClick={openIssues}>
          {" "}
          <img className="icon-pic" src={light} alt="issues" />
          <p className="icon-text">Issues</p>
        </div>
        <div className="btn right-btns">
          <img className="icon-pic" src={follow} alt="follow" />
          <p className="icon-text">Follow</p>
        </div>
        <div className="btn right-btns" onClick={DecreaseFont}>
          {" "}
          <img className="icon-pic" src={zoom_out} alt="zoom_out" />
          <p className="icon-text">Smaller</p>
        </div>
        <div className="btn right-btns" onClick={IncreaseFont}>
          {" "}
          <img className="icon-pic" src={zoom_in} alt="zoom_in" />
          <p className="icon-text">Larger</p>
        </div>
      </nav>
      <Notes />
      <Find />
      <Issues />
    </>
  );
};

export default RightPanel;
