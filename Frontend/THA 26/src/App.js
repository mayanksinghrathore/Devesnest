import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { changeName, changeEmail } from "./actions/index";

const App = () => {
  const nameState = useSelector((state) => state.changeTheName);
  const emailState = useSelector((state) => state.changeTheEmail);
  const dispatch = useDispatch();

  return (
    <>
      <p>Made By: Ansh Sawant</p>
      <div>
        <h1>Input</h1>
        <p>
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => dispatch(changeName(e.target.value))}
          />
        </p>
        <p>
          <input
            type="text"
            placeholder="Email"
            onChange={(e) => dispatch(changeEmail(e.target.value))}
          />
        </p>
      </div>
      <div>
        <h1>Data</h1>
        <p>Username: {nameState}</p>
        <p>Email: {emailState}</p>
      </div>
    </>
  );
};

export default App;