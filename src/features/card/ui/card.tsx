import React, { useEffect, useState } from 'react'
import { CardSnippet } from '../../../core/components/cards/cardSnippet/cardSnippet'
import { CardNote } from '../../../core/components/cards/cardNote/cardNote'
import { CardImg } from '../../../core/components/cards/cardImg/cardImg'
import { CardLink } from '../../../core/components/cards/cardLink/cardLink'
import { CardDto } from '../infrastructure/card-dto'
import { CardDtoToCardMapper } from '../infrastructure/card-dto-to-card-mapper'
import { CardRepositoryFactory } from '../infrastructure/card-repository-factory'

export const Card: React.FC<{
  card: CardDto
}> = ({ card }): any => {
  const cardDtoToCardMapper = new CardDtoToCardMapper()
  const cardMapped = cardDtoToCardMapper.map(card)
  const [data, setData] = useState(cardMapped)
  const cardRepositoryFactory = CardRepositoryFactory.build()

  useEffect(() => {
    if (data.name && data.id) {
      cardRepositoryFactory.update(data)
    }
  }, [data])

  if (cardMapped.type === 'Snippet') {
    return (
      <CardSnippet
        card={cardMapped}
        callback={(e: any) => {
          setData({
            ...data,
            name: e.name,
            description: e.description,
            img: e.img,
            type: 'Snippet'
          })
        }}
      />
    )
  } else if (cardMapped.type === 'Note') {
    return (
      <CardNote
        card={cardMapped}
        callback={(e: any) => {
          setData({ ...data, name: e.name, description: e.description, img: e.img, type: 'Note' })
        }}
      />
    )
  } else if (cardMapped.type === 'Image') {
    return (
      <CardImg
        card={cardMapped}
        callback={(e: any) => {
          setData({ ...data, name: e.name, description: e.description, img: e.img, type: 'Image' })
        }}
      />
    )
  } else if (cardMapped.type === 'Link') {
    return (
      <CardLink
        card={cardMapped}
        callback={(e: any) => {
          setData({ ...data, name: e.name, description: e.description, img: e.img, type: 'Link' })
        }}
      />
    )
  }
}