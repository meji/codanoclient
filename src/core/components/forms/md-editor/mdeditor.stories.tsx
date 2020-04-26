import React from 'react'
import { Mdeditor } from './mdeditor'

export default {
  title: 'Light/Forms/MdEditor',
  component: Mdeditor
}

export const Editor = () => {
  return (
    <div className={'light-theme'}>
      <Mdeditor />
    </div>
  )
}
