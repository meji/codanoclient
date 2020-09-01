import React from 'react'
import { CardNote } from './cardNote'
import { card } from '../card'
export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardNote
}

export const cardNote = () => {
  return (
    <div className={'light'} style={{ width: '400px' }}>
      <CardNote card={card} />
    </div>
  )
}
