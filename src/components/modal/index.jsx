import ReactDOM from "react-dom";

const ModalBody = ({ children = null }) => {
  return <main>{children}</main>;
};

const ModalFooter = ({ children = null }) => {
  return <footer>{children}</footer>;
};

const Modal = ({ children = null, open = false }) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <div>{children}</div>,
    document.getElementById("root")
  );
};

Modal.Header = ModalHeader;

Modal.Body = ModalBody;

Modal.Footer = ModalFooter;

export default Modal;
