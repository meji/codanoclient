import React, { useEffect, useState } from 'react'
import { Card } from '../../card/ui/card'
import { Card as CardD } from '../../card/domain/card'
import { Id } from '../domain/id'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import { Button } from '../../../core/components/button/button'
import { CardRepositoryFactory } from '../../card/infrastructure/card-repository-factory'
const cx = bind(styles)

export const CardList: React.FC<{
  id?: Id
  name: string
}> = ({ name, id, children }) => {
  const cardRepository = CardRepositoryFactory.build()

  const deleteCard = (card: CardD) => {
    cardRepository.delete(card).then(() => fetchCards())
  }
  async function fetchCards() {
    if (id) {
      const cards: any = await cardRepository.findAll(id)
      setCardsIn(cards)
    }
  }
  const [cardsIn, setCardsIn] = useState([])
  useEffect(() => {
    fetchCards()
  }, [])
  return (
    <>
      <p>{name}</p>
      <ul className={cx('cards')}>
        {cardsIn &&
          cardsIn.map((card: CardD) => {
            return (
              <li key={card.id}>
                <Card card={card} />
                <Button onClick={() => deleteCard(card)}>Borrar</Button>
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
            onChange={() => {
              fetchCards()
              console.log('changed')
            }}
          />
        </li>
      </ul>
      {children}
    </>
  )
}
