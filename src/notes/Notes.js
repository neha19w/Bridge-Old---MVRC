import React, { useEffect } from "react";
import "./Notes.css";
import { useDispatch, useSelector } from "react-redux";
import { setShowNotes } from "../redux/actions/actions";
import Annotations from "./Annotations";

const Notes = () => {
  const dispatch = useDispatch();
  const showNotesModal = useSelector((state) => state.showNotes.showNotes);
  const words = useSelector((state) => state.words.words);
  const annotations = useSelector(
    (state) => state.annotationList.annotationList
  );
  const handleClose = () => {
    dispatch(setShowNotes(false));
  };
  console.log(annotations);
  return (
    <div className="notes-dialog">
      {/* Notes modal */}

      {showNotesModal ? (
        <div className="notes-body" id="zoomareaNotes">
          <p className="notes-text">&nbsp; Index</p>
          <div className="notes-content1-parent">
            <div className="notes-content1-child">
              <div className="index-table">
                {" "}
                <table>
                  <tbody>
                    {annotations.length > 0 ? <Annotations /> : null}
                    {words
                      ? words.map((item, index) => (
                          <tr key={index}>
                            <td>{item.word}</td>
                            <td>{item.lineNo}</td>
                          </tr>
                        ))
                      : null}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div>
            <p className="notes-text">&nbsp; Note</p>
          </div>

          <div className="notes-content2-parent">
            <div className="notes-content2-child"></div>
          </div>
        </div>
      ) : null}
    </div>
  );
};
export default Notes;

// all done
