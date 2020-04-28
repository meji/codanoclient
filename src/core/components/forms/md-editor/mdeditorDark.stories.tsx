import React from 'react'
import { Mdeditor } from './mdeditor'

export default {
  title: 'Dark/Forms/MdEditor',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: Mdeditor
}

export const Editor = () => {
  return (
    <div className={'dark-theme'}>
      <Mdeditor initialText={'Iniciar edición de texto'} />
    </div>
  )
}
