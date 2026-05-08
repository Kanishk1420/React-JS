import React from 'react'
import { Link, Outlet } from 'react-router-dom'
const Product = () => {
  return (
       <>
    <div className='flex justify-center items-center gap-8 py-6 bg-gray-100'>
      <Link className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors" to='/product/men'>Men</Link>
      <Link className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors" to='/product/women'>Women</Link>
      <Link className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors" to='/product/kids'>Kids</Link>
    </div>
    <div className='flex justify-center items-center h-136 text-3xl font-bold'>
    <Outlet/> {/* Outlet is used to render the child routes of the parent route*/}
    </div>
    </>
  )
}

export default Product
