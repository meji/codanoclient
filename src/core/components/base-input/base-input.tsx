import React, { useState } from 'react'
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
  className?: string
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  required,
  type,
  endSlot,
  className
}) => {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState(false)
  return (
    <label className={cx('label-container')}>
      <span className={focused || value ? cx('label', 'focused') : cx('label')}>
        {label}
        {required && '*'}
      </span>
      <input
        className={error ? cx(className, 'input', 'error') : cx(className, 'input')}
        onChange={event => onChange(event.target.value)}
        value={value}
        type={type}
        onFocus={() => {
          setFocused(true)
          setError(false)
        }}
        onBlur={() => {
          setFocused(false)
          !value && required ? setError(true) : setError(false)
        }}
        {...(required && +'required=required')}
      />
      {endSlot}
    </label>
  )
}
