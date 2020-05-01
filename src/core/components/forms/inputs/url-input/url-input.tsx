import React from 'react'
import styles from './url-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'

const cx = bind(styles)

export const UrlInput: React.FunctionComponent<Props> = ({
  className,
  onChange,
  callback,
  ...rest
}) => {
  const endSlotIcon = <Icon icon={'link'} size={'sm'} />

  return (
    <>
      <BaseInput
        className={cx(className)}
        type={'url'}
        onChange={onChange}
        {...rest}
        endSlot={endSlotIcon}
        callback={data => {
          callback && callback(data)
        }}
      />
    </>
  )
}
