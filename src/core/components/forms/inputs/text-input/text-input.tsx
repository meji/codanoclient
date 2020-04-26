import React from 'react'
import styles from './text-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
const cx = bind(styles)

export const TextInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <>
      <BaseInput className={cx('text-input')} type={'text'} value="" {...rest} />
    </>
  )
}
