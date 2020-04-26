import React from 'react'
import { Mdeditor } from './mdeditor'

export default {
  title: 'Dark/Forms/MdEditor',
  component: Mdeditor
}

export const Editor = () => {
  return (
    <div className={'dark-theme'}>
      <Mdeditor />
    </div>
  )
}
