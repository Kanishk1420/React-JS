import React from 'react'
import { useThemeContext } from '../../practice/context/contextUtils'
const Button = ({onClick, children }) => {
  const { theme } = useThemeContext();
  return (
    <div>
      <button 
        style={{
          backgroundColor: theme === 'white' ? '#000000' : '#ffffff',
          color: theme === 'white' ? '#ffffff' : '#000000',
          border: theme === 'white' ? '2px solid #000000' : '2px solid #ffffff',
          padding: '10px 10px',
          borderRadius: '8px',
          fontSize: '15px',
          fontWeight: '500',
          cursor: 'pointer',
          display: 'inline-flex',
          alignItems: 'center',
          justifyContent: 'center',
          transition: 'all 0.2s ease',
          marginTop: '10px',
        }}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  )
}

export default Button
