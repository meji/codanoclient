import React from 'react'
import { Mdeditor } from './mdeditor'

export default {
  title: 'Light/Forms/MdEditor',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: Mdeditor
}

export const Editor = () => {
  return (
    <div className={'light-theme'}>
      <Mdeditor initialText={'Iniciar edición de texto'} />
    </div>
  )
}
