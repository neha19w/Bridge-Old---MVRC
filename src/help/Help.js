import React from "react";
import "./Help.css";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import { setShowHelp } from "../redux/actions/actions";
import cross_icon from "../static/images/cross_icon.svg";
import right_icon from "../static/images/right_icon.svg";
import connect from "../static/images/connect.svg";
import connecting from "../static/images/connecting_to.jpg";
import exit from "../static/images/exit.svg";
import folder from "../static/images/folder.svg";
import zoomIn from "../static/images/zoom_in.svg";
import zoomOut from "../static/images/zoom_out.svg";
import notes from "../static/images/notes.svg";
import bulb from "../static/images/bulb.svg";
import find from "../static/images/find.svg";
import settings from "../static/images/settings.svg";
import downarrow from "../static/images/downarrow.svg";
import display_tab from "../static/images/display_tab.jpg";
import issues_jpg from "../static/images/issues_jpg.jpg";
import issues from "../static/images/issues.jpg";
import keywords from "../static/images/keywords1.jpg";
import search_bar from "../static/images/search_bar.jpg";
import export_icon from "../static/images/export.jpg";
import transcripts from "../static/images/transcripts.jpg";
import delete_icon from "../static/images/delete_icon.jpg";

const Help = () => {
  const dispatch = useDispatch();
  const showHelp = useSelector((state) => state.showHelp.showHelp);
  const handleClose = () => {
    dispatch(setShowHelp(false));
  };
  const closeHelp = () => {
    dispatch(setShowHelp(false));
  };
  return (
    <div>
      {/* Help Dialog */}
      <Modal
        show={showHelp}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="help-wrap"
        fullscreen={true}
      >
        <Modal.Body>
          <div className="help-body">
          <nav class="navbar navbar-light shadow rounded">
              <div className="d-flex flex-row justify-content-start gap-1 mt-1">
                <Button variant="btn" onClick={closeHelp}>
                  <img
                    className="close-icon"
                    src={cross_icon}
                    alt="close alert"
                  />
                </Button>
                <label className="help-label px-1 mb-2">Help</label>
              </div>
              </nav>
            <div className="help-content help-text">
            <p></p>
              <h1>Getting Started</h1>
              <p>
                With Bridge Mobile, you can view and interact with one or more
                transcripts streaming in realtime from CAT software. Bridge
                Mobile can be connected via an internet connection, or a Local
                network.
              </p>
              <p>
                You can connect using a PC browser, a Mac, or any mobile device
                with a browser. All controls can be used with a mouse (computer)
                or by touch (mobile devices).
              </p>
              <p>
              <img
                    className="right-icon"
                    src={right_icon}
                    alt="right icon"/> Press the check mark to accept the information you've entered in
                a dialog.
              </p>
              <p>   <img
                    className="close-icon"
                    src={cross_icon}
                    alt="close icon"
                  /> Press the X to exit the dialog without making any changes.</p>
              <h3>Connecting to a feed</h3>
              <p>
              <img
                    className="connect-icon"
                    src={connect}
                    alt="close icon"
                  /> Press the Connect button to join a session. A dialog will open
                showing the available sessions:
              </p>
              <div className="text-center">
                <p>
                  <img src={connecting} alt="connecting" />
                </p>{" "}
              </div>
              <p>
                Select the one you wish to connect to, enter a password (if
                there is one) and press the check mark. You are now connected to
                a realtime stream.
              </p>
              <p>
                You can connect to more than one feed, and you can open multiple
                transcripts. There is a tab bar at the top that shows the name
                of the open transcripts. To close a feed or transcript, press
                the "x" beside the name.
              </p>
              <p>
                <img src={exit} className="exit-icon" alt="exit" /> Press the exit button to close all open transcripts. They will
                be saved the "Transcripts" folder.
              </p>
              <p>
                <img src={folder} className="folder-icon" alt="folder" /> Press the folder icon to open the{" "}
                "<a href="#Transcript_manager">
                  <b>Transcripts</b>
                </a>"
                dialog and select a previous session. Select the session you
                want to join, and press the check mark.
              </p>
              <br />
              <h3>Adjusting the way the transcript looks on your screen</h3>
              <p>
                <img className="zoomIn-icon" src={zoomIn} alt="zoom in" /> Zoom in button - increases the size of the text in the
                transcript and the sidebar (index and notes).
              </p>
              <p>
                <img className="zoomOut-icon" src={zoomOut} alt="zoom out" /> Zoom out button - decreases the size of the text in the
                transcript and the sidebar.
              </p>
              <p>
                <img src={notes} className="notes-icon" alt="sidebar" />
                <a href="#The_Sidebar"> Sidebar</a>
                button - toggles on and off the sidebar, which displays the Word
                Index (which is automatically generated) and Notes.
              </p>
              <p>
                <img src={downarrow} className="follow-icon" alt="follow" />
                <a href="Follow_button" id="Follow_button"></a>
                <a href="#Following_the_text_in_Realtime"> Follow Button</a>-
                toggle between following along with the realtime and not
                following. When you're not following, a 5-line split realtime
                screen appears at the bottom of the screen.
              </p>
              <p>
                <img src={bulb} className="issue-icon" alt="issues" />
                <a href="#The_issues_tab"> Issue Bar</a>
                 button - toggles the Issue Bar on and off. When on, it displays
                6 issues at a time, with arrows bars to scroll through up to 24
                issues.
              </p>
              <p>
                Pressing an issue button will toggle that issue on or off for
                the highlighted line. You can customize the issues in the{" "}
                <a href="#The_issues_tab"> Issue tab </a>
                of the Settings dialog.
              </p>
              <p>
                <img src={find} className="find-icon" alt="find" />
                <a href="Find_button" id="Find_button"></a>
                <a href="#Searching"> Find Button</a>- opens a
                <a href="#Searching"> Search Bar</a>. Enter the word you want to
                find, and press the up or down arrow to search forward or
                backward from the cursor point.
              </p>
              <p>
                <img src={settings} className="settings-icon" alt="settings" />
                <a href="#Settings_dialog"> Settings</a>- Adjust other display
                elements: page/line numbering; timecodes; annotations; and
                keywords (details below)
              </p><br/>
              <h1>Additional settings and options</h1>
              
              <h3>
                <a name="The_Sidebar" id="The_Sidebar"></a>The Sidebar
              </h3>
              <p>
                The Sidebar displays the <a name="Index" id="Index"></a>
                <b>Index</b>, and
                <a href="#Annotations">
                  <b> Notes</b>
                </a>
                . You can turn it off and on using the Sidebar button.
              </p>
              <p>
                All the words in the transcript are automatically indexed and
                appear here. After each word is a list of the page and line
                numbers where it appears. If you click on (press) a page/line
                reference, you will jump to that line.
              </p>
              <p>
                {" "}
                <a href="#Annotations">Annotations </a>(generic marks, issues,
                and notes) are listed at the top of the index in the order they
                appear in the document. For each note, the first few words of
                the note appear in the index.
              </p>
              <h2>
                <a name="Settings_dialog" id="Settings_dialog"></a>
                Settings dialog
              </h2>
              <p>
                In the Settings dialog, you can edit the names of Issues, edit
                your Keywords list, and display license information.
              </p>
              <h3>
                <a name="The Display Tab" id="The_Display_Tab"></a>The Display
                Tab
              </h3>
              <p>
                The Display tab has 4 options that enable you to toggle on or
                off the displaying of{" "} <b> Page and line numbering</b>,<b> Timecodes</b>,<b> Annotations</b>
               , and
              <b> Keyword highlighting</b>.
              </p>

              <div className="text-center">
                <img src={display_tab} alt="display tab"></img>
                <div className="float-left">
                  <br />
                </div>
              </div>
              <br />
              <h3>
                <a name="Annotations" id="Annotations"></a>Annotations
              </h3>
              <p>
                Select a line in the transcript display by left-clicking or
                touching it. Click on the text itself to highlight the text.
                <br />
                <br />
                Click to the left of the text to set or clear a generic
                <b> mark</b>.
                <br />
                <br />
                After selecting a line, you can select the note box and create a{" "}
                <a name="note" id="note">
                   note
                </a>
                <b> note</b>, which will be associated with the selected line,
                and listed in the <a href="#Index">Index</a>.
              </p>
              <p>  You can also open the issues bar and add a customized<b> issue</b>.</p>
              <h3>
                {" "}
                <a name="The_issues_tab" id="The_issues_tab">
                The Issue bar and the Issues tab
                </a>
               
                <br />
              </h3>
              <p>
                To add issue codes to a line, first turn on the issue bar using
                the lightbulb icon.
                <img src={issues_jpg} alt="issues" />
                <br />
                <br />
                The issues bar displays 6 issues with left and right arrows to
                cycle through up to 24 types of issues.
                <br />
                <br />
                With a line of text selected, press an issue button to toggle
                that issue on or off for the selected line.
                <br /> <br />
                To close the issue bar, press the "x" on the bar, or the
                lightbulb button below it.
                <br />
              </p>
              <p>
                On the
                <b> Issues </b>
                 tab of the
                <a href="#Settings_dialog">
                  <b> Settings </b>
                </a>
                dialog, you can define up to 24 types of issues.
                <br />
              </p>
              <div className="text-center">
                <img src={issues} alt="issues" />
                <br />
              </div>
              <div className="text-left">
                <br />
                <h3>The keywords Tab</h3>
                <p>
                  The Keywords tab opens a data-entry field where you can type
                  in keywords that you would like to track and/or highlight.
                  When you add a word to this list, it will be highlighted
                  throughout the document, including when it appears in
                  realtime.
                </p>
              </div>
              <div className="text-center">
                <p>
                  <img src={keywords} alt="keywords" />
                </p>
              </div>
              <div className="text-left">
                <p>
                  You can toggle the Keywords display off and on by pressing the
                  "Keyword highlighting" button in the
               
                <b> Settings </b>
                dialog
                <a href="#The_Display_Tab">
                  <b> Display </b>
                </a>
                Tab.  </p>
                <p>The keywords list is stored with the document.</p>
                <h3>License tab</h3>
                <p>The License tab displays your license code.</p>
                <h3>
                  <a
                    name="Following_the_text_in_Realtime"
                    id="Following_the_text_in_Realtime"
                  ></a>
                  Following the text in realtime
                </h3>
              </div>
              <p>
                When you first connect, Bridge Mobile defaults to following
                along with the realtime.
              </p>
              <p>
                Press the
                <a href="#Follow_button"> Follow button </a>
                <img src={downarrow} className="follow-icon" alt="follow" /> to toggle between following and not following
              </p>
              <p>
                When you are not following, you can touch-scroll the transcript
                screen (or roll the mousewheel) and scroll up and down
              </p>
              <p>
                When you scroll up, it automatically turns off the following.
              </p>
              <p>Scrolling down to the bottom automatically starts it up.</p>
              <p>
                Whenever you're not following, an automatic five-line split
                realtime screen appears at the bottom of the screen so that you
                can always see the last few lines of realtime text coming in
                even when you're looking at an earlier part of the transcript.
              </p>
              <h3>
                <a name="Searching" id="Searching"></a>Search bar
              </h3>
              <p>
                Turn the Search bar on (or off) by pressing
                <a href="#Find_button"> Find Button</a>- the magnifying glass
                icon on the lower-right toolbar.
              </p>
              <p>
                <img src={search_bar} alt="search bar" />
                <br /> <br />
                Close the Search bar by pressing the "X" or the Find button.
              </p>
              <p>
                Type what you are searching for in the text box. In the example
                above, we are searching for the word "appraisal." Use the up or
                down button te tell it which direction to search.
              </p>
              <p>
                It will find text in the document, in the notes, in the
                page/line references, or in the timecodes. So, if you search for
                12/5, it will go to page 12 line 5, and will also find 12/5 in
                the text, in a date for example.
              </p>
              <h3>
                <a
                  name="#Transcript_manager"
                  id="Transcript_manager"
                >
                  Transcript manager (folder icon)
                </a>
              </h3>
              <p>
                Use this dialog to open transcripts that were saved previously.
                They are organized by case. Highlight the case you want to open,
                and press the check mark.
              </p>
              <p>
                <img src={export_icon} alt="export" /> The <b>Export</b> button can be used to<b> Attach</b> the
                highlighted transcript to an e-mail as an ASCII file, a PDF
                file, or a LiveNote ptf file.
              </p>
              <div className="text-center">
                <img src={transcripts} alt="transcripts" />
              </div>
              <p>
                <img src={delete_icon} alt="delete" /> If you press the "trash" button, the highlighted transcript will
                be deleted. Pressing the "X" closes the dialog.
              </p>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Help;