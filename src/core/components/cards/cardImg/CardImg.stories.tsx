import React from 'react'
import { CardImg } from './cardImg'
import { card } from '../card'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardImg
}

export const cardImg = () => {
  return (
    <div className={'light'} style={{ width: '400px' }}>
      <CardImg card={{ ...card, type: 'Image' }} />
    </div>
  )
}
