import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className={isOpen ? "Abj-react-modal is-open" : "Abj-react-modal"}>
      <div className="overlay" onClick={onClose}></div>
      <div className="modal">
        <div className="close-button" onClick={onClose}>
          <span></span>
          <span></span>
        </div>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}

export default Modal;
