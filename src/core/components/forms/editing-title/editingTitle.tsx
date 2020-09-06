import React, { useEffect, useState } from 'react'
import { TextInput } from '../inputs/text-input/text-input'
import styles from './editing-title.module.css'
import { bind } from '../../../../utils/bind'

const cx = bind(styles)

export const Editingtitle: React.FC<{
  handleKeydown: (e: any) => void
  value: string
  size?: 's' | 'l'
  inputVisible?: boolean
  placeHolder?: string
  className?: string
  onBlur?: () => void
}> = ({ handleKeydown, value, size, inputVisible, placeHolder, className, onBlur }) => {
  const [isEditingTitle, setIsEditingTitle] = useState(inputVisible)
  const [nameIn, setNameIn] = useState(value)
  useEffect(() => {
    setNameIn(value)
  }, [value])
  return (
    <span className={cx(className, 'container')}>
      {!isEditingTitle && <span onClick={() => setIsEditingTitle(true)}>{value}</span>}
      {isEditingTitle && (
        <TextInput
          size={size}
          className={cx('no-styles')}
          onKeyDown={e => {
            setNameIn(e.value)
            if (e.key === 'Enter') {
              setIsEditingTitle(false)
              handleKeydown(e)
            }
          }}
          onBlur={() => {
            setIsEditingTitle(false)
            onBlur && onBlur()
          }}
          placeholder={placeHolder ? placeHolder : nameIn}
          value={nameIn}
          focus={isEditingTitle && true}
        />
      )}
    </span>
  )
}
