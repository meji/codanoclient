import React from 'react'
import { CardSnippet } from './cardSnippet'
import { card } from '../card'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardSnippet
}

export const cardSnippet = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardSnippet card={card} />
    </div>
  )
}
