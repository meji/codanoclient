import React, { useState } from 'react'
import { CardBase } from '../cardBase/cardBase'
import { linkType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { Id } from '../cardBase/id'

export const CardLink: React.FC<{ title: string; id: Id }> = ({ title, id, children }) => {
  const [description, setDescription] = useState({ text: 'Describe it, MarkDown', html: '' })
  const saveValue = async (e: any) => {
    console.log(e)
    // await fetch(`http://localhost:5000/getUrlData/?url${e.target.value}`).then(response => setDescription(response.description))
  }

  return (
    <CardBase id={id} type={linkType} title={title} callback={(e: any) => saveValue(e)}>
      <Mdeditor
        initialText={description.text}
        callback={(content: any) => setDescription(content)}
      />
      {children}
    </CardBase>
  )
}
