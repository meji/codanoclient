import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './page.module.css'

const cx = bind(styles)

export const Page: React.FC<{ className?: string; size?: 's' | 'l' }> = ({
  className,
  size,
  children
}) => {
  return <div className={cx('container', className, size)}>{children}</div>
}
