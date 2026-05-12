import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  decrementbyAmount,
  increment,
  incrementbyAmount,
} from "./redux/features/counterslice";

const App = () => {
  const dispatch = useDispatch(); // 3. Get the dispatch function from the Redux store to dispatch actions.
  const count = useSelector((state) => state.counter.value); // 4. Show the dispactch value in Ui.
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
          dispatch(incrementbyAmount(10));
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
    </div>
  );
};

export default App;
