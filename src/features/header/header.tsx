import React, { useContext, useEffect, useState } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../providers/themeProvider'
import { Board } from '../board/domain/board'
import { UserContext } from '../providers/userProvider'
import { Link } from 'react-router-dom'
import { BoardsArea } from './boardsArea'

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
  const [boards, setBoards] = useState(data.boards)

  useEffect(() => {
    setBoards(data.boards)
  }, [data])

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
      {boards.length > 0 && <BoardsArea boards={boards} />}
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
