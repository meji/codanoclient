import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { linkType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { isValidUrl } from '../../utils/isUrl'

export const CardLink: React.FC<{ title: string }> = ({ title, children }) => {
  const isValid: boolean = isValidUrl(title)

  const initialText = 'Escribir descripción'
  return (
    <CardBase id={1} type={linkType} title={title}>
      <Mdeditor initialText={initialText} />
      {children}
      {isValid && <p>Url válida</p>}
    </CardBase>
  )
}
