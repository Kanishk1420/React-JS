import React from 'react'
import { NavLink } from 'react-router-dom'
import { activeLinkStyle } from '../components/Activetab'
import { useSearchParams } from 'react-router-dom'
const Welcome = () => {
const [searchParams, setSearchParams] = useSearchParams();
const name = searchParams.get('name');
const age = searchParams.get('age');
  return (
    <div>
      <h1>
      Welcome to React Router Dom
      </h1>
      <div>
        <h2>Name: {name}</h2>
        <h2>Age: {age}</h2>
      </div>
      <NavLink to='/Home' style={activeLinkStyle}><h2><u>Go to Home</u></h2></NavLink>
      <div>
        <button onClick={() => setSearchParams({ name: 'Kanishk', age: Math.floor(Math.random()*100)+1})}>Set Search Params</button>
        <button onClick={() => setSearchParams({})}>Clear Search Params</button>
      </div>
    </div>
  )
}

export default Welcome
