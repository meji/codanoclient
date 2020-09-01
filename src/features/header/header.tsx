import React, { useContext } from 'react'
import { bind } from '../../utils/bind'
import styles from './header.module.css'
import { Button } from '../../core/components/button/button'
import { ThemeContext } from '../contexts/themeProvider'

const cx = bind(styles)

interface Props {
  className?: string
  onClick?(): void
}

export const Header: React.FunctionComponent<Props> = ({ children }) => {
  const { toggleTheme } = useContext(ThemeContext)
  return (
    <header className={cx('header')}>
      <span className={cx('logo caveat')}>Codalia</span>
      {children}
      <Button theme={'primary'} onClick={() => toggleTheme()}>
        Cambiar tema
      </Button>
    </header>
  )
}
