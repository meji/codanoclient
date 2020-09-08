import React, { useContext, useEffect, useState } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../providers/themeProvider'
import { Board } from '../board/domain/board'
import { dataContext } from '../providers/dataProvider'
import { Link, useHistory } from 'react-router-dom'
import { BoardsArea } from './boardsArea'
import { Icon } from '../../core/components/icon/icon'
import { Page } from '../../core/components/page/page'
import { Notice } from '../notice/notice'
import { routes } from '../../routes/routes'

const cx = bind(styles)

interface Props {
  className?: string
  boards?: Board[]
  onClick?(): void
}

export const Header: React.FunctionComponent<Props> = ({ className, children }) => {
  const { toggleTheme, theme } = useContext(ThemeContext)
  const data = useContext(dataContext)
  const user = data.user
  const [boards, setBoards] = useState(data.boards)
  const history = useHistory()

  useEffect(() => {
    setBoards(data.boards)
  }, [data])

  const logout = () => {
    window.localStorage.clear()
    window.location.assign('/')
  }
  return (
    <Page size={'l'}>
      <Notice />
      <header className={cx('header', className)}>
        <section className={cx('logo-area')}>
          <Link className={cx('logo', 'caveat')} to={'/'}>
            Codalia
          </Link>
          <Icon
            icon={theme === 'light' ? 'sun' : 'moon'}
            onClick={() => toggleTheme()}
            size={'lg'}
          />
        </section>
        {children}
        {boards.length > 0 && <BoardsArea boards={boards} />}
        <section className={cx('buttons-area')}>
          {user.email && (
            <>
              <p className={cx('user')}>{user.name}</p>
              <Icon icon={'users-cog'} onClick={() => history.push(routes.settings)} size={'lg'} />
              <Icon icon={'sign-out-alt'} onClick={() => logout()} size={'lg'} />
            </>
          )}
          {!user.email && (
            <>
              <Link to={'/auth/login'}>
                <Button theme={'transparent'} icon={'pencil-alt'}>
                  Login
                </Button>
              </Link>
              <Link to={'/auth/signup'}>
                <Button theme={'transparent'} icon={'user'}>
                  Sign Up
                </Button>
              </Link>
            </>
          )}
        </section>
      </header>
    </Page>
  )
}
