import React from 'react'
import styles from './img-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const ImgInput: React.FunctionComponent<{
  multiple?: boolean
  className?: string
  onChange?: (e: any) => void
}> = ({ onChange, multiple = false, className }) => {
  const endSlotIcon = <Icon icon={multiple ? 'images' : 'image'} size={'sm'} />
  return (
    <>
      <BaseInput
        onChange={onChange}
        className={cx(className)}
        type={'file'}
        multiple={multiple}
        endSlot={endSlotIcon}
      />
    </>
  )
}
