import React from 'react'

const Themecontext = (props) => {
  return (
    <div>
     {props.children} {/* this will render all the children components wrapped inside Themecontext component in main.jsx */}
    </div>
  )
}

export default Themecontext
