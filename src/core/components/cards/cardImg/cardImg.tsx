import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { noteType } from '../cardBase/cardTypes'
import { Card } from '../../../../features/card/domain/card'

export const CardImg: React.FC<{ card: Card; callback?: (data: any) => void }> = ({
  card,
  callback,
  children
}) => {
  return (
    <CardBase
      id={card.id}
      type={noteType}
      name={card.name}
      img={card.img}
      description={card.description}
      callback={(data: any) => callback && callback(data)}
    >
      {children}
    </CardBase>
  )
}
