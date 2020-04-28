import React from 'react'
import styles from './img-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const ImgInput: React.FunctionComponent<{ multiple?: boolean }> = ({ multiple = false }) => {
  const endSlotIcon = <Icon className={'icon'} icon={multiple ? 'images' : 'image'} size={'sm'} />
  return (
    <>
      <BaseInput className={cx('img')} type={'file'} multiple={multiple} endSlot={endSlotIcon} />
    </>
  )
}
