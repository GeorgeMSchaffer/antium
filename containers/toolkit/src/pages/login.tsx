import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Login: FC = () => {
  const navigate = useNavigate()

  const goToHome = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>Login</h1>
      <button onClick={goToHome}>go to home</button>
    </div>
  )
}

export default Login
