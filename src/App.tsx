import { useState } from "preact/hooks";

const App = (props) => {
  const [count, setCount] = useState(0);
  const onclick = () => {
    return setCount(1);
  };

  return (
    <div>
      <button
        onClick={() => {
          props.setIsOpen(false);
        }}
      >
        close
      </button>
      <div>{count}</div>
      <button
        onClick={() => {
          onclick();
        }}
      >
        add
      </button>
    </div>
  );
};

export default App;
