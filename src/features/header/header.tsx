import React, { useContext } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../providers/themeProvider'
import { Board } from '../board/domain/board'
import { UserContext } from '../providers/userProvider'
import { Select } from '../../core/components/forms/select/select'
import { useHistory } from 'react-router-dom'

const cx = bind(styles)

interface Props {
  className?: string
  boards?: Board[]
  onClick?(): void
}

export const Header: React.FunctionComponent<Props> = ({ className, children }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const data = useContext(UserContext)
  const user = data.user
  const boards = data.boards
  const history = useHistory()
  const goToBoard = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const boardName = e.target[e.target.selectedIndex].textContent
    history.push(`/boards/${boardName}?id=${e.target.value}`)
  }
  const logout = () => {
    window.localStorage.clear()
    window.location.assign('/')
  }
  return (
    <header className={cx('header', className)}>
      <span className={cx('logo', 'caveat')}>Codalia</span>
      {children}
      {boards && (
        <Select
          onChange={e => goToBoard(e)}
          options={boards.map(board => {
            return { text: board.name, value: board.id }
          })}
        />
      )}
      <Button theme={'primary'} onClick={() => toggleTheme()}>
        Cambiar tema
      </Button>
      {user.email && (
        <Button theme={'primary'} onClick={() => logout()}>
          Logout
        </Button>
      )}
    </header>
  )
}
