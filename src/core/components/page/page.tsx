import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './page.module.css'

const cx = bind(styles)

export const Page: React.FC<{ className?: string }> = ({ className, children }) => {
  return <main className={cx('container', className)}>{children}</main>
}
