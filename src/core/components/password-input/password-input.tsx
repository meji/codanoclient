import React from 'react'
import styles from './password-input.module.css'
import { bind } from '../../../utils/bind'
import {BaseInput, Props} from "../base-input/base-input";
import {Icon} from "../icon/icon";

const cx = bind(styles)



export const PasswordInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  return (
    <>
      <BaseInput {...rest} type={'password'}/>
      <Icon className={cx('icon')} type="other" />
    </>
  )
}
