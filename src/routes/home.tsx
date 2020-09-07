import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from './routes'
import { dataContext } from '../features/providers/dataProvider'

export const Home: React.FC = () => {
  const history = useHistory()
  const { user } = useContext(dataContext)
  if (user.name) {
    console.log(user)
    history.push(routes.boards)
  }
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
