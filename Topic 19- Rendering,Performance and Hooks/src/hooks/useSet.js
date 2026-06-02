import { useRef, useState, useEffect } from "react";
export const useSet = () => {
  const searchinput = useRef("");
  const [storedSearches, setStoredSearches] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    const currentInputValue = searchinput.current.value;
    setStoredSearches((prevSearches) => {
      const updatedSearches = [...prevSearches, currentInputValue];
      console.log("Updated Search History:", updatedSearches);
      return updatedSearches;
    });
    searchinput.current.value = "";
  };
  useEffect(() => {
    const storedSearchesFromLocalStorage = JSON.parse(
      localStorage.getItem("searchHistory"),
    );
    setStoredSearches(storedSearchesFromLocalStorage);
  }, []);
  useEffect(() => {
    localStorage.setItem("searchHistory", JSON.stringify(storedSearches));
  }, [storedSearches]);

  const clearHistory = () => {
    setStoredSearches([]);
    localStorage.removeItem("searchHistory");
  };
  const clearHistorybyone = () => {
    setStoredSearches((prevSearches) => {
      const updatedSearches = prevSearches.slice(0, -1);
      console.log(
        "Updated Search History after removing last search:",
        updatedSearches,
      );
      return updatedSearches;
    });
  };
  return {
    handleSubmit,
    storedSearches,
    clearHistory,
    clearHistorybyone,
    searchinput,
  };
};
