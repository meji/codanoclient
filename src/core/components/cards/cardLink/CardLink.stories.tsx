import React from 'react'
import { CardLink } from './cardLink'
import { card } from '../card'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardLink
}

export const cardLink = () => {
  return (
    <div className={'light'} style={{ width: '400px' }}>
      <CardLink card={card} />
    </div>
  )
}
