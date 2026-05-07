import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-800 text-white p-4 flex justify-center items-center font-semibold'>
      <div className='flex gap-8'>
        <Link to= '/'>Home</Link> {/* Link is used to navigate to different routes in the application unlike ancor tag a the page will not reload fully */}
        <Link to='/about'>About</Link>
        <Link to= '/contact'>Contact</Link>
        <Link to= '/product'>Product</Link>
      </div>
    </div>
  )
}

export default Navbar
