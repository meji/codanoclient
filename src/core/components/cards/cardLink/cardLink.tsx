import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { Card } from '../../../../features/card/domain/card'

export const CardLink: React.FC<{ card: Card }> = ({ card, children }) => {
  return <CardBase card={{ ...card, type: 'Link' }}>{children}</CardBase>
}
