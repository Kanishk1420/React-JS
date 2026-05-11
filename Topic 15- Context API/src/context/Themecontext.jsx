import React from 'react'
import { createContext } from 'react'
export const Themedatacontext = createContext() // 1. Creating a context using createContext() and then export 
const Themecontext = (props) => {
  return (
    <div>
      <Themedatacontext.Provider value={'Kanishk'}> {/* 2. Wrapping the children components with Themecontext.Provider and passing the value to be shared */}
     {props.children} {/* this will render all the children components wrapped inside Themecontext component in main.jsx */}
      </Themedatacontext.Provider>  
    </div>
  )
}

export default Themecontext
