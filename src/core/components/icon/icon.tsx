import React from 'react'
import '../size'
import {Size} from "../size";
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'

const cx = bind(styles)

type IconType = "checked" | "unchecked"  |  "other"
const icons: Record<string, string> ={
  'checked' : '✔',
  'unchecked' : '⭕',
  'other' : '❤'
}
interface Props {
  type : IconType
  size?: Size
  className: string
}


export const Icon: React.FunctionComponent<Props> = ({type, size = 'm', className}) => {
  return (
    <i className={cx('icon', `icon-size-${size}`) }>
      {icons[type]}
    </i>
  )
}
