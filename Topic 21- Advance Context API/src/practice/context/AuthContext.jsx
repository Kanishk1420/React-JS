import { useState, useMemo } from 'react'
import { AuthDataContext } from './contextUtils'

const AuthContext = ({ children }) => {
  const [username, setusername] = useState('')
  const [password, setpassword] = useState('')
  const user = useMemo(() => ({ username, setusername }), [username])
  const pass = useMemo(() => ({ password, setpassword }), [password])

  return (
    <AuthDataContext.Provider value={{ user, pass }}>
      {children}
    </AuthDataContext.Provider>
  )
}

export default AuthContext
