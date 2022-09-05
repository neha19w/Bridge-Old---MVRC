import React, { createContext, useEffect, useState } from "react";
import "./FeedInput.css";
import demoInput from "./demoInput.json";
import { useDispatch, useSelector } from "react-redux";
import {
  setAnnotationList,
  setAnnotationUpdated,
  setShowNotes,
  setWords,
} from "../redux/actions/actions";

const FeedInput = () => {
  const dispatch = useDispatch();
  const annotationUpdated = useSelector(
    (state) => state.annotationUpdated.annotationUpdated
  );
  let annotations = useSelector((state) => state.annotationList.annotationList);
  let words = [];
  // let annotations=[];

  const toggleMark = (index) => {
    const markSelectedLine = document.getElementById("markLine" + index);
    const lineNo = document.getElementById("lineNumber" + index);
    if (markSelectedLine.classList.contains("hide-mark")) {
      markSelectedLine.classList.remove("hide-mark");
      markSelectedLine.classList.add("show-mark");

      dispatch(setAnnotationList(lineNo.textContent));
      dispatch(setAnnotationUpdated(!annotationUpdated));
    } else {
      markSelectedLine.classList.remove("show-mark");
      markSelectedLine.classList.add("hide-mark");

      dispatch(setAnnotationList(lineNo.textContent));
      dispatch(setAnnotationUpdated(!annotationUpdated));
    }
  };
  const markLine = (index) => {
    toggleMark(index);
  };

  const feedData = () => {
    const table = document.getElementById("active-feed-table");
    const rowslength = table.firstChild.childNodes.length;
    console.log(rowslength);
    for (let i = 0; i < rowslength; i++) {
      const data = document.getElementById("feedText" + i);
      const lineNo = document.getElementById("lineNumber" + i);

      if (data) {
        dispatch(setShowNotes(true));
        let dataArr = data.textContent.split(" ");
        console.log(dataArr);

        dataArr.forEach((obj) => {
          words.push({ word: obj, lineNo: lineNo.textContent });
          dispatch(setWords(words));
          console.log(words);
        });

        console.log(words);
      }
    }
  };
  useEffect(() => {
    feedData();
    console.log("useeffect");
  });

  return (
    <>
      <div id="zoomareaFeed">
        <div className="feed-table-parent">
          <div className="feed-table-child">
            <div className="feed-table">
              <table className="table-responsive" id="active-feed-table">
                <tbody className="feed-content">
                  {demoInput.map((item, index) => (
                    <tr id="feed-row">
                      <td
                        className="lineNo px-2"
                        id={"lineNumber" + index}
                        onClick={() => {
                          markLine(index);
                        }}
                      >
                        {item.lineNo}
                      </td>
                      <td
                        className="timecode"
                        id="timeCode"
                        onClick={() => {
                          markLine(index);
                        }}
                      >
                        {item.timeCode}
                      </td>
                      <td className="line-annotation">
                        <button
                          id={"markLine" + index}
                          className="hide-mark"
                          onClick={() => {
                            markLine(index);
                          }}
                        ></button>
                      </td>
                      <td className="text" id={"feedText" + index}>
                        {item.text}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedInput;
