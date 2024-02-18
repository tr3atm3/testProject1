import React from "react";
import "./Modal.css";
const Modal = (props) => {
  return (
    <div className="modal-div">
      <div className="content">
        <div className="head">
          <h2>Invalid Input</h2>
        </div>
        <div className="message">
          <p>Please enter valid</p>
        </div>
        <button onClick={props.handleModal}>Okay</button>
      </div>
    </div>
  );
};

export default Modal;
