import React from 'react'
import { CodItemLine } from './codItemLine'
import { cardType, linkType, codeType } from './codItemTypes'

export default {
  title: 'Dark/Componentes',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CodItemLine
}

export const cardItem = () => {
  return (
    <div className={'dark-theme'} style={{ width: '400px' }}>
      <p>
        <CodItemLine id={1} text={'Tipo card'} type={cardType} />
      </p>
      <p>
        <CodItemLine id={2} text={'Tipo link'} type={linkType} />
      </p>
      <p>
        <CodItemLine id={3} text={'Tipo code'} type={codeType} />
      </p>
    </div>
  )
}
