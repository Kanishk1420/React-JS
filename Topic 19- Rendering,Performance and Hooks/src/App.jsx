import React from 'react'
import {UseRefs}  from './hooks/useRefs/index'
import Index from './hooks/useId/index'
import Countdown from './hooks/practice/Countdown'
import HistorySearch from './hooks/practice/HistorySearch'
import  ReactMemo  from './hooks/memo/ReactMemo'
import MemoParentComponent from './hooks/memo/UseMemo'
import UseCallback from './hooks/memo/UseCallback'
import Shopping from './hooks/practice/Shopping'
import Leaderboard from './hooks/practice/Leaderboard'
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
      <Leaderboard/>
    </div>
  )
}

export default App