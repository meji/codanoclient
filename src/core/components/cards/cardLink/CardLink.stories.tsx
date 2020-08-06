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
    <div className={'light-theme'} style={{ width: '400px' }}>
      <CardLink card={card} />
    </div>
  )
}
