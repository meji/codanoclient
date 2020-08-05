import React from 'react'
import { Board as boardModel } from '../../board/domain/board'

export const BoardList: React.FC<{
  boards: boardModel[]
}> = ({ boards }) => {
  return (
    <ul>
      {boards.map((board, index) => {
        return <li key={board.id + String(index)}>{board.name}</li>
      })}
    </ul>
  )
}
