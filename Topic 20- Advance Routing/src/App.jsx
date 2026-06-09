import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'

const App = () => {
  return (
    <div>
      <Routes>
        <Route element={<Home/>}>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Home' element={<h1>Welcome to Home</h1>}/>
        <Route path='/my' element={<h1>Welcome to my page </h1>}/>
        <Route path='/About' element={<h1>Welcome to about page</h1>}/>
        <Route path='/Courses' element={<h1>Welcome to Courses page</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;