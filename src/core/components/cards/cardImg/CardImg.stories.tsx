import React from 'react'
import { CardImg } from './cardImg'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardImg
}

export const cardImg = () => {
  return (
    <div className={'light-theme'} style={{ width: '400px' }}>
      <CardImg id={1} title={'Image Title'} />
    </div>
  )
}
