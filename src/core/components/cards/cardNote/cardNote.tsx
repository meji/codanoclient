import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { Card } from '../../../../features/card/domain/card'

export const CardNote: React.FC<{ card: Card }> = ({ card, children }) => {
  return <CardBase card={{ ...card, type: 'Note' }}>{children}</CardBase>
}
