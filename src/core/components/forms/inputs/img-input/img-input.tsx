import React, { useState } from 'react'
import styles from './img-input.module.css'
import { bind } from '../../../../../utils/bind'
import { BaseInput } from '../base-input/base-input'
import { Icon } from '../../../icon/icon'
import { Button } from '../../../button/button'
const cx = bind(styles)

export const ImgInput: React.FunctionComponent<{
  multiple?: boolean
  className?: string
  size?: 's' | 'l'
  onBlur?: (e: any) => void
  onChange?: (e: any) => void
  callBack?: (e: any) => void
}> = ({ onChange, multiple = false, className, size, onBlur, callBack }) => {
  const endSlotIcon = <Icon icon={multiple ? 'images' : 'image'} size={'sm'} />
  const [previewUrl, setPreviewUrl] = useState<string>('')
  const [rawFiles, setRawFiles] = useState()
  const [key, setKey] = useState<string>('')
  const randomNum = Math.floor(Math.random() * 1000).toString(36)

  return (
    <div className={cx('image-uploader')}>
      {previewUrl && (
        <div className={cx('preview-area')}>
          <Icon
            className={cx('clear-image')}
            icon={'times-circle'}
            size={'lg'}
            onClick={() => {
              setKey(randomNum)
              setRawFiles(undefined)
              setPreviewUrl('')
            }}
          />
          <img src={previewUrl} />
          <Button
            theme={'secondary'}
            size={'s'}
            icon={'image'}
            onClick={() => {
              callBack && callBack(rawFiles)
              setPreviewUrl('')
              setRawFiles(undefined)
              setKey(randomNum)
            }}
          >
            Save
          </Button>
        </div>
      )}
      {!previewUrl && (
        <BaseInput
          onChange={e => {
            onChange && onChange(e)
            setPreviewUrl(URL.createObjectURL(e.target.files[0]))
            setRawFiles(e.target.files[0])
          }}
          key={key}
          onBlur={onBlur}
          className={cx(className)}
          type={'file'}
          endSlot={endSlotIcon}
          size={size}
        />
      )}
    </div>
  )
}
