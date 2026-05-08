import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetails = () => {
   const params = useParams();
   
  return (
    <div>
    <div className='flex justify-center items-center h-155 text-3xl font-bold'>
    <h1>See the url or here:- {params.id}</h1>
    </div>
    </div>
  )
}

export default CourseDetails
