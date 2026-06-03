import { useMemo, useState } from "react";

const ExpensiveComponent = () => {
  const sum = () => {
    console.log("Calculating sum...");
    let i = 0;
    for (i = 0; i <= 1000000000; i++) {
      i = i + 1;
    }
    return i;
  };
  const total = useMemo(() => sum(), []);
  return <p> sum: {total}</p>;
};

const MemoParentComponent = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <ExpensiveComponent />
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <p>Parent re-renders: {count}</p>{" "}
      {/* This will flucate the value little late because expensive calculations wala component phele chaleha fir vo is button mei dikhega without using usememo ya memo */}
    </div>
  );
};
export default MemoParentComponent;
