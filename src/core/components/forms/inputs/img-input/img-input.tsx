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
  onChange?: (e: any) => void
}> = ({ onChange, multiple = false, className, size }) => {
  const endSlotIcon = <Icon icon={multiple ? 'images' : 'image'} size={'sm'} />
  return (
    <>
      <BaseInput
        onChange={onChange}
        className={cx(className)}
        type={'file'}
        multiple={multiple}
        endSlot={endSlotIcon}
        size={size}
      />
    </>
  )
}
