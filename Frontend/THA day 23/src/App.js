import useToggle from "./hooks/useToggle";
import RouterDom from "./RouterDom";
import "./App.css";

function App() {
  const [isTextChanged, setIsTextChanged] = useToggle();

  return (
    <>
      <h2>Custom Hooks and React Router DOM</h2>
      <div>
        <h3>use toggle custom hooks is used for this</h3>
        <button onClick={setIsTextChanged}>
          {isTextChanged ? "Toggled" : "Click to Toggle"}
        </button>
      </div>
      <div>
        <h3>React Router DOM</h3>
        <RouterDom />
      </div>
    </>
  );
}

export default App;