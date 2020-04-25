import React, { useState } from 'react'
import styles from './password-input.module.css'
import { bind } from '../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../icon/icon'

const cx = bind(styles)

export const PasswordInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const [visible, setVisible] = useState(false)
  const endSlotIcon = (
    <Icon icon={visible ? 'eye' : 'eye-slash'} size={'sm'} onClick={() => setVisible(!visible)} />
  )
  return (
    <BaseInput
      {...rest}
      className={cx('password')}
      type={visible ? 'text' : 'password'}
      endSlot={endSlotIcon}
    />
  )
}
