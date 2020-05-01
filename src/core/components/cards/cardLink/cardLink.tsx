import React, { useEffect, useState } from 'react'
import { CardBase } from '../cardBase/cardBase'
import { linkType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { isValidUrl } from '../../utils/isUrl'

export const CardLink: React.FC<{ title: string }> = ({ title, children }) => {
  const [validUrl, setValidUrl] = useState(true)
  const [description, setDescription] = useState({ text: 'Escribir descripción', html: '' })
  const saveValue = async (e: any) => {
    setValidUrl(isValidUrl(e.target.value))
    // await fetch(`http://localhost:5000/getUrlData/?url${e.target.value}`).then(response => setDescription(response.description))
  }

  useEffect(() => {}, [validUrl])
  return (
    <CardBase id={1} type={linkType} title={title} callback={(e: any) => saveValue(e)}>
      {!validUrl && <p>Url no valida</p>}
      <Mdeditor
        initialText={description.text}
        callback={(content: any) => setDescription(content)}
      />
      {children}
    </CardBase>
  )
}
