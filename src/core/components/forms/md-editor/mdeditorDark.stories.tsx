import React from 'react'
import { MyMdEditor } from './myMdEditor'

export default {
  title: 'Dark/Forms/MdEditor',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: MyMdEditor
}

export const Editor = () => {
  return (
    <div className={'dark'}>
      <MyMdEditor initialText={'Iniciar edición de texto'} />
    </div>
  )
}
