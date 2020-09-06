import React from 'react'
import styles from './img-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const ImgInput: React.FunctionComponent<{
  multiple?: boolean
  className?: string
  size?: 's' | 'l'
  onBlur?: (e: any) => void
  onChange?: (e: any) => void
}> = ({ onChange, multiple = false, className, size, onBlur }) => {
  const endSlotIcon = <Icon icon={multiple ? 'images' : 'image'} size={'sm'} />
  return (
    <>
      <BaseInput
        onChange={onChange}
        onBlur={onBlur}
        className={cx(className)}
        type={'file'}
        multiple={multiple}
        endSlot={endSlotIcon}
        size={size}
      />
    </>
  )
}
