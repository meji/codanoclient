import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { codeType } from '../cardBase/cardTypes'
import { Card } from '../../../../features/card/domain/card'

export const CardSnippet: React.FC<{ card: Card; callback?: (data: any) => void }> = ({
  card,
  callback,
  children
}) => {
  return (
    <CardBase
      id={card.id}
      type={codeType}
      name={card.name}
      description={card.description}
      callback={(data: any) => callback && callback(data)}
    >
      {children}
    </CardBase>
  )
}
