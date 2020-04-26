import React from 'react'
import { Id } from './id'
import { codItemType } from './codItemTypes'
import { bind } from '../../../utils/bind'
import styles from './codItemTypes.module.css'
import { Icon } from '../icon/icon'
const cx = bind(styles)

interface Props {
  id: Id
  type: codItemType
  text: string
}

export const CodItemLine: React.FunctionComponent<Props> = ({ id, type, text }) => {
  return (
    <div data-id={id} className={cx('codItemLine')}>
      <Icon icon={type.icon} className={cx('icon')} />
      <span className={cx('text')}>{text}</span>
    </div>
  )
}
