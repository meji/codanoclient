import React from 'react'
import { CodItemLine } from './codItemLine'
import { cardType, linkType, codeType } from './codItemTypes'

export default {
  title: 'Dark/Componentes',
  component: CodItemLine
}

export const cardItem = () => {
  return (
    <div
      className={'dark-theme'}
      style={{ width: '400px', padding: '20px', backgroundColor: '#0000000' }}
    >
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
