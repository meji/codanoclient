import React from 'react'
import { CardLink } from './cardLink'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardLink
}

export const cardLink = () => {
  return (
    <div className={'light-theme'} style={{ width: '400px' }}>
      <CardLink id={'1'} title={'http://www.url.com'} />
    </div>
  )
}
