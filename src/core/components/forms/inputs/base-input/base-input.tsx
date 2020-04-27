import React, { useState } from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../../utils/bind'

const cx = bind(styles)

export interface Props {
  label?: string
  value?: string
  name?: string
  required?: boolean
  type?:
    | 'text'
    | 'tel'
    | 'password'
    | 'email'
    | 'date'
    | 'file'
    | 'number'
    | 'search'
    | 'url'
    | 'radio'
    | 'checkbox'
  endSlot?: React.ReactNode
  className?: string
  errMsg?: string
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  name,
  required,
  type,
  endSlot,
  className,
  errMsg
}) => {
  const [focused, setFocused] = useState(false)
  const [error, setError] = useState(errMsg)
  const [valueIn, setValueIn] = useState(value)
  const errTag = <p className={cx('notice', 'error')}>{error}</p>
  const labelTag = (
    <span className={focused || valueIn ? cx('label', 'focused') : cx('label')}>
      {label}
      {required && '*'}
    </span>
  )
  const endSlotTag = <span className={cx('endSlot')}>{endSlot}</span>
  return (
    <>
      <label className={cx('label-container', type, className)}>
        <input
          className={error ? cx(className, 'input', 'error') : cx(className, 'input')}
          onChange={event => setValueIn(event.target.value)}
          value={valueIn}
          type={type}
          onFocus={() => {
            setFocused(true)
            setError('')
          }}
          onBlur={() => {
            setFocused(false)
            if (!valueIn && required) {
              setError('Field required')
            } else {
              setError('')
            }
          }}
          {...(required && +'required=required')}
          name={name}
        />
        {label && labelTag}
        {endSlot && endSlotTag}
      </label>
      {error && errTag}
    </>
  )
}
