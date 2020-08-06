import React from 'react'
import { CardDto } from '../../card/infrastructure/card-dto'
import { CardSnippet } from '../../../core/components/cards/cardSnippet/cardSnippet'
import { CardNote } from '../../../core/components/cards/cardNote/cardNote'
import { CardImg } from '../../../core/components/cards/cardImg/cardImg'
import { CardLink } from '../../../core/components/cards/cardLink/cardLink'
import { CardDtoToCardMapper } from '../../card/infrastructure/card-dto-to-card-mapper'

export const CardList: React.FC<{
  cards: CardDto[]
  name: string
}> = ({ name, cards, children }) => {
  const cardDtoToCardMapper = new CardDtoToCardMapper()
  const cardsMapped = cards.map(cardDto => cardDtoToCardMapper.map(cardDto))
  return (
    <>
      <p>{name}</p>
      <ul>
        {cardsMapped.map(card => {
          if (card.type === 'Snippet') {
            return (
              <li key={card.id}>
                <CardSnippet title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Note') {
            return (
              <li key={card.id}>
                <CardNote title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Image') {
            return (
              <li key={card.id}>
                <CardImg title={card.name} id={card.id} />
              </li>
            )
          } else if (card.type === 'Link') {
            return (
              <li key={card.id}>
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
