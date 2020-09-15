import React from 'react'
import { useRoutes } from 'react-router-dom'
import Layout from 'pages/layout'
//import Demo from 'pages/demo'
import Detail from 'pages/detail'
import Login from 'pages/login'
import Form from 'pages/Form'
const App = () => {
  const element = useRoutes([
    {
      element: <Login />,
      path: '/login'
    },
    {
      element: <Layout />,
      path: '/',
      children: [
        {
          element: <Form />,
          path: '/'
        },
        {
          element: <Detail />,
          path: '/detail'
        }
      ]
    }
  ])
  return element
}

export default App
