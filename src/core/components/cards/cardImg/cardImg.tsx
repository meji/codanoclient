import React from 'react'
import { CardBase } from '../cardBase/cardBase'
import { imgType } from '../cardBase/cardTypes'
import { Card } from '../../../../features/card/domain/card'

export const CardImg: React.FC<{
  card: Card
  onBlur?: () => void
  callback?: (data: any) => void
}> = ({ card, onBlur, callback, children }) => {
  return (
    <CardBase
      id={card.id}
      type={imgType}
      name={card.name}
      img={card.img}
      imageFile={card.imageFile}
      description={card.description}
      onBlur={onBlur}
      callback={(data: any) => callback && callback(data)}
    >
      {children}
    </CardBase>
  )
}
