import React from 'react'
import styles from './radio-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'

const cx = bind(styles)

export const RadioInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const checkmark = <span className={cx('checkmark')} />
  return <BaseInput {...rest} className={cx('radio')} type={'radio'} endSlot={checkmark} />
}
