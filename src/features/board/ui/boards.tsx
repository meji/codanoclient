import React, { useContext, useEffect, useState } from 'react'
import { Page } from '../../../core/components/page/page'
import { Board as boardModel } from '../domain/board'
import { Link } from 'react-router-dom'
import { bind } from '../../../utils/bind'
import styles from './board.module.css'
import { Icon } from '../../../core/components/icon/icon'
import { BoardRepositoryFactory } from '../infrastructure/board-repository-factory'
import { dataContext } from '../../providers/dataProvider'
import { CreateBoardForm } from '../../header/boardsArea'
const cx = bind(styles)

export const Boards: React.FC = () => {
  const boardsRepository = BoardRepositoryFactory.build()
  const data = useContext(dataContext)
  useEffect(() => {
    boardsRepository.findAll().then(response => {
      data.setBoards(response)
      setBoardsIn(response)
    })
  }, [])
  const [boards, setBoardsIn] = useState(data.boards)
  const boardRepositoryFactory = BoardRepositoryFactory.build()
  const deleteBoard = (board: boardModel) => {
    if (window.confirm('Board ' + board.name + ' will be deleted')) {
      boardRepositoryFactory.delete(board.id).then(() => data.setNotice('Board deleted'))
    }
    boardsRepository.findAll().then(response => {
      data.setBoards(response)
      setBoardsIn(response)
    })
  }
  return (
    <Page size={'l'}>
      <h1>Boards</h1>
      {boards.length > 0 && (
        <ul className={cx('board-list')}>
          {boards.map(board => {
            return (
              <li key={board.id}>
                <Icon
                  icon={'times-circle'}
                  className={cx('delete')}
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
      <CreateBoardForm />
    </Page>
  )
}
