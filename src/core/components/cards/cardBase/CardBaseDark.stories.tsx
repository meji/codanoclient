import React from 'react'
import { CardBase } from './cardBase'
import { imgType, linkType, codeType } from './cardTypes'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CardBase
}

export const cardItem = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <div>
        <CardBase id={1} title={'Tipo card'} type={imgType} />
      </div>
      <div>
        <CardBase id={2} title={'Tipo link'} type={linkType} />
      </div>
      <div>
        <CardBase id={3} title={'Tipo code'} type={codeType} />
      </div>
    </div>
  )
}
