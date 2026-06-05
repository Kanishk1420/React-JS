import { memo, useCallback, useState } from "react";

const EmployeeCard = memo(({ onDelete }) => {
  console.log(" EmployeeCard Rendered! (No Callback)");
  return <button onClick={onDelete}>Delete Employee</button>;
});

const EmployeeCardwithcallback = memo(({ onDelete }) => {
  console.log(" EmployeeCardwithcallback Rendered! (With Callback)");
  return <button onClick={onDelete}>Delete Employee with Callback</button>;
});

const UseCallback = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 2. This function gets re-created on every render
  const handleDelete = () => {
    console.log("Employee deleted!");
  };

  // 3. This function is memoized and stays the same across renders
  const callbackhandledelete = useCallback(() => {
    console.log("handleDelete function created!");
  }, []);

  return (
    <div>
      <div
        style={{ background: isDarkMode ? "#333" : "#fff", padding: "20px" }}
      >
        <h2>Dashboard</h2>
        <button onClick={() => setIsDarkMode(!isDarkMode)}>Toggle Theme</button>
        <br />
        <br />
        {/* This WILL re-render because handleDelete is a new reference */}
        <EmployeeCard onDelete={handleDelete} />
        <br />
        <br />
        {/* This WILL NOT re-render because callbackhandledelete is memoized */}
        <EmployeeCardwithcallback onDelete={callbackhandledelete} />
      </div>
    </div>
  );
};

export default UseCallback;
