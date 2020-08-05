import React, { useEffect, useState } from 'react'
import { BoardHttpRepository } from '../features/board/infrastructure/board-http-repository'
import { BoardList } from '../features/board/ui/board-list'

export const Boards: React.FC = () => {
  const [boards, setBoards] = useState([])
  useEffect(() => {
    fetchBoards()
  }, [])

  async function fetchBoards() {
    const boardsRepository = new BoardHttpRepository()
    const boards: any = await boardsRepository.findAll()
    setBoards(boards.boards)
  }

  return (
    <>
      <h1>Boards</h1>
      {boards.length && <BoardList boards={boards} />}
    </>
  )
}
