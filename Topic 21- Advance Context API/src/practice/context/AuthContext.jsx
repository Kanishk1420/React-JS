import { useState, useMemo } from 'react'
import { AuthDataContext } from './contextUtils'

const AuthContext = ({ children }) => {
  const [user, setUser] = useState('')
  const value = useMemo(() => ({ user, setUser }), [user])
  return (
    <AuthDataContext.Provider value={value}>
      {children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext
