import React from 'react'
import { bind } from '../../../utils/bind'
import styles from './button.module.css'
import { IconProp } from '../icon/iconTypes'
import { Icon } from '../icon/icon'

const cx = bind(styles)

interface Props {
  className?: string
  onClick?(): void
  theme?: 'primary' | 'secondary'
  size?: 's' | 'l'
  icon?: IconProp
  submit?: boolean
}

export const Button: React.FunctionComponent<Props> = ({
  children,
  className,
  theme,
  submit,
  size,
  icon,
  onClick
}) => {
  return (
    <button
      type={submit ? 'submit' : 'button'}
      onClick={onClick}
      className={cx('button', theme, size, className)}
    >
      {icon && <Icon icon={icon} className={cx('button-icon')} />}
      {children}
    </button>
  )
}
