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
  const fold = () => {
    setUnfold(false)
    console.log(unfold)
  }

  const titleContainer = editingTitle ? (
    <input
      type="text"
      className={cx('title', 'input')}
      value={titleIn}
      onChange={e => setTitleIn(e.target.value)}
      onKeyDown={e => e.key === 'Enter' && setEditingTitle(false)}
    />
  ) : (
    <span className={cx('title')} onDoubleClick={() => setEditingTitle(true)}>
      {titleIn}
    </span>
  )
  return (
    <div
      data-id={id}
      className={unfold ? cx('card', 'unfold') : cx('card', 'fold')}
      onClick={() => !unfold && setUnfold(true)}
      onBlur={() => setEditingTitle(false)}
    >
      <div className={cx('title-container')}>
        <Icon icon={type.icon} className={cx('icon')} />
        {titleContainer}
        {unfold && <Icon icon={'angle-up'} onClick={() => fold()} className={cx('folder')} />}
      </div>
      <div className={unfold ? cx('content', 'unfold') : cx('content')}>{children}</div>
    </div>
  )
}
