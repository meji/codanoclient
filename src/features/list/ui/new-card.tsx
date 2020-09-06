import React, { useState } from 'react'
import { Button } from '../../../core/components/button/button'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
import {
  cardType,
  noteType,
  codeType,
  imgType,
  linkType
} from '../../../core/components/cards/cardBase/cardTypes'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { Card } from '../../card/domain/card'
const cx = bind(styles)

export const AddNewCard: React.FC<{
  visibleContainer: Boolean
  cardCreated: (card: Card) => void
}> = ({ visibleContainer, cardCreated }) => {
  const [visibleTypeButtons, setVisibleTypeButtons] = useState(false)
  const [visibleNameInputForm, setVisibleNameInputForm] = useState(false)
  const [cardTypeSelected, setCardTypeSelected] = useState<cardType>(noteType)
  const createNewCard = (e: any) => {
    const card: Card = { name: e.target.value, type: cardTypeSelected.type }
    cardCreated(card)
    setVisibleNameInputForm(false)
  }
  return (
    <div
      className={
        visibleContainer
          ? visibleTypeButtons
            ? cx('new-card-container', 'visible', 'with-buttons')
            : cx('new-card-container', 'visible')
          : cx('new-card-container')
      }
      onClick={() => setVisibleTypeButtons(true)}
      onMouseLeave={() => setVisibleTypeButtons(false)}
    >
      {visibleTypeButtons && !visibleNameInputForm && (
        <>
          <Button
            theme={'transparent'}
            icon={'id-card'}
            onClick={() => {
              setCardTypeSelected(imgType)
              setVisibleNameInputForm(true)
            }}
          />
          <Button
            theme={'transparent'}
            icon={'link'}
            onClick={() => {
              setCardTypeSelected(linkType)
              setVisibleNameInputForm(true)
            }}
          />
          <Button
            theme={'transparent'}
            icon={'code'}
            onClick={() => {
              setCardTypeSelected(codeType)
              setVisibleNameInputForm(true)
            }}
          />
          <Button
            theme={'transparent'}
            icon={'sticky-note'}
            onClick={() => {
              setCardTypeSelected(noteType)
              setVisibleNameInputForm(true)
            }}
          />
        </>
      )}
      {!visibleTypeButtons && !visibleNameInputForm && (
        <p className={cx('add-button', 'link')}>+ Add Card</p>
      )}
      {visibleNameInputForm && (
        <Editingtitle
          handleKeydown={e => createNewCard(e)}
          placeHolder={'Title of the new card'}
          value={''}
          inputVisible={true}
          size={'s'}
          onBlur={() => {
            setVisibleNameInputForm(false)
          }}
        />
      )}
    </div>
  )
}
