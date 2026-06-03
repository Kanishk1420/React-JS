import {useRef} from 'react'

const MemoCount = () => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div>
      <p>Render Count: {renderCount.current++}times</p>
    </div>
  )
}

export default MemoCount