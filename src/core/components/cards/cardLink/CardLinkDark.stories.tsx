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
    <div className={'dark'} style={{ width: '400px' }}>
      <CardLink card={{ ...card, type: 'Link', url: 'http://meji.es', name: 'meji.es' }} />
    </div>
  )
}
