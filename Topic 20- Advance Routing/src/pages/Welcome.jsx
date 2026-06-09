import React from 'react'
import { NavLink } from 'react-router-dom'
import { activeLinkStyle } from '../components/Activetab'
const Welcome = () => {
  return (
    <div>
      <h1>
      Welcome to React Router Dom
      </h1>
      <NavLink to='/Home' style={activeLinkStyle}><h2><u>Go to Home</u></h2></NavLink>
    </div>
  )
}

export default Welcome
