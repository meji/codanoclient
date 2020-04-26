import React from 'react'
import styles from './email-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const EmailInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const endSlotIcon = <Icon icon={'at'} size={'sm'} />
  return (
    <>
      <BaseInput className={cx('phone')} type={'email'} value="" {...rest} endSlot={endSlotIcon} />
    </>
  )
}
