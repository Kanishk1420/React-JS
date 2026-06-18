import React from 'react'
import { useThemeContext } from '../../practice/context/contextUtils'
const Input = ({ value, onChange, style, ...rest }) => {
  const { theme } = useThemeContext();
  return (
    <div>
      <input
        {...rest}
        value={value}
        onChange={onChange}
        style={{
          backgroundColor: theme === 'white' ? '#ffffff' : '#2a2a2a',
          color: theme === 'white' ? '#000000' : '#ffffff',
          border: theme === 'white' ? '1px solid #000000' : 'none',
          padding: '10px 10px',
          borderRadius: '8px',
          fontSize: '15px',
          outline: 'none',
          transition: 'all 0.2s ease',
          marginTop: '10px',
          ...style,
        }}
      />
    </div>
  )
}

export default Input
