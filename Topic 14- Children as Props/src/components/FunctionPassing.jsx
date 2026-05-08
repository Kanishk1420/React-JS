import React from 'react'

const Navbar = (props) => {
  return (
    <div>
      <button onClick={()=>{
        props.setTheme(props.theme === 'light' ? 'dark' : 'light') 
      }}>Change theme</button>
    </div>
  )
}

export default Navbar
