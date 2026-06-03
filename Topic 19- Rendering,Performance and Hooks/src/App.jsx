import React from 'react'
import {UseRefs}  from './hooks/useRefs/index'
import Index from './hooks/useId/index'
import Countdown from './hooks/practice/Countdown'
import HistorySearch from './hooks/practice/HistorySearch'
import  ReactMemo  from './hooks/memo/ReactMemo'
const App = () => {
  return (
    <div>
      <UseRefs/>
      <Index/>
      <Countdown/>
      <HistorySearch/>
      <ReactMemo/>
    </div>
  )
}

export default App