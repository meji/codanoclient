import React from 'react'
import styles from './form.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

export const Form: React.FunctionComponent<{
  className?: string
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void
}> = ({ className, onSubmit, children }) => {
  return (
    <form onSubmit={e => onSubmit && onSubmit(e)} className={cx('form', className)}>
      {children}
    </form>
  )
}
