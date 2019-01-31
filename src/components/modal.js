import React from "react";
import Modal from "react-modal";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};
const AlertModal = props => (
  <div>
    <Modal
      isOpen={true}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h1 className="text-center text-danger mt-5 mb-3  Hello">Alert</h1>
      <div>
        <h3 className="text-center text-success cc">details</h3>
      </div>
      <button
        onClick={props.closeModal}
        className=" mt-3  btn-block btn btn-primary"
      >
        close
      </button>
    </Modal>
  </div>
);

export default AlertModal;
