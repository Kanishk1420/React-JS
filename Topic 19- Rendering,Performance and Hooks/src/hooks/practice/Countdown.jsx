import { useCountdown } from "../custom hooks/useCountdown";
const Practicehooks = () => {
  const { count, startCountdown, stopCountdown, handleSubmit, name, username} = useCountdown(10);
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
