import React from 'react'
import { useState } from 'react'
import MemoCount from "./MemoCount";
const ReactMemo = () => {
    const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + 1)}>Increment</button>
      <MemoCount />
    </div>
  )
}

export default ReactMemo
