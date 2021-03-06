import React from 'react'
import styles from './tel-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const TelInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const endSlotIcon = <Icon icon={'phone'} size={'sm'} />
  return (
    <>
      <BaseInput
        className={cx('phone')}
        type={'tel'}
        pattern={
          '^((\\+34[\\s])|(\\(\\+34\\)|\\+34|0034[\\s]?))?[9|8|7|6][0-9]{2}([0-9]{6}|([\\s][0-9]{3}){2}|([\\s][0-9]{2}){3})$'
        }
        {...rest}
        endSlot={endSlotIcon}
      />
    </>
  )
}
