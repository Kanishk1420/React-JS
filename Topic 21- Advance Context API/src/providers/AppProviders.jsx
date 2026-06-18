import React from 'react'
import UserProvider from '../context/Usercontext'
import ThemeProvider from '../context/Themecontext'
const AppProviders = (props) => {
  return (
    <div>
      <ThemeProvider>
        <UserProvider>
        {props.children}
        </UserProvider>
      </ThemeProvider>
    </div>
  )
}

export default AppProviders
