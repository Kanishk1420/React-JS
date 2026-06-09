import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import { activeLinkStyle } from '../components/Activetab'

const Home = () => {
  return (
    <div>
      {/* --- Header Navigation Area --- */}
      <nav style={{ padding: '10px', borderBottom: '1px solid #ccc', marginBottom: '20px' }}>
        {/* Pass our styling function to the style prop of NavLink */}
        <NavLink to='/my' style={activeLinkStyle}>My</NavLink>
        <NavLink to='/About' style={activeLinkStyle}>About</NavLink>
        <NavLink to='/Courses' style={activeLinkStyle}>Courses</NavLink>
        <NavLink to='/Home' style={activeLinkStyle}>Home</NavLink>
        <NavLink to='/' style={activeLinkStyle}>Go back</NavLink>
      </nav>
      <Outlet />
    </div>
  )
}

export default Home;