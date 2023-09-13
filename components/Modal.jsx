import React from "react";

const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="modal-background" onClick={closeModal}></div>
      <div className="modal-content bg-white w-1/2 p-4 rounded-lg shadow-lg">{children}</div>
    </div>
  );
};

export default Modal;
