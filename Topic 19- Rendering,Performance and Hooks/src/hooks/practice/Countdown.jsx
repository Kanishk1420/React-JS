import { useId, useRef } from "react";
import { useCountdown } from "../useCountdown";
const Practicehooks = () => {
  const username = useId();
  const name = useRef("");
  const { count, startCountdown, stopCountdown } = useCountdown(10);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", name.current.value);
    name.current.value = '';
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor={username}>Name:</label>
        <input type="text" placeholder="Enter your name" id={username} ref={name} />
        <button type="submit">Submit Name</button> 
        <h1>Countdown display:-{count}</h1>
        <button type="button" onClick={startCountdown}>Start</button>
        <button type="button" onClick={stopCountdown}>Reset</button>
      </form>
    </div>
  );
};

export default Practicehooks;
