import React, { useEffect } from 'react'
import { Board as boardModel } from '../features/board/domain/board'

export const CardList: React.FC<{
  boards: boardModel[]
}> = ({ boards }) => {
  useEffect(() => {}, [])
  return (
    <>
      <h1>Boards</h1>
      <ul>
        {boards.map((board: boardModel) => {
          return <li>{board.name}</li>
        })}
      </ul>
    </>
  )
}
