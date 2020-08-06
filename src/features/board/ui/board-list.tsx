import React from 'react'
import { Board as boardModel } from '../../board/domain/board'
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
                pathname: `/boards/:${board.name}:${board.id}`
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
