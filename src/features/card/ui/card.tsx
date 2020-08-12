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
  const [newCard, setNewCard] = useState(true)
  const cardRepositoryFactory = CardRepositoryFactory.build()
  const createCard = () => {
    if (data.name && data.type && !data.id && newCard) {
      cardRepositoryFactory.create(data).then(response => {
        const id = response.id
        setData({ ...data, id: id })
      })
      setNewCard(false)
    }
  }
  useEffect(() => {
    if (data.name && data.id) {
      cardRepositoryFactory.update(data)
      if (data.imageFile && data.imageFile.length > 0) {
        cardRepositoryFactory.newImg(data.imageFile, data.id).then(response => {
          setData({ ...data, imageFile: undefined, img: response })
        })
      }
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
        card={data}
        callback={(e: any) => {
          setData({
            ...data,
            name: e.name,
            description: e.description,
            img: e.img,
            imageFile: e.imageFile,
            type: 'Image'
          })
        }}
        onBlur={() => createCard()}
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
