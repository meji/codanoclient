import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { Card } from '../../../../features/card/domain/card'

export const CardSnippet: React.FC<{ card: Card; callback?: (data: any) => void }> = ({
  card,
  callback,
  children
}) => {
  return (
    <CardBase
      card={{ ...card, type: 'Snippet' }}
      callback={(data: any) => callback && callback(data)}
    >
      {children}
    </CardBase>
  )
}
