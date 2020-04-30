import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { CardLink } from './cardLink'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardBase
}

export const cardLink = () => {
  return (
    <div className={'light-theme'} style={{ width: '400px' }}>
      <CardLink title={'Escribe una url'}></CardLink>
    </div>
  )
}
