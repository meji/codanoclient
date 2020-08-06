import React from 'react'
import { CardDto } from '../../card/infrastructure/card-dto'
import { Card } from '../../card/ui/card'

export const CardList: React.FC<{
  cards: CardDto[]
  name: string
}> = ({ name, cards, children }) => {
  return (
    <>
      <p>{name}</p>
      <ul>
        {cards.map(card => {
          return (
            <li key={card._id}>
              <Card card={card} />
            </li>
          )
        })}
      </ul>
      {children}
    </>
  )
}
