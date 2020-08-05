import React from 'react'
import { CardSnippet } from './cardSnippet'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardSnippet
}

export const cardSnippet = () => {
  return (
    <div className={'light-theme'} style={{ width: '400px' }}>
      <CardSnippet id={'1'} title={'Snippet title'} />
    </div>
  )
}
