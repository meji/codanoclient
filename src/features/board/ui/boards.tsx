import React, { useContext } from 'react'
import { Page } from '../../../core/components/page/page'
import { UserContext } from '../../providers/userProvider'
import { Board as boardModel } from '../domain/board'
import { Link } from 'react-router-dom'

export const BoardList: React.FC<{
  boards: boardModel[]
}> = ({ boards }) => {
  return (
    <ul>
      {boards.map(board => {
        return (
          <li key={board.id}>
            <Link
              to={{
                pathname: `/boards/${board.name}`,
                search: `?id=${board.id}`
              }}
            >
              {' '}
              {board.name}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}
export const Boards: React.FC = () => {
  const { boards } = useContext(UserContext)
  return (
    <>
      <Page>
        <h1>Boards</h1>
        {boards.length && <BoardList boards={boards} />}
      </Page>
    </>
  )
}
