import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import './App.css'
import './index.css'
import Notfound from './pages/Notfound'
const App = () => {
  return (
    <div>
        <Navbar/> 
        <Routes>{/* Routes is used to define the routes in the application */}
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='*'element={<Notfound/>}/> {/* * is used to match any route that is not defined in the application like if you enter any invalid route then it will show this page */}
      </Routes>
      <Footer/>
    </div>
  )
}

export default App