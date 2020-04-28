import React from 'react'
import styles from './url-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
const cx = bind(styles)

export const UrlInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const endSlotIcon = <Icon className={'icon'} icon={'link'} size={'sm'} />
  return (
    <>
      <BaseInput className={cx('url')} type={'url'} {...rest} endSlot={endSlotIcon} />
    </>
  )
}
