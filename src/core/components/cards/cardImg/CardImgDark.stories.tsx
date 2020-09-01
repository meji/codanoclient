import React from 'react'
import { CardImg } from './cardImg'
import { card } from '../card'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardImg
}

export const cardImg = () => {
  return (
    <div className={'dark'} style={{ width: '400px' }}>
      <p>
        <CardImg card={card} />
      </p>
    </div>
  )
}
