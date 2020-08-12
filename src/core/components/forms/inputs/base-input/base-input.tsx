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
  fileUploaded?: boolean
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
  callback?: (data: any) => void
  onChange?: (e: any) => void
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
  onChange,
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
    setData({ ...data, err: errMsg })
  }, [errMsg])

  return (
    <>
      <label className={cx('label-container', type, className)}>
        <input
          className={cx(className, 'input')}
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
          }}
          multiple={multiple}
          required={required}
          name={name}
          pattern={pattern}
        />
        {label && labelTag}
        {endSlot && endSlotTag}
      </label>
      {data.err && errTag}
    </>
  )
}
