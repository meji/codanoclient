import React, { useEffect, useState } from 'react'
import { Card as CardData } from '../domain/card'
import { CardRepositoryFactory } from '../infrastructure/card-repository-factory'
import { CardBase } from '../../../core/components/cards/cardBase/cardBase'

export const Card: React.FC<{
  card: CardData
  onChange?: () => void
  onClose?: () => void
}> = ({ card, onChange, onClose }): any => {
  const [cardData, setData] = useState(card)
  const cardRepositoryFactory = CardRepositoryFactory.build()
  const saveCard = (card: CardData) => {
    cardRepositoryFactory.update(card)
    onClose && onClose()
  }
  const savePicture = (card: CardData) => {
    cardRepositoryFactory
      .newImg(card.imageFile, card.id)
      .then(response => updateCard({ ...card, img: response }))
  }
  const updateCard = (card: CardData) => {
    cardRepositoryFactory.update(card).then(response => {
      setData(response)
    })
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
      onChange={card => {
        onChange && onChange()
        card.imageFile && savePicture(card)
        updateCard(card)
      }}
    />
  )
}
