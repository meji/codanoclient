import React, { useContext, useState } from 'react'
import { Board } from '../board/domain/board'
import { useHistory } from 'react-router-dom'
import { Select } from '../../core/components/forms/select/select'
import { Button } from '../../core/components/button/button'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { BoardRepositoryFactory } from '../board/infrastructure/board-repository-factory'
import { dataContext } from '../providers/dataProvider'
import { Editingtitle } from '../../core/components/forms/editing-title/editingTitle'

const cx = bind(styles)

export const CreateBoardForm: React.FC = () => {
  const [createBoardVisible, setCreateBoardVisible] = useState(false)
  const history = useHistory()
  const data = useContext(dataContext)
  const boardRepositoryFactory = BoardRepositoryFactory.build()
  const handleSubmit = (e: any) => {
    boardRepositoryFactory.create(e.target.value).then(response => {
      boardRepositoryFactory.findAll().then(response => data.setBoards(response))
      history.push(`/boards/${response.name}?id=${response.id}`)
    })
    setCreateBoardVisible(false)
  }

  return (
    <>
      {!createBoardVisible && (
        <Button size={'s'} onClick={() => setCreateBoardVisible(true)} theme={'primary'}>
          New Board
        </Button>
      )}
      {createBoardVisible && (
        <Editingtitle
          size={'s'}
          inputVisible={true}
          handleKeydown={e => handleSubmit(e)}
          placeHolder={'Name of the board'}
          value={''}
          onBlur={() => setCreateBoardVisible(false)}
        />
      )}
    </>
  )
}

export const BoardsArea: React.FC<{ boards: Board[] }> = ({ boards }) => {
  const history = useHistory()
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const boardName = e.target[e.target.selectedIndex].textContent
    if (e.target.selectedIndex > 0) {
      history.push(`/boards/${boardName}?id=${e.target.value}`)
    } else {
      history.push(`/boards/`)
    }
  }
  return (
    <section className={cx('boards-area')}>
      <Select
        onChange={e => handleChange(e)}
        size={'s'}
        firstItem={'Boards'}
        options={boards.map(board => {
          return { text: board.name, value: board.id }
        })}
      />
      <CreateBoardForm />
    </section>
  )
}
