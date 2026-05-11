import React from 'react'
import { useContext } from 'react'
import { Themedatacontext } from '../context/Themecontext'

const Nav2 = () => {

  const theme = useContext(Themedatacontext);
  return (
    <div className='nav2'>
      <h4>Home</h4>
      <h4>About </h4>
      <h4>Contact</h4>
      <h4>{theme}</h4>
      <h4></h4>
    </div>
  )
}

export default Nav2
