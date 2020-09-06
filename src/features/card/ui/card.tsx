import React, { useEffect, useState } from 'react'
import { Card as CardData } from '../domain/card'
import { CardRepositoryFactory } from '../infrastructure/card-repository-factory'
import { CardBase } from '../../../core/components/cards/cardBase/cardBase'
import { Id } from '../../../core/components/cards/cardBase/id'

export const Card: React.FC<{
  card: CardData
  onClose?: () => void
}> = ({ card, onClose }): any => {
  const [cardData, setData] = useState(card)
  const cardRepositoryFactory = CardRepositoryFactory.build()
  const saveCard = (card: CardData) => {
    cardRepositoryFactory.update(card)
    onClose && onClose()
  }
  const savePicture = (card: CardData) => {
    console.log('Guardando imagen', card)
    cardRepositoryFactory
      .newImg(card.imageFile, card.id)
      .then(response => {
        console.log('trayendo foto', response)
        updateCard({ ...card, img: response })
      })
      .catch(error => console.log('error al traer imagen', error))
  }
  const updateCard = (card: CardData) => {
    console.log('card a actualizar', card)
    cardRepositoryFactory
      .update(card)
      .then(response => {
        setData(response)
        console.log('Actualizado en base', card)
      })
      .catch(e => console.log('error actualizando', e))
  }
  const deleteImg = (id: Id) => {
    cardRepositoryFactory.deleteImg(id)
  }
  useEffect(() => {
    if (cardData.name && cardData.id) {
      cardRepositoryFactory.update(cardData)
      if (cardData.imageFile && cardData.imageFile.length > 0) {
        cardRepositoryFactory.newImg(cardData.imageFile, cardData.id).then(response => {
          setData({ ...cardData, imageFile: undefined, img: response })
        })
      }
    }
  }, [cardData])
  return (
    <CardBase
      card={card}
      onClose={card => saveCard(card)}
      saveImg={card => savePicture(card)}
      callBack={card => deleteImg(card.id)}
    />
  )
}
