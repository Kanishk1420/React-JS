import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='nav'>
      <div>
        <Link to= '/'>Home</Link> {/* Link is used to navigate to different routes in the application unlike ancor tag a the page will not reload fully */}
        <Link to='/about'>About</Link>
        <Link to= '/contact'>Contact</Link>
      </div>
    </div>
  )
}

export default Navbar
