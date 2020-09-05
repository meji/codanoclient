import React, { useContext, useState } from 'react'
import { Board } from '../board/domain/board'
import { useHistory } from 'react-router-dom'
import { Select } from '../../core/components/forms/select/select'
import { Button } from '../../core/components/button/button'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { TextInput } from '../../core/components/forms/inputs/text-input/text-input'
import { Form } from '../../core/components/forms/forms/form'
import { Icon } from '../../core/components/icon/icon'
import { BoardRepositoryFactory } from '../board/infrastructure/board-repository-factory'
import { dataContext } from '../providers/dataProvider'

const cx = bind(styles)

export const CreateBoardForm: React.FC = () => {
  const [createBoardVisible, setCreateBoardVisible] = useState(false)
  const [newBoard, setNewBoard] = useState('')
  const history = useHistory()
  const data = useContext(dataContext)
  const boardRepositoryFactory = BoardRepositoryFactory.build()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    boardRepositoryFactory.create(newBoard).then(response => {
      boardRepositoryFactory.findAll().then(response => data.setBoards(response))
      history.push(`/boards/${response.name}?id=${response.id}`)
    })
    setCreateBoardVisible(false)

    e.preventDefault()
  }

  return (
    <>
      {!createBoardVisible && (
        <Button size={'s'} onClick={() => setCreateBoardVisible(true)} theme={'primary'}>
          New Board
        </Button>
      )}
      {createBoardVisible && (
        <Form onSubmit={e => handleSubmit(e)} className={cx('create-board-form')}>
          <TextInput
            size={'s'}
            placeholder={'Name of the board'}
            name={'board'}
            onChange={e => setNewBoard(e.target.value)}
          />
          <Button submit={true} theme={'primary'} size={'s'}>
            Crear
          </Button>
          <Icon icon={'times-circle'} onClick={() => setCreateBoardVisible(false)} />
        </Form>
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
