import { Box, Typography } from "@mui/material";
import ReactDOM from "react-dom";

const ModalBody = ({ children = null }) => {
  return <main>{children}</main>;
};

const ModalFooter = ({ children = null }) => {
  return <footer>{children}</footer>;
};

const Modal = ({
  children = null,
  open = false,
  title = "",
  onClose = () => {},
}) => {
  if (!open) return null;

  return ReactDOM.createPortal(
    <>
      <Box
        position="fixed"
        zIndex={20}
        top="50%"
        left="50%"
        sx={{ transform: "translate(-50%, -50%)" }}
        boxShadow="rgba(149, 157, 165, 0.2) 0px 8px 24px;"
        bgcolor="white"
        p="1rem"
        borderRadius=".5rem"
        width="500px"
      >
        <Box display="flex" alignItems="center" justifyContent="space-between">
          <Typography variant="h1" fontSize="1.5rem" fontWeight="bold">
            {title}
          </Typography>
          <Typography variant="caption" onClick={onClose}>
            close
          </Typography>
        </Box>
      </Box>
      <Box
        position="fixed"
        zIndex={10}
        bgcolor="rgba(0, 0, 0, 0.5)"
        width="100%"
        height="100%"
        top={0}
        left={0}
      />
    </>,
    document.getElementById("root")
  );
};

Modal.Body = ModalBody;

Modal.Footer = ModalFooter;

export default Modal;
