import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { Card } from '../../../../features/card/domain/card'

export const CardSnippet: React.FC<{ card: Card }> = ({ card, children }) => {
  return <CardBase card={{ ...card, type: 'Snippet' }}>{children}</CardBase>
}
