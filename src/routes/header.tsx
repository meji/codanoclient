import React from 'react'
import { bind } from '../utils/bind'
import styles from './button.module.css'

const cx = bind(styles)

interface Props {
  className?: string
  onClick?(): void
}

export const Header: React.FunctionComponent<Props> = ({ children }) => {
  return <header className={cx('header')}>{children}</header>
}
