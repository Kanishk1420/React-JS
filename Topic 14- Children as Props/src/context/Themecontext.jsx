import React from 'react'

const Themecontext = (props) => {
  return (
    <div>
      {props.children} {/* this will render the children components which are wrapped inside Themecontext component in main.jsx */}
    </div>
  )
}

export default Themecontext
