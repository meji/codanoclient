import React from 'react'
import { CardDto } from '../../card/infrastructure/card-dto'
import { Card } from '../../card/ui/card'
import { Id } from '../domain/id'

export const CardList: React.FC<{
  cards: CardDto[]
  id: Id
  name: string
}> = ({ name, cards, id, children }) => {
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
        <li>
          <Card
            card={{
              type: 'Image',
              name: 'Escribe tu card nueva',
              description: 'Mark it down',
              inList: id
            }}
          />
        </li>
      </ul>
      {children}
    </>
  )
}
