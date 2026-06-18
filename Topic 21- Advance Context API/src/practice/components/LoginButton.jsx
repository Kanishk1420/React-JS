import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import { useAuthContext } from '../../practice/context/contextUtils'
import Button from './Button'
const LoginButton = () => {
 const { user, pass } = useAuthContext()
 const username = user.username
 const password = pass.password
 const navigate = useNavigate();
 const handleSubmit = (e) => {
    e.preventDefault()
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', true)
      navigate('/cart')
    } else {
      alert('Invalid username or password')
    }
    user.setusername('')
    pass.setpassword('')
  }
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      navigate('/cart')
    }
  }, [navigate])
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1>Login Page</h1>
        <input
        id='username'
        type='text'
        placeholder='Username'
        required
        onChange={(e) => user.setusername(e.target.value)}
        value={username}
        />
        <br />
        <input
        id='password'
        type='password'
        placeholder='Password'
        required
        onChange={(e) => pass.setpassword(e.target.value)}
        value={password}
        />
        <br />
        <Button onClick={handleSubmit}>Login</Button>
      </form>
    </div>
  )
}

export default LoginButton