import React, { useEffect, useState } from 'react'
import styles from './base-input.module.css'
import { bind } from '../../../../../utils/bind'

const cx = bind(styles)

export interface Props {
  label?: string
  value?: string
  name?: string
  placeholder?: string
  required?: boolean
  multiple?: boolean
  fileUploaded?: boolean
  size?: 's' | 'l'
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
  onKeyDown?: (e: any) => void
  endSlot?: React.ReactNode
  className?: string
  errMsg?: string
  callback?: (data: any) => void
  onChange?: (e: any) => void
  onBlur?: (e: any) => void
  onMouseLeave?: () => void
  focus?: boolean
}

export const BaseInput: React.FunctionComponent<Props> = ({
  label,
  value,
  name,
  required,
  type,
  multiple,
  pattern,
  placeholder,
  onKeyDown,
  endSlot,
  className,
  size,
  errMsg,
  onChange,
  onBlur,
  onMouseLeave,
  focus,
  callback
}) => {
  const [data, setData] = useState({ value: value, err: errMsg })
  const errTag = <p className={cx('error')}>{data.err}</p>
  const labelTag = (
    <span className={cx('label')}>
      {label}
      {required && '*'}
    </span>
  )
  const endSlotTag = <span className={cx('endSlot')}>{endSlot}</span>
  //update error on errMsg
  const checkValidity = (input: HTMLInputElement) => {
    input.validationMessage
      ? setData({ ...data, err: input.validationMessage })
      : setData({ ...data, err: '' })
  }

  useEffect(() => {
    setData({ value: value, err: errMsg })
  }, [errMsg, value])

  return (
    <>
      <label className={cx('label-container', type, className)}>
        <input
          className={size ? cx(className, 'input', size) : cx(className, 'input')}
          autoFocus={focus}
          onMouseLeave={() => onMouseLeave && onMouseLeave()}
          onChange={e => {
            setData({ ...data, value: e.target.value })
            onChange && onChange(e)
            callback && callback(data)
          }}
          value={data.value ? data.value : ''}
          type={type}
          onBlur={e => {
            checkValidity(e.target)
            callback && callback(data)
            onBlur && onBlur(e)
          }}
          onKeyDown={e => onKeyDown && onKeyDown(e)}
          multiple={multiple}
          required={required}
          name={name}
          pattern={pattern}
          placeholder={placeholder}
        />
        {label && labelTag}
        {endSlot && endSlotTag}
      </label>
      {data.err && errTag}
    </>
  )
}
