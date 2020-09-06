import React from 'react'
import { MyMdEditor } from './myMdEditor'

export default {
  title: 'Light/Forms/MdEditor',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: MyMdEditor
}

export const Editor = () => {
  return (
    <div className={'light'}>
      <MyMdEditor initialText={'Iniciar edición de texto'} />
    </div>
  )
}
