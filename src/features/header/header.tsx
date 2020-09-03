import React, { useContext } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../providers/themeProvider'
import { BoardList } from '../board/ui/board-list'
import { Board } from '../board/domain/board'
import { UserContext } from '../providers/userProvider'

const cx = bind(styles)

interface Props {
  className?: string
  boards?: Board[]
  onClick?(): void
}

export const Header: React.FunctionComponent<Props> = ({ className, boards, children }) => {
  const { toggleTheme } = useContext(ThemeContext)
  const user = useContext(UserContext)
  const logout = () => {
    window.localStorage.clear()
    window.location.assign('/')
  }

  return (
    <header className={cx('header', className)}>
      <span className={cx('logo', 'caveat')}>Codalia</span>
      {children}
      {boards && <BoardList boards={boards} />}
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
