import React from "react";
import "./AlertModal.css";
import { useSelector, useDispatch } from "react-redux";
import { setShowSendAlert } from "../redux/actions/actions";
import { Modal, Button } from "react-bootstrap";
import right_icon from "../static/images/right_icon.svg";

const AlertModal = () => {
  const dispatch = useDispatch();
  const showSendAlertModal = useSelector(
    (state) => state.showSendAlert.showSendAlert
  );

  const handleClose = () => {
    dispatch(setShowSendAlert(false));
  };
  return (
    <div>
      {/* Send Alert modal */}
      <Modal
        show={showSendAlertModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="alert-wrap"
      >
      
        <Modal.Body>
          <div className="alert-body">
          <h4 className="header-text">Alert</h4>
          <div className="alert-content">
          <p className="p-1 alert-text">Please open the file you wish to export.</p>
         <div className="p-1"> <Button variant="btn col-12 close-btn" onClick={handleClose}>
            <img src={right_icon} alt="close alert"/>
          </Button></div>
          </div>
          </div>
          </Modal.Body>
      </Modal>
    </div>
  );
};
export default AlertModal;
