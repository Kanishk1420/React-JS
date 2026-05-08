import React from "react";
import { useNavigate } from "react-router-dom";
const Button = () => {
  const navigate = useNavigate();
  const backtohome = () => {
    navigate("/");
  };
  const previouspage = () => {
    navigate(-1);
  };
  const nextpage = () => {
    navigate(1);
  };
  return ( 
    <>
      <button
        className="font-medium bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
        onClick={backtohome}
      >
        Home button
      </button>
      <button
        className="font-medium bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
        onClick={previouspage}
      >
        Previous page
      </button>
      <button
        className="font-medium bg-emerald-800 hover:bg-emerald-700 text-white px-6 py-2 rounded-lg transition-all duration-300 active:scale-95 shadow-md hover:shadow-lg"
        onClick={nextpage}
      >
        Next page
      </button>
    </>
  );
};

export default Button;
