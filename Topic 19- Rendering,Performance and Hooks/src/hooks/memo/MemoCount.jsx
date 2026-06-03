import {useRef, memo} from 'react'

const MemoCount = () => {
  const renderCount = useRef(0);
  console.log(renderCount);
  return (
    <div>
      <p>Render Count: {renderCount.current++}times</p> {/* This will increment the render count every time the component renders. only when component render otherwise by applying memo it will not increment here until unless it needs it*/}
    </div>
  )
}

export default memo(MemoCount);