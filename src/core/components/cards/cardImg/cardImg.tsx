import React, { useState } from 'react'
import { CardBase } from '../cardBase/cardBase'
import { noteType } from '../cardBase/cardTypes'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { Id } from '../cardBase/id'
import styles from './cardImg.module.css'
import { ImgInput } from '../../forms/inputs/img-input/img-input'

import { bind } from '../../../../utils/bind'
const cx = bind(styles)

export const CardImg: React.FC<{ title: string; id: Id }> = ({ title, id, children }) => {
  const [data, setData] = useState({ text: 'Describe it, MarkDown', html: '', img: '' })
  const saveValue = async (e: any) => {
    console.log(e)
    // await fetch(`http://localhost:5000/getUrlData/?url${e.target.value}`).then(response => setDescription(response.description))
  }
  return (
    <CardBase id={id} type={noteType} title={title} callback={(e: any) => saveValue(e)}>
      <ImgInput
        className={cx('no-styles')}
        onChange={(e: any) => setData({ ...data, img: e.target.value })}
      />
      <Mdeditor
        initialText={data.text}
        callback={(content: any) => setData({ ...data, text: content.text, html: content.html })}
      />
      {children}
    </CardBase>
  )
}
