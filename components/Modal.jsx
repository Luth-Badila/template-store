"usel client";
const Modal = ({ isOpen, closeModal, children }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute inset-0 flex items-center justify-center z-50">
      <div className="modal-background" onClick={closeModal}>
        {children}
      </div>
      <div className="modal-content bg-white w-full p-4 rounded-lg shadow-lg"></div>
    </div>
  );
};

export default Modal;
