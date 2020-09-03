import React from 'react'
import styles from './select.module.css'
import { bind } from '../../../../utils/bind'
import { OptionItem } from './Option'

const cx = bind(styles)

export interface Props {
  label?: string
  required?: boolean
  className?: string
  onChange?: (e: any) => void
  errMsg?: string
  options: OptionItem[]
}

export const Select: React.FunctionComponent<Props> = ({
  label,
  required,
  className,
  onChange,
  errMsg,
  options
}) => {
  const errTag = <p className={cx('notice', 'error')}>{errMsg}</p>
  const optionTags = options.map(item => {
    return (
      <option key={item.value} value={item.value}>
        {item.text}
      </option>
    )
  })
  const labelTag = (
    <span className={cx('label')}>
      {label}
      {required && '*'}
    </span>
  )
  return (
    <>
      <label className={cx('select-container')}>
        {label && labelTag}
        <select
          onChange={e => {
            onChange && onChange(e)
          }}
          className={errMsg ? cx(className, 'select', 'error') : cx(className, 'select')}
        >
          {optionTags}
        </select>
      </label>
      {errMsg && errTag}
    </>
  )
}
