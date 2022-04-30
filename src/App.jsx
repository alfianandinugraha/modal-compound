import { Button } from "@mui/material";
import { useState } from "react";
import Modal from "./components/modal";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen((isOpen) => !isOpen);

  return (
    <div>
      <Modal open={isOpen} title="Simple Modal" onClose={toggle} />
      <Button variant="contained" onClick={toggle}>
        Open Modal
      </Button>
    </div>
  );
}

export default App;
