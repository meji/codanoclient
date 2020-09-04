import React, { useContext, useEffect, useState } from 'react'
import { Page } from '../../../core/components/page/page'
import { Board as boardModel } from '../domain/board'
import { Link } from 'react-router-dom'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { Icon } from '../../../core/components/icon/icon'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { Notice } from '../../../core/components/notice/notice'
import { UserContext } from '../../providers/userProvider'
const cx = bind(styles)

export const Boards: React.FC = () => {
  const boardsRepository = BoardRepositoryFactory.build()
  const data = useContext(UserContext)
  useEffect(() => {
    boardsRepository.findAll().then(response => {
      data.setBoards(response)
      setBoardsIn(response)
    })
  }, [])
  const [boards, setBoardsIn] = useState(data.boards)
  const [notice, setNotice] = useState('')
  const boardRepositoryFactory = BoardRepositoryFactory.build()
  const deleteBoard = (board: boardModel) => {
    if (window.confirm('Are you sure you want to delete the board' + board.name)) {
      boardRepositoryFactory.delete(board.id).then(() => setNotice('Board deleted'))
    }
    boardsRepository.findAll().then(response => {
      data.setBoards(response)
      setBoardsIn(response)
    })
  }
  return (
    <Page size={'l'}>
      <Notice content={notice} />
      <h1>Boards</h1>
      {boards.length && (
        <ul className={cx('board-list')}>
          {boards.map(board => {
            return (
              <li key={board.id}>
                <Icon
                  icon={'times-circle'}
                  onClick={() => deleteBoard({ id: board.id, name: board.name, lists: [] })}
                />
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
      )}
    </Page>
  )
}
