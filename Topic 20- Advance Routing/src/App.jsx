import React from 'react'
import { Route, Routes, Navigate } from 'react-router-dom'
import Home from './pages/Home'
import Welcome from './pages/Welcome'
import { useMyLocation } from './components/uselocation'
import DashboardLayout from './practice/DashboardLayout'
import Courses from './practice/Courses'
import { CourseDetails } from './practice/CourseDetails'
import Login from './pages/Login'
import  Proctected  from './components/Protected'
const App = () => {
const location = useMyLocation();
  return (
    <div>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        <Route element={<Proctected Component={Home}/>} >
        <Route path='/' element={<Welcome/>}/>
        <Route path='/Home' element={<h1>Welcome to Home and pathname is {location}</h1>}/>
        <Route path='/my' element={<h1>Welcome to my page and pathname is {location} </h1>}/>
        <Route path='/About' element={<h1>Welcome to about page and pathname is {location}</h1>}/>
        <Route path='/Courses' element={<h1>Welcome to Courses page and pathname is {location}</h1>}/>
        <Route path='*' element={<Navigate to= '/'/>}/>
        <Route path = '/dashboard' element={<DashboardLayout/>}>
          <Route path = 'my' element= {<h1>Welcome to your profile info and pathname is {location}</h1>}/>
          <Route path='courses' element={<Courses/>}/>
          <Route path= 'courses/:id' element={<CourseDetails/>}/>
          <Route path='*' element={<Navigate to= '/dashboard'/>}/>
        </Route>
        <Route path='/old-portal' element={<Navigate to='/dashboard/courses' replace />}/>
        </Route>
      </Routes>
    </div>
  )
}

export default App;