import React from 'react'
import styles from './tel-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const TelInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const endSlotIcon = <Icon className={'icon'} icon={'phone'} size={'sm'} />
  return (
    <>
      <BaseInput className={cx('phone')} type={'tel'} {...rest} endSlot={endSlotIcon} />
    </>
  )
}
