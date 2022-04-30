import { Button, TextField } from "@mui/material";
import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div>
      <Modal open={isOpen} title="Simple Modal" onClose={toggle}>
        <Modal.Body>
          <TextField placeholder="Masukkan nama" variant="standard" />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="contained">Simpan</Button>
        </Modal.Footer>
      </Modal>
      <Button variant="contained" onClick={toggle}>
        Open Modal
      </Button>
    </div>
  );
}

export default App;
