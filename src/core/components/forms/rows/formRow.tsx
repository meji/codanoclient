import React from 'react'
import styles from './formRow.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

export const FormRow: React.FunctionComponent<{ className?: string }> = ({
  className,
  children
}) => {
  return <div className={cx('form-row', className)}>{children}</div>
}
