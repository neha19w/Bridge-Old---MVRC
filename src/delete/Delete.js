import React from "react";
import "./Delete.css";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap";
import right_icon from "../static/images/right_icon.svg";
import cross_icon from "../static/images/cross_icon.svg";
import { setShowDelete } from "../redux/actions/actions";

const Delete = () => {
  const dispatch = useDispatch();
  const showDeleteModal = useSelector((state) => state.showDelete.showDelete);

  const handleClose = () => {
    dispatch(setShowDelete(false));
  };

  return (
    <div>
      {/* Send Alert modal */}
      <Modal
        show={showDeleteModal}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        centered
        contentClassName="delete-wrap"
      >
        <Modal.Body>
          <div className="delete-body">
            <h4 className="delete-header-text">Alert</h4>
            <div className="delete-content">
              <p className="p-1 delete-text">
              Delete file unfiled/Demo feed?
              </p>
              <div className="p-1">
                {" "}
                <Button variant="btn col-6 delete-c-btn">
                <button className="yes-btn">YES</button>
                </Button>
                <Button variant="btn col-6 delete-c-btn" onClick={handleClose} >
                <button className="no-btn">NO</button>
                </Button>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Delete;
