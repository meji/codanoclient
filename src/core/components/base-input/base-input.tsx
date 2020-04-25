import React from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../utils/bind'

const cx = bind(styles)

export interface Props {
  label: string
  value: string
  onChange(value: string): void
  required?: boolean
  type?: string
  endSlot?: React.ReactNode
}

export const BaseInput: React.FunctionComponent<Props> = ({ label, value, onChange , required, type, endSlot}) => {
  return (
    <label>
      <span className={cx('label')}>{label}</span>
      <input
        className={cx('input', {required})}
        onChange={event => onChange(event.target.value)}
        value={value}
        type={type}
      />
      {endSlot}
      {(required && value === '') && <span>Required</span> }
    </label>
  )
}
