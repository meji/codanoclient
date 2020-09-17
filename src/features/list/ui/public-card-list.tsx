import React, { useEffect, useState } from 'react'
import { Card as CardD } from '../../card/domain/card'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import { CardRepositoryFactory } from '../../card/infrastructure/card-repository-factory'
import { List } from '../domain/list'
import { PublicCard } from '../../../core/components/cards/cardBase/public-card'

const cx = bind(styles)

export const PublicCardList: React.FC<{ list: List }> = ({ list }) => {
  const [cardsIn, setCardsIn] = useState<CardD[]>([] as CardD[])
  useEffect(() => {
    fetchCards()
  }, [list])
  const cardRepository = CardRepositoryFactory.build()
  async function fetchCards() {
    await cardRepository.findAll(list.id).then(response => setCardsIn(response))
  }
  return (
    <div className={cx('card-list-container')}>
      <p className={cx('list-title')}>{'listName'}</p>
      <ul className={cx('cards')}>
        {cardsIn &&
          cardsIn.map((card: CardD, index) => {
            return (
              <li key={card.id + 'li' + index * 2}>
                <PublicCard key={card.id + 'card'} card={card} />
              </li>
            )
          })}
      </ul>
    </div>
  )
}
