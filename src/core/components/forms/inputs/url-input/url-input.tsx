import React, { useEffect, useState } from 'react'
import styles from './url-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput, Props } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
import { isValidUrl } from '../../../utils/isUrl'

const cx = bind(styles)

export const UrlInput: React.FunctionComponent<Props> = ({ ...rest }) => {
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const endSlotIcon = <Icon icon={'link'} size={'sm'} />

  useEffect(() => {
    setError(value && !isValidUrl(value) ? 'Url no válida' : '')
  }, [value])

  return (
    <>
      <BaseInput
        className={cx('url')}
        type={'url'}
        callback={(e: any) => setValue(e.target.value)}
        errMsg={error}
        {...rest}
        endSlot={endSlotIcon}
      />
    </>
  )
}
