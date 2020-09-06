import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { Card } from '../../../../features/card/domain/card'

export const CardImg: React.FC<{
  card: Card
  onBlur?: () => void
  onChange?: () => void
  onClose?: () => void
}> = ({ card, onBlur, onChange, onClose, children }) => {
  return (
    <CardBase
      card={{ ...card, type: 'Image' }}
      onBlur={onBlur}
      onChange={onChange}
      onClose={onClose}
    >
      {children}
    </CardBase>
  )
}
