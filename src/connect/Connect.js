import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setShowConnect } from "../redux/actions/actions";
import "./Connect.css";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";

const Connect = () => {
  const dispatch = useDispatch();

  const showConnectModal = useSelector(
    (state) => state.showConnect.showConnect
  );

  const handleClose = () => {
    dispatch(setShowConnect(false));
  };

  const closeDemo = () => {
    dispatch(setShowConnect(false));
  };

  return (
    <>
      <div>
        {/* Demo modal */}
        <Modal
          show={showConnectModal}
          onHide={handleClose}
          backdrop="static"
          keyboard={false}
          centered
          contentClassName="connect-wrap"
          size="lg"
        >
          <Modal.Body>
            <div className="connect-body">
              <h4 className="connect-header-text">Connect to..</h4>
              <div className="connect-background">
                <div className="connect-content">
                  <div className="connect-content-parent">
                    <div className="connect-content-child">
                      <div className="connect-accordion-text">
                        {/* rooom 1 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export1"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-1"
                                // onClick={moveToCase}
                              >
                                Room 1
                              </button>
                            </h2>
                            <div
                              id="export-content-1"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export1"
                            >
                              <div className="connect-accordion-body exportOne">
                                <ul>
                                  <li id="create_new_case">000-Frizzell</li>
                                  <li id="unfiled"> 00163_SINGHOSE</li>
                                  <li>00_Singhose_00163</li>
                                  <li>01-OPEX</li>
                                  <li>080910aft</li>
                                  <li>080910morning</li>
                                  <li>080922-SCIFRES</li>
                                  <li>193rd</li>
                                  <li>Aug 10, 2022 JUDGE MANOR</li>
                                  <li>Aug 9, 2022 JUDGE MANOR</li>
                                  <li>August 8, 2022 JUDGE MANOR</li>
                                  <li>ENG 484</li>
                                  <li>HILLmorning8822</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 2 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export2"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-2"
                              >
                                Room 2
                              </button>
                            </h2>
                            <div
                              id="export-content-2"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export2"
                            >
                              <div className="connect-accordion-body exportTwo">
                                <ul>
                                  <li id="">1031</li>
                                  <li id=""> BR-RT081522-0953-0815-0953</li>
                                  <li>Class Tuesday</li>
                                  <li>KENDALL</li>
                                  <li>csr12342</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 3 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export3"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-3"
                              >
                                Room 3
                              </button>
                            </h2>
                            <div
                              id="export-content-3"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export3"
                            >
                              <div className="connect-accordion-body exportThree">
                                <ul>
                                  <li id="">Schnarrs</li>
                                  <li id=""> Vanessa</li>
                                  <li>tpb</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 4 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export4"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-4"
                              >
                                Room 4
                              </button>
                            </h2>
                            <div
                              id="export-content-4"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export4"
                            >
                              <div className="connect-accordion-body exportFour">
                                <ul>
                                  <li id="">08-15-22 Enriquez Oyando DAY 1</li>
                                  <li id=""> 2022-08-15-PM - Morrow</li>
                                  <li>2022-AUG-15-AM - Morrow</li>
                                  <li>Jorgl v AIM</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 5 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export5"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-5"
                              >
                                Room 5
                              </button>
                            </h2>
                            <div
                              id="export-content-5"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export5"
                            >
                              <div className="connect-accordion-body exportFive">
                                <ul>
                                  <li id="">
                                    BR-20220815 Marcus Anthony Lee-0815-1417
                                  </li>
                                  <li id="">Coats</li>
                                  <li>SEP Kris</li>
                                  <li>SRC</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 6 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export6"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-6"
                              >
                                Room 6
                              </button>
                            </h2>
                            <div
                              id="export-content-6"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export6"
                            >
                              <div className="connect-accordion-body exportSix">
                                <ul>
                                  <li id="">Chapman</li>
                                  <li id="">DAILY </li>
                                  <li>audiencia perupetro</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 7 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export7"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-7"
                              >
                                Room 7
                              </button>
                            </h2>
                            <div
                              id="export-content-7"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export7"
                            >
                              <div className="connect-accordion-body exportSeven">
                                <ul>
                                  <li id="">ERam-081522-2</li>
                                  <li id="">VH5 v Rabe</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                        {/* room 8 */}
                        <div
                          className="connect-accordion connect-accordion-flush"
                          id="export8"
                        >
                          <div className="connect-accordion-item">
                            <h2 className="connect-accordion-header">
                              <button
                                id="moveToCaseOption"
                                className="connect-accordion-button collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#export-content-8"
                              >
                                Room 8
                              </button>
                            </h2>
                            <div
                              id="export-content-8"
                              className="connect-accordion-collapse collapse"
                              data-bs-parent="#export8"
                            >
                              <div className="connect-accordion-body exportEight">
                                <ul>
                                  <li id="">081522TPLS LITTLEJOHN</li>
                                  <li id="">BAILEY</li>
                                  <li id="">Lewis</li>
                                  <li id="">ROLAND</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div>
                      {" "}
                      <label className="col-2">
                        <b>Session:</b>
                      </label>
                      <input
                        className="col-10 connect-text-input"
                         type="text" id="txt"
                      />
                    </div>

                    <div>
                      <label className="col-2">
                        <b>Password:</b>{" "}
                      </label>
                      <input
                        className="col-10 connect-text-input"
                        type="password"
                      />
                    </div>
                  </div>

                  <div>
                    <div className="d-flex flex-row">
                      {" "}
                      <Button variant="btn col-6 connect-close-btn">
                        <img src={right_icon} alt="apply" />
                      </Button>
                      <Button
                        variant="btn col-6 connect-close-btn"
                        onClick={closeDemo}
                      >
                        <img src={cross_icon} alt="close" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default Connect;
