import React from 'react'
import styles from './check-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'

const cx = bind(styles)

export const CheckInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const checkmark = <span className={cx('checkmark')} />
  return <BaseInput {...rest} className={cx('check')} type={'checkbox'} endSlot={checkmark} />
}
