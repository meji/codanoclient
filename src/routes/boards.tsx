import React, { useEffect, useState } from 'react'
import { BoardList } from '../features/board/ui/board-list'
import { BoardRepositoryFactory } from '../features/board/infrastructure/board-repository-factory'

export const Boards: React.FC = () => {
  const [boards, setBoards] = useState([])
  useEffect(() => {
    fetchBoards()
  }, [])

  async function fetchBoards() {
    const boardsRepository = BoardRepositoryFactory.build()
    const boards: any = await boardsRepository.findAll()
    setBoards(boards)
  }

  return (
    <>
      <h1>Boards</h1>
      {boards.length && <BoardList boards={boards} />}
    </>
  )
}
