import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'

const Detail: FC = () => {
  const navigate = useNavigate()

  const backToDemo = () => {
    navigate('/')
  }
  return (
    <div>
      <h1>Detail</h1>
      <button onClick={backToDemo}>back to demo</button>
    </div>
  )
}

export default Detail
