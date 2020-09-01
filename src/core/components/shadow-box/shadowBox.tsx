import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './shadowBox.module.css'

const cx = bind(styles)

export const ShadowBox: React.FC<{ className?: string }> = ({ className, children }) => {
  return <div className={cx('shadow-box', className)}>{children}</div>
}
