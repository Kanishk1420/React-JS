import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementbyAmount,
  increment,
  incrementbyAmount,
  themeToggle,
} from "./redux/features/counterslice";

const App = () => {
  const [num, setnum] = useState(5);
  const dispatch = useDispatch(); // 3. Get the dispatch function from the Redux store to dispatch actions.
  const count = useSelector((state) => state.counter.value); // 4. Show the dispactch value in Ui.
  const mode = useSelector((state) => state.theme.theme);
  return (
    <div>
      <h1>{count}</h1>
      <button
        onClick={() => {
          // 5 .dispatch the action to increment the counter
          dispatch(increment());
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          // 5. dispatch the action to decrement the counter
          dispatch(decrement());
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          dispatch(incrementbyAmount(num));
        }}
      >
        Increase by Amount
      </button>
      <button
        onClick={() => {
          dispatch(decrementbyAmount());
        }}
      >
        Decrease by Amount
      </button>
      <input
        type="number"
        value={num}
        onChange={(e) => {
          setnum(Number(e.target.value)); // two-way-binding here we are converting the num value from string to number because the value of input is always a string and we want to pass a number to the incrementbyAmount action.
        }}
      />
      <h1>Current Theme: {mode}</h1>
      <button
        onClick={() => {
          dispatch(themeToggle());
        }}
      >
        Change theme to {mode === "light" ? "dark" : "light"}
      </button>
    </div>
  );
};

export default App;
