import React from 'react'
import styles from './calendar-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
// import { Icon } from '../../icon/icon'
const cx = bind(styles)

export const CalendarInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  // const endSlotIcon = <Icon icon={'calendar-alt'} size={'sm'} />
  return (
    <>
      <BaseInput className={cx('date')} type={'date'} value="" {...rest} />
    </>
  )
}
