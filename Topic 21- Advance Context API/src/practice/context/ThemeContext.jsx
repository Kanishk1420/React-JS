import { useState, useMemo } from 'react'
import { ThemeDataContext } from './contextUtils'

const ThemeContext = ({ children }) => {
  const [theme, setTheme] = useState('white')
  const value = useMemo(() => ({ theme, setTheme }), [theme])
  return (
    <ThemeDataContext.Provider value={value}>
      {children}
    </ThemeDataContext.Provider>
  )
}

export default ThemeContext
