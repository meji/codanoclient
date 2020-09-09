import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { dataContext } from '../providers/dataProvider'

export const Home: React.FC = () => {
  const history = useHistory()
  const { user } = useContext(dataContext)
  if (user.name) {
    history.push(routes.boards)
  }
  return (
    <>
      <h1>Home</h1>
    </>
  )
}
