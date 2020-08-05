import React from 'react'
import { CardLink } from './cardLink'

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
      <CardLink id={'1'} title={'http://www.url.com'} />
    </div>
  )
}
