import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../card/ui/card'
import { Card as CardD } from '../../card/domain/card'
import { Id } from '../domain/id'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import { CardRepositoryFactory } from '../../card/infrastructure/card-repository-factory'
import { Icon } from '../../../core/components/icon/icon'
import { AddNewCard } from './new-card'
import { ListRepositoryFactory } from '../infrastructure/list-repository-factory'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { dataContext } from '../../providers/dataProvider'

const cx = bind(styles)

export const CardList: React.FC<{
  id?: Id
  name: string
  inBoard: string
}> = ({ name, id, inBoard, children }) => {
  const [hover, setHover] = useState(false)
  const [cardName, setCardName] = useState(name)
  const [cardsIn, setCardsIn] = useState([])
  const { setNotice } = useContext(dataContext)
  useEffect(() => {
    fetchCards()
  }, [])
  useEffect(() => {
    setCardName(name)
  }, [name])
  const cardRepository = CardRepositoryFactory.build()
  const listRepository = ListRepositoryFactory.build()

  async function fetchCards() {
    if (id) {
      const cards: any = await cardRepository.findAll(id)
      setCardsIn(cards)
    }
  }
  const deleteCard = (card: CardD) => {
    if (window.confirm('Do you want to delete the card ' + card.name)) {
      cardRepository.delete(card).then(() => {
        setNotice('Card deleted')
        fetchCards()
      })
    }
  }

  const handleKeydown = (e: any) => {
    if (e.key === 'Enter') {
      listRepository.update({ id: id, name: e.target.value, cards: cardsIn, inBoard: inBoard })
      setCardName(e.target.value)
    }
  }
  const addNewCardInList = (card: CardD) => {
    card = { ...card, inList: id }
    cardRepository.create(card).then(() => fetchCards())
  }
  return (
    <>
      <div
        className={cx('card-list-container')}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <p className={cx('list-title')}>
          {' '}
          <Editingtitle handleKeydown={e => handleKeydown(e)} value={cardName} size={'s'} />
        </p>

        <ul className={cx('cards')}>
          {cardsIn &&
            cardsIn.map((card: CardD) => {
              return (
                <li key={card.id}>
                  <Card card={card} onClose={fetchCards} deleteCard={() => deleteCard(card)} />
                  <Icon icon={'times-circle'} onClick={() => deleteCard(card)} />
                </li>
              )
            })}
        </ul>
        <AddNewCard visibleContainer={hover} cardCreated={card => addNewCardInList(card)} />
      </div>
      {children}
    </>
  )
}
