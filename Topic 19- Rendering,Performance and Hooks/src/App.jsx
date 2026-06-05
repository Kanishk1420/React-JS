import React from 'react'
import {UseRefs}  from './hooks/useRefs/index'
import Index from './hooks/useId/index'
import Countdown from './hooks/practice/Countdown'
import HistorySearch from './hooks/practice/HistorySearch'
import  ReactMemo  from './hooks/memo/ReactMemo'
import MemoParentComponent from './hooks/memo/UseMemo'
import UseCallback from './hooks/memo/UseCallback'
import Shopping from './hooks/practice/Shopping'
const App = () => {
  return (
    <div>
      <UseRefs/>
      <Index/>
      <Countdown/>
      <HistorySearch/>
      <ReactMemo/>
      <MemoParentComponent/>
      <UseCallback/>
      <Shopping/>
    </div>
  )
}

export default App