import React from 'react'
import { CardLink } from './cardLink'
import { card } from '../card'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardLink
}

export const cardLink = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardLink card={card} />
    </div>
  )
}
