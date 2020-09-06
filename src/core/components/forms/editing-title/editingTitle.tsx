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
}> = ({ handleKeydown, value, size, inputVisible, placeHolder }) => {
  const [editingTitle, setEditingTitle] = useState(inputVisible)
  const [nameIn, setNameIn] = useState(value)
  useEffect(() => {
    setNameIn(value)
  }, [value])
  return (
    <>
      {!editingTitle && <span onDoubleClick={() => setEditingTitle(true)}>{value}</span>}
      {editingTitle && (
        <TextInput
          size={size}
          className={cx('no-styles')}
          onKeyDown={e => {
            setNameIn(e.value)
            if (e.key === 'Enter') {
              setEditingTitle(false)
              handleKeydown(e)
            }
          }}
          onBlur={() => {
            setEditingTitle(false)
          }}
          placeholder={placeHolder ? placeHolder : nameIn}
          value={nameIn}
          focus={editingTitle && true}
        />
      )}
    </>
  )
}
