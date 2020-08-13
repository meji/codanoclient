import React, { useEffect, useState } from 'react'
import { Card } from '../../card/ui/card'
import { Card as CardD } from '../../card/domain/card'
import { Id } from '../domain/id'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import { CardRepositoryFactory } from '../../card/infrastructure/card-repository-factory'
import { Icon } from '../../../core/components/icon/icon'
import { Button } from '../../../core/components/button/button'
const cx = bind(styles)

const AddNewCard: React.FC<{ visibleContainer: Boolean }> = ({ visibleContainer }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div
      className={
        visibleContainer === true
          ? visible
            ? cx('new-card-container', 'visible', 'with-buttons')
            : cx('new-card-container', 'visible')
          : cx('new-card-container')
      }
      onMouseOver={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && (
        <>
          <Button theme={'primary'} icon={'id-card'} />
          <Button theme={'primary'} icon={'link'} />
          <Button theme={'primary'} icon={'code'} />
          <Button theme={'primary'} icon={'sticky-note'} />
        </>
      )}
      {!visible && (
        <Button className={cx('add-button')} theme={'primary'}>
          Add Card
        </Button>
      )}
    </div>
  )
}

export const CardList: React.FC<{
  id?: Id
  name: string
}> = ({ name, id, children }) => {
  const [hover, setHover] = useState(false)
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
      <div
        className={cx('card-list-conainer')}
        onMouseOver={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p>{name}</p>
        <ul className={cx('cards')}>
          {cardsIn &&
            cardsIn.map((card: CardD) => {
              return (
                <li key={card.id}>
                  <Card card={card} onClose={fetchCards} />
                  <Icon icon={'times-circle'} onClick={() => deleteCard(card)} />
                </li>
              )
            })}
        </ul>
        <AddNewCard visibleContainer={hover} />
      </div>
      {children}
    </>
  )
}
