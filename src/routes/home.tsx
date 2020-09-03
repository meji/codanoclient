import React from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from './routes'

export const Home: React.FC = () => {
  const history = useHistory()

  return (
    <>
      <h1>Home</h1>
      <button
        onClick={() => {
          history.push(routes.boards)
        }}
      ></button>
    </>
  )
}
