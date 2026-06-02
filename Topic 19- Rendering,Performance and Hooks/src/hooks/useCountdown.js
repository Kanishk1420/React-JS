import { useEffect, useState } from "react";

export const useCountdown = (initial) => {
  const [count, setcount] = useState(initial);
  const [isActive, setIsActive] = useState(false); 
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
  return { count, startCountdown, stopCountdown, isActive };   
};