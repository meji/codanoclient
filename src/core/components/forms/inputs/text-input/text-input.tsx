import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
const cx = bind(styles)

export const TextInput: React.FunctionComponent<Props> = ({
  onChange,
  onKeyDown,
  placeholder,
  className,
  size,
  ...rest
}) => {
  return (
    <>
      <BaseInput
        onKeyDown={onKeyDown}
        onChange={onChange}
        className={cx(className, 'text-input')}
        placeholder={placeholder}
        type={'text'}
        size={size}
        {...rest}
      />
    </>
  )
}
