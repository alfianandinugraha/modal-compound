import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div>
      <Modal open={isOpen} title="Login" onClose={toggle}>
        <Modal.Body>
          <TextField
            placeholder="Email"
            variant="standard"
            sx={{ width: "100%" }}
          />
          <TextField
            placeholder="Password"
            variant="standard"
            type="email"
            sx={{ width: "100%", mt: "1rem" }}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={toggle} variant="contained">
            Login
          </Button>
        </Modal.Footer>
      </Modal>
      <Button variant="contained" onClick={toggle}>
        Open Modal
      </Button>
    </div>
  );
}

export default App;
