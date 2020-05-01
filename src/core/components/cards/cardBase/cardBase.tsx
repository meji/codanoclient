import React, { useState } from 'react'
import { Id } from './id'
import { cardType, linkType } from './cardTypes'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
import { UrlInput } from '../../forms/inputs/url-input/url-input'
import { TextInput } from '../../forms/inputs/text-input/text-input'
const cx = bind(styles)

interface Props {
  id: Id
  type: cardType
  title: string
  callback?: (data: any) => void
}

export const CardBase: React.FunctionComponent<Props> = ({
  id,
  type,
  title,
  callback,
  children
}) => {
  const [unfold, setUnfold] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)
  const [data, setData] = useState({ id: id, title: title, description: '', extra: '', err: '' })
  const fold = () => {
    setUnfold(false)
  }

  const titleContainer = editingTitle ? (
    type === linkType ? (
      <UrlInput
        callback={() => callback && callback(data)}
        onChange={e => setData({ ...data, title: e.target.value, err: e.target.validationMessage })}
        className={cx('no-styles')}
        required={true}
      />
    ) : (
      <TextInput
        className={cx('no-styles')}
        callback={data => callback && callback(data)}
        onChange={e => setData({ ...data, title: e.target.value, err: e.target.validationMessage })}
      />
    )
  ) : (
    <span className={cx('title')} onDoubleClick={() => setEditingTitle(true)}>
      {data.title}
      {data.err && <p className={cx('error')}>{data.err}</p>}
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
