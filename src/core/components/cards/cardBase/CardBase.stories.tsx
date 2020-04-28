import React from 'react'
import { CardBase } from './cardBase'
import { linkType, codeType, imgType } from './cardTypes'

export default {
  title: 'Light/Componentes',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CardBase
}

export const cardItem = () => {
  return (
    <div className={'light-theme'} style={{ width: '400px' }}>
      <p>
        <CardBase id={1} title={'Tipo card'} type={imgType} />
      </p>
      <p>
        <CardBase id={2} title={'Tipo link'} type={linkType} />
      </p>
      <p>
        <CardBase id={3} title={'Tipo code'} type={codeType} />
      </p>
    </div>
  )
}
