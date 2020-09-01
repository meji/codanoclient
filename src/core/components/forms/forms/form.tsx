import React from 'react'
import styles from './form.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

export const Form: React.FunctionComponent<{ className?: string }> = ({ className, children }) => {
  return <div className={cx('form', className)}>{children}</div>
}
