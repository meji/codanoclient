import React from 'react'
import { Card as cardModel } from '../../card/domain/card'
import { CardSnippet } from '../../../core/components/cards/cardSnippet/cardSnippet'
import { CardNote } from '../../../core/components/cards/cardNote/cardNote'
import { CardImg } from '../../../core/components/cards/cardImg/cardImg'
import { CardLink } from '../../../core/components/cards/cardLink/cardLink'

export const CardList: React.FC<{
  cards: cardModel[]
  name: string
}> = ({ name, cards, children }) => {
  return (
    <>
      <p>{name}</p>
      <ul>
        {cards.map(card => {
          if (card.type === 'Snippet') {
            return (
              <li>
                <CardSnippet title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Note') {
            return (
              <li>
                <CardNote title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Image') {
            return (
              <li>
                <CardImg title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Link') {
            return (
              <li>
                <CardLink title={card.name} id={card.id} />
              </li>
            )
          }
        })}
      </ul>
      {children}
    </>
  )
}
