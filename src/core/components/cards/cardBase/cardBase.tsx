import React, { useState } from 'react'
import { Id } from './id'
import { cardType } from './cardTypes'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
const cx = bind(styles)

interface Props {
  id: Id
  type: cardType
  title: string
}

export const CardBase: React.FunctionComponent<Props> = ({ id, type, title, children }) => {
  const [titleIn, setTitleIn] = useState(title)
  const [unfold, setUnfold] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)
  const titleContainer = editingTitle ? (
    <input
      type="text"
      className={cx('title', 'input')}
      value={titleIn}
      onChange={e => setTitleIn(e.target.value)}
    />
  ) : (
    <span className={cx('title')}>{titleIn}</span>
  )
  return (
    <div
      data-id={id}
      className={unfold ? cx('card', 'unfold') : cx('card', 'fold')}
      onClick={() => setUnfold(true)}
      onBlur={() => setEditingTitle(false)}
    >
      <div className={cx('title-container')} onDoubleClick={() => setEditingTitle(true)}>
        <Icon icon={type.icon} className={cx('icon')} />
        {titleContainer}
      </div>
      <div className={cx('content')}>{unfold && children}</div>
    </div>
  )
}
