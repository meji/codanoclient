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
  endSlot?: React.ReactNode
  className?: string
  errMsg?: string
  callback?: any
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  name,
  required,
  type,
  multiple,
  endSlot,
  className,
  errMsg,
  callback
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
  //update error on errMsg
  useEffect(() => {
    setError(errMsg)
  }, [errMsg])
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
            setError(errMsg)
          }}
          onBlur={e => {
            setFocused(false)
            callback(e)
            if (!valueIn && required) {
              setError('Field required')
            }
          }}
          multiple={multiple}
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
