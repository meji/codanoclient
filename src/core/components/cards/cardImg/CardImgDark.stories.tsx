import React from 'react'
import { CardImg } from './cardImg'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardImg
}

export const cardImg = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardImg id={1} title={'Note title'} />
    </div>
  )
}
