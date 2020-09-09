import React from 'react'
import './iconTypes'
import { IconProp, SizeProp } from './iconTypes'
import { bind } from '../../../utils/bind'
import styles from './icon.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const cx = bind(styles)

interface Props {
  icon?: IconProp
  size?: SizeProp
  className?: string
  image?: string
  svg?: boolean
  onClick?(e: any): void
}

export const Icon: React.FC<Props> = ({ icon, size, className, onClick, image, svg, children }) => {
  return (
    <>
      {icon && !image && (
        <FontAwesomeIcon
          icon={icon}
          size={size}
          className={cx(className, 'icon', onClick && 'linkable')}
          onClick={onClick}
        />
      )}
      {image && !icon && (
        <img
          src={image}
          className={cx(className, 'image', 'icon', onClick && 'linkable')}
          alt={''}
        />
      )}
      {svg && !icon && !image && (
        <span className={cx(className, 'icon', onClick && 'linkable')}> {children}</span>
      )}
    </>
  )
}
