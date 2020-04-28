import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { CardLink } from './cardLink'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardBase
}

export const cardLink = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardLink title={'Tipo link'}></CardLink>
    </div>
  )
}
