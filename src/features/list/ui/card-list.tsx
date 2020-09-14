import React, { useContext, useEffect, useState } from 'react'
import { Card } from '../../card/ui/card'
import { Card as CardD, NewCard } from '../../card/domain/card'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import { CardRepositoryFactory } from '../../card/infrastructure/card-repository-factory'
import { Icon } from '../../../core/components/icon/icon'
import { AddNewCard } from './new-card'
import { ListRepositoryFactory } from '../infrastructure/list-repository-factory'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { dataContext } from '../../providers/dataProvider'
import { Droppable, Draggable } from 'react-beautiful-dnd'
import { List } from '../domain/list'
import { is_touch_device } from '../../../utils/isTouchDevice'

const cx = bind(styles)

export const CardList: React.FC<{ list: List }> = ({ list, children }) => {
  const { setNotice } = useContext(dataContext)
  const [hover, setHover] = useState(false)
  const [listName, setListName] = useState(list.name)
  const [cardsIn, setCardsIn] = useState<CardD[]>([] as CardD[])
  const [isDraggable, setIsDraggable] = useState(true)

  useEffect(() => {
    setListName(list.name)
    fetchCards()
  }, [list])
  useEffect(() => {
    is_touch_device() && setHover(true)
  }, [hover])
  const cardRepository = CardRepositoryFactory.build()
  const listRepository = ListRepositoryFactory.build()

  async function fetchCards() {
    await cardRepository.findAll(list.id).then(response => setCardsIn(response))
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
      listRepository.update({
        ...list,
        name: e.target.value
      })
      setListName(e.target.value)
    }
  }
  const addNewCardInList = (card: NewCard) => {
    card = { ...card, inList: list.id }
    cardRepository.create(card).then(() => fetchCards())
  }
  return (
    <>
      <Droppable droppableId={list.id}>
        {provided => (
          <div
            ref={provided.innerRef}
            {...provided.droppableProps}
            className={cx('card-list-container')}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            <p className={cx('list-title')}>
              {' '}
              <Editingtitle
                handleKeydown={e => handleKeydown(e)}
                value={listName}
                placeHolder={'List Name'}
                size={'s'}
              />
            </p>

            <ul className={cx('cards')}>
              {cardsIn &&
                cardsIn.map((card: CardD, index) => {
                  return (
                    <Draggable
                      draggableId={card.id}
                      index={index}
                      key={card.id + Draggable + index}
                      isDragDisabled={!isDraggable}
                    >
                      {provided => (
                        <li
                          key={card.id + 'li' + index * 2}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                        >
                          <Card
                            key={card.id + 'card'}
                            card={card}
                            onClose={() => {
                              fetchCards()
                              setIsDraggable(!isDraggable)
                            }}
                            onClick={() => {
                              setIsDraggable(!isDraggable)
                            }}
                            deleteCard={() => deleteCard(card)}
                          />
                          <Icon
                            key={card.id + 'link' + index * 3}
                            icon={'times-circle'}
                            onClick={() => deleteCard(card)}
                          />
                        </li>
                      )}
                    </Draggable>
                  )
                })}
              {provided.placeholder}
            </ul>
            <AddNewCard visibleContainer={hover} cardCreated={card => addNewCardInList(card)} />
          </div>
        )}
      </Droppable>
      {children}
    </>
  )
}
