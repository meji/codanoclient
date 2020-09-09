import React, { useState } from 'react'
import { Card as CardData } from '../domain/card'
import { CardRepositoryFactory } from '../infrastructure/card-repository-factory'
import { CardBase } from '../../../core/components/cards/cardBase/cardBase'
import { Id } from '../../../core/components/cards/cardBase/id'

export const Card: React.FC<{
  card: CardData
  deleteCard?: () => void
  onClose?: () => void
}> = ({ card, onClose, deleteCard }): any => {
  const [cardData, setData] = useState(card)
  const cardRepositoryFactory = CardRepositoryFactory.build()
  const closeCard = (card: CardData) => {
    cardRepositoryFactory.update(card).then(() => {
      updateCard()
    })
    onClose && onClose()
  }
  const savePicture = (e: any) => {
    cardRepositoryFactory
      .newImg(e, card.id)
      .then(response => {
        cardRepositoryFactory.update({ ...card, img: response }).then(response => setData(response))
      })
      .then(() => updateCard())
      .catch(error => console.log('error al traer imagen', error))
  }

  const deleteImg = (id: Id) => {
    cardRepositoryFactory.deleteImg(id).then(() => updateCard())
  }
  const updateCard = () => {
    cardData.id &&
      cardRepositoryFactory.getById(cardData.id).then(response => {
        setData(response)
      })
  }

  return (
    <CardBase
      card={cardData}
      onClose={card => closeCard(card)}
      saveImg={e => savePicture(e)}
      callBack={card => deleteImg(card.id)}
      deleteCard={() => deleteCard && deleteCard()}
    />
  )
}
