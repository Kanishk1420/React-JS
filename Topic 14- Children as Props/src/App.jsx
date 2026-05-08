import React from 'react'
import { useState } from 'react'
import Function from './components/FunctionPassing';
import Navbar from './components/Navbar';
const App = () => {
  const [Theme, setTheme] = useState('light');
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Function theme={Theme} setTheme= {setTheme}/> {/* passing theme and setTheme as props to Navbar component */}
      <Navbar  theme={Theme} setTheme= {setTheme}/>
    </div>
  )
}

export default App
