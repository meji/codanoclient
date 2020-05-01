import React from 'react'
import { CardNote } from './cardNote'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardNote
}

export const cardNote = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardNote id={1} title={'Note title'} />
    </div>
  )
}
