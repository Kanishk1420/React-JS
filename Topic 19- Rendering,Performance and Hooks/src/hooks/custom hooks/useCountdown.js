import { useEffect, useState, useRef, useId } from "react";
export const useCountdown = (initial) => {
  const username = useId();
  const name = useRef("");
  const [count, setcount] = useState(initial);
  const [isActive, setIsActive] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", name.current.value);
    name.current.value = "";
  };
  const startCountdown = () => {
    setIsActive(true);
  };
  const stopCountdown = () => {
    setIsActive(false);
    setcount(initial);
  };

  useEffect(() => {
    let intervalId;
    if (isActive && count > 0) {
      intervalId = setInterval(() => {
        setcount((prevCount) => prevCount - 1);
      }, 1000);
    }
    return () => {
      clearInterval(intervalId);
    };
  }, [isActive, count]);

  useEffect(() => {
    if (count === 0 && isActive) {
      setIsActive(false);
      alert("Countdown finished!");
    }
  }, [count, isActive]);
  return {
    count,
    startCountdown,
    stopCountdown,
    isActive,
    handleSubmit,
    name,
    username,
  };
};
