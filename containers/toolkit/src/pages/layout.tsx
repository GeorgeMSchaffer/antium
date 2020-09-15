import React, { FC } from 'react'
import { useNavigate, Outlet } from 'react-router-dom'

const Layout: FC = () => {
  const navigate = useNavigate()

  const logout = () => {
    navigate('/login')
  }
  return (
    <div>
      <button onClick={logout}>logout</button>
      <Outlet />
    </div>
  )
}

export default Layout
