import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { linkType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'

export const CardLink: React.FC<{ title: string }> = ({ title, children }) => {
  return (
    <CardBase id={1} type={linkType} title={title}>
      <Mdeditor initialText={'Añadir Descripción'} />
      {children}
    </CardBase>
  )
}
