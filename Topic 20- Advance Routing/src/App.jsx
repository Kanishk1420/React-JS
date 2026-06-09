import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import { useMyLocation } from './components/uselocation'
const App = () => {
const location = useMyLocation();
  return (
    <div>
      <Routes>
        <Route element={<Home/>}>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Home' element={<h1>Welcome to Home and pathname is {location}</h1>}/>
        <Route path='/my' element={<h1>Welcome to my page and pathname is {location} </h1>}/>
        <Route path='/About' element={<h1>Welcome to about page and pathname is {location}</h1>}/>
        <Route path='/Courses' element={<h1>Welcome to Courses page and pathname is {location}</h1>}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;