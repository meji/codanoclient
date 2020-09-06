import React from 'react'
import './iconTypes'
import { IconProp, SizeProp } from './iconTypes'
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = bind(styles)

interface Props {
  icon: IconProp
  size?: SizeProp
  className?: string
  onClick?(e: any): void
}

export const Icon: React.FC<Props> = ({ icon, size, className, onClick }) => {
  return (
    <FontAwesomeIcon
      icon={icon}
      size={size}
      className={cx(className, 'icon', onClick && 'linkable')}
      onClick={onClick}
    />
  )
}
