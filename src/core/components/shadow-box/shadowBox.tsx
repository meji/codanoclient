import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './shadowBox.module.css'

const cx = bind(styles)

export const ShadowBox: React.FC<{ className?: string; size?: 'small' | 'normal' | 'big' }> = ({
  className,
  children,
  size
}) => {
  return <div className={cx('shadow-box', className, size)}>{children}</div>
}
