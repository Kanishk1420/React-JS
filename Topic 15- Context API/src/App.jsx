import React from 'react'
import { useState } from 'react'
import Navbar from './components/Navbar';
const App = () => {
  const [Theme, setTheme] = useState('light');
  return (
    <div>
      <Navbar  theme={Theme} setTheme= {setTheme}/>
    </div>
  )
}

export default App
