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
      isOpen={props.decisions.open}
      onRequestClose={props.closeModal}
      style={customStyles}
      contentLabel="Example Modal"
    >
      <h3 className="text-center text-success mt-5 mb-3 cd">
        Perfect choice is
      </h3>
      <div>
        <h1 className="text-center text-danger  hc">
          {" "}
          {props.decisions.decision}
        </h1>
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
