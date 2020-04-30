import React, { useEffect, useState } from 'react'
import { CardBase } from '../cardBase/cardBase'
import { linkType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { isValidUrl } from '../../utils/isUrl'

export const CardLink: React.FC<{ title: string }> = ({ title, children }) => {
  const [validUrl, setValidUrl] = useState(false)
  useEffect(() => {
    setValidUrl(isValidUrl(title))
  }, [title])

  const initialText = 'Escribir descripción'
  return (
    <CardBase id={1} type={linkType} title={title}>
      {validUrl ? <p>Url válida</p> : <p>Url no valida</p>}
      <Mdeditor initialText={initialText} />
      {children}
    </CardBase>
  )
}
