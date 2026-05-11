import React from 'react'
import Nav2 from './Nav2'
import {useContext} from 'react'
import { Themedatacontext } from '../context/Themecontext'

const Navbar = () => {

  const value = useContext(Themedatacontext) // 3. Using useContext hook to consume the context value in any child component
  console.log(value);
   
  return (
    <div className='nav'>
      <h1>{value}</h1>
      <Nav2/>
    </div>
  )
}

export default Navbar
