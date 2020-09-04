import React, { useState } from 'react'
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
const cx = bind(styles)

export const BoardsArea: React.FC<{ boards: Board[] }> = ({ boards }) => {
  const [newBoard, setNewBoard] = useState('')
  const [createBoardVisible, setCreateBoardVisible] = useState(false)
  const history = useHistory()
  const goToBoard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const boardName = e.target[e.target.selectedIndex].textContent
    if (e.target.selectedIndex > 0) {
      history.push(`/boards/${boardName}?id=${e.target.value}`)
    } else {
      history.push(`/boards/`)
    }
  }
  const boardRepositoryFactory = BoardRepositoryFactory.build()
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    console.log(newBoard)
    boardRepositoryFactory.create(newBoard).then(response => {
      history.push(`/boards/${response.name}?id=${response.id}`)
    })
    setCreateBoardVisible(false)
    e.preventDefault()
  }
  return (
    <section className={cx('boards-area')}>
      <Select
        onChange={e => goToBoard(e)}
        size={'s'}
        firstItem={'Boards'}
        options={boards.map(board => {
          return { text: board.name, value: board.id }
        })}
      />
      <Button size={'s'} onClick={() => setCreateBoardVisible(true)} theme={'primary'}>
        New Board
      </Button>
      {createBoardVisible && (
        <Form onSubmit={e => handleSubmit(e)}>
          <TextInput
            size={'s'}
            placeholder={'Name of the board'}
            name={'board'}
            onChange={e => setNewBoard(e.target.value)}
          />
          <Button submit={true} theme={'primary'}>
            Crear
          </Button>
          <Icon icon={'times-circle'} onClick={() => setCreateBoardVisible(false)} />
        </Form>
      )}
    </section>
  )
}
