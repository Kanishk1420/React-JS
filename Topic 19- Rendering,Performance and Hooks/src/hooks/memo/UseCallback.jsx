import { memo, useCallback, useState } from "react";

const UseCallback = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const EmployeeCard = memo(({ onDelete }) => {
    console.log("EmployeeCard Rendered!");
    return <button onClick={onDelete}>Delete Employee</button>;
  });
  const EmployeeCardwithcallback = memo(({ onDelete }) => {
    console.log("EmployeeCardwithcallback Rendered!");
    return <button onClick={onDelete}>Delete Employee with Callback</button>;
  });
  const handleDelete = () => {
    console.log("Employee deleted!");
  };
  const callbackhandledelete = useCallback(() => {
    console.log("handleDelete function created!");
  }, []); // This will memoize the handleDelete function, so it will only be created once and won't cause EmployeeCard to re-render unnecessarily.
  return (
    <div>
      <div style={{ background: isDarkMode ? "#333" : "#fff" }}>
        <h2>Dashboard</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
        <EmployeeCard onDelete={handleDelete} />{" "}
        {/* This will cause EmployeeCard to re-render every time the theme is toggled because handleDelete is a new function reference on each render. To prevent this, we can use useCallback to memoize the handleDelete function. */}
        <EmployeeCardwithcallback onDelete={callbackhandledelete} />{" "}
        {/* This will not cause EmployeeCard to re-render when the theme is toggled because callbackhandledelete is memoized and retains the same reference across renders. */}
      </div>
    </div>
  );
};

export default UseCallback;
