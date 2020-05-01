import React, { useEffect, useState } from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../../utils/bind'

const cx = bind(styles)

export interface Props {
  label?: string
  value?: string
  name?: string
  required?: boolean
  multiple?: boolean
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
  pattern?: string
  endSlot?: React.ReactNode
  className?: string
  errMsg?: string
  callback?: (e: any) => void
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  name,
  required,
  type,
  multiple,
  pattern,
  endSlot,
  className,
  errMsg,
  callback
}) => {
  const [error, setError] = useState(errMsg)
  const [valueIn, setValueIn] = useState(value)
  const errTag = <p className={cx('notice', 'error')}>{error}</p>
  const labelTag = (
    <span className={cx('label')}>
      {label}
      {required && '*'}
    </span>
  )
  const endSlotTag = <span className={cx('endSlot')}>{endSlot}</span>
  //update error on errMsg
  const checkValidity = (input: HTMLInputElement) => {
    input.validationMessage ? setError(input.validationMessage) : setError('')
  }
  useEffect(() => {
    setError(errMsg)
  }, [errMsg])
  return (
    <>
      <label className={cx('label-container', type, className)}>
        <input
          className={error ? cx(className, 'input', 'error') : cx(className, 'input')}
          onChange={event => setValueIn(event.target.value)}
          value={valueIn ? valueIn : ''}
          type={type}
          onBlur={e => {
            checkValidity(e.target)
            callback && callback(e.target)
          }}
          multiple={multiple}
          required={required}
          name={name}
          pattern={pattern}
        />
        {label && labelTag}
        {endSlot && endSlotTag}
      </label>
      {error && errTag}
    </>
  )
}
