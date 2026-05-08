import React from 'react'
import { Link } from 'react-router-dom'
let user =  Math.random().toString(36).substring(2, 10); 
const Courses = () => { 
  return (
    <>
    <div className='flex justify-center items-center gap-8 py-6 bg-gray-100'>
    <Link className="text-xl font-semibold text-gray-800 hover:text-blue-600 transition-colors" to={`/courses/${user}`}>See Example for Dynamic Routing</Link>
    </div>
    <div className='flex justify-center items-center h-136 text-3xl font-bold'>
    <h1>Dynamic Routing</h1>
    </div>
    </>
  )
}

export default Courses
