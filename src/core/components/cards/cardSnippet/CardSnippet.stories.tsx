import React from 'react'
import { CardSnippet } from './cardSnippet'
import { card } from '../card'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardSnippet
}

export const cardSnippet = () => {
  return (
    <div className={'light'} style={{ width: '400px' }}>
      <CardSnippet card={card} />
    </div>
  )
}
