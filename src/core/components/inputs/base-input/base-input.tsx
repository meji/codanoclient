import React, { useState } from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

export interface Props {
  label?: string
  value: string
  onChange(value: string): void
  required?: boolean
  type?: 'text' | 'tel' | 'password' | 'email' | 'date' | 'file' | 'number' | 'search' | 'url'
  endSlot?: React.ReactNode
  className?: string
  errMsg?: string
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  onChange,
  required,
  type,
  endSlot,
  className,
  errMsg
}) => {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState(errMsg)
  const errTag = <p className={cx('notice', 'error')}>{error}</p>
  const labelTag = (
    <span className={focused || value ? cx('label', 'focused') : cx('label')}>
      {label}
      {required && '*'}
    </span>
  )
  return (
    <>
      <label
        className={
          endSlot ? cx('label-container', 'with-icon', className) : cx('label-container', className)
        }
      >
        {label && labelTag}
        <input
          className={error ? cx(className, 'input', 'error') : cx(className, 'input')}
          onChange={event => onChange(event.target.value)}
          value={value}
          type={type}
          onFocus={() => {
            setFocused(true)
            setError('')
          }}
          onBlur={() => {
            setFocused(false)
            if (!value && required) {
              setError('Field required')
            } else {
              setError('')
            }
          }}
          {...(required && +'required=required')}
        />
        {endSlot}
      </label>
      {error && errTag}
    </>
  )
}
