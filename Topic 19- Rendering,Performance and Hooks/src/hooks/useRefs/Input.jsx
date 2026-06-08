import React from 'react'

const Input = ({type, placeholder, id, ref}) => {
  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      id={id} 
      ref={ref}
      className="p-2 border rounded border-gray-400" 
    />
  )
}

export default Input
