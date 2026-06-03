import React from 'react'
import { useState } from 'react'
import MemoCount from "./MemoCount";
const ReactMemo = () => {
  const mybiodata = {
    name: "Kanishk",
    age: 22,
  }
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <MemoCount biodata={mybiodata}/> {/* Every time you click the increment button, the ReactMemo component re-renders. This recreates the mybiodata object, giving it a completely new reference in memory.
      memo Fails: Because ReactMemo passes this new object reference to MemoCount, ReactMemo.memo checks the previous reference against the new reference. Since they are different, it assumes the props have changed and re-renders MemoCount anyway, breaking the optimization. */}
    </div>
  )
}

export default ReactMemo
