import React from 'react'
import { CardSnippet } from './cardSnippet'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardSnippet
}

export const cardSnippet = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <CardSnippet id={'1'} title={'Snippet title'} />
    </div>
  )
}
