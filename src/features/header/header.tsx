import React, { useContext } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../providers/themeProvider'
import { Board } from '../board/domain/board'
import { UserContext } from '../providers/userProvider'
import { Select } from '../../core/components/forms/select/select'
import { Link, useHistory } from 'react-router-dom'

const cx = bind(styles)

interface Props {
  className?: string
  boards?: Board[]
  onClick?(): void
}

const BoardsArea: React.FC<{ boards: Board[] }> = ({ boards }) => {
  const history = useHistory()
  const newBoard = () => {}
  const goToBoard = (e: React.ChangeEvent<HTMLSelectElement>) => {
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
        onChange={e => goToBoard(e)}
        size={'s'}
        firstItem={'Boards'}
        options={boards.map(board => {
          return { text: board.name, value: board.id }
        })}
      />
      <Button size={'s'} onClick={() => newBoard()} theme={'primary'}>
        New Board
      </Button>
    </section>
  )
}

export const Header: React.FunctionComponent<Props> = ({ className, children }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const data = useContext(UserContext)
  const user = data.user
  const boards = data.boards

  const logout = () => {
    window.localStorage.clear()
    window.location.assign('/')
  }
  return (
    <header className={cx('header', className)}>
      <Link className={cx('logo', 'caveat')} to={'/'}>
        Codalia
      </Link>
      {children}
      {boards.length > 0 && <BoardsArea boards={data.boards} />}
      <section className={cx('buttons-area')}>
        {user.email && (
          <>
            <p className={cx('user')}>{user.name}</p>
            <Button theme={'primary'} onClick={() => logout()}>
              Logout
            </Button>
          </>
        )}
        {!user.email && (
          <>
            <Link to={'/auth/login'}>
              <Button theme={'primary'}>Login</Button>
            </Link>
            <Link to={'/auth/signup'}>
              <Button theme={'primary'}>Sign Up</Button>
            </Link>
          </>
        )}
        <Button theme={'primary'} onClick={() => toggleTheme()}>
          Cambiar tema
        </Button>
      </section>
    </header>
  )
}
