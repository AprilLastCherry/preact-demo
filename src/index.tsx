import { render } from "preact";
import { useState } from "preact/hooks";
import Modal from "react-modal";
import Content from "./App";

Modal.setAppElement("#root");

const App = () => {
  const [modalIsOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Open Modal
      </button>

      <Modal isOpen={modalIsOpen}>
        <Content setIsOpen={setIsOpen} />
      </Modal>
    </>
  );
};

render(<App />, document.getElementById("root"));
