import React from 'react'
import { useState } from 'react'
import Navbar from './components/FunctionPassing';
const App = () => {
  const [Theme, setTheme] = useState('light');
  return (
    <div>
      <h1>Theme is {Theme}</h1>
      <Navbar theme={Theme} setTheme= {setTheme}/> {/* passing theme and setTheme as props to Navbar component */}
    </div>
  )
}

export default App
