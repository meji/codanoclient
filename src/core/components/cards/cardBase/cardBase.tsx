import React, { useEffect, useState } from 'react'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { ImgInput } from '../../forms/inputs/img-input/img-input'
import { Editingtitle } from '../../forms/editing-title/editingTitle'
import { Card } from '../../../../features/card/domain/card'
const cx = bind(styles)

interface Props {
  card: Card
  onBlur?: () => void
  onChange?: () => void
  onClose?: (card: Card) => void
  callback?: (data: any) => void
}

export const CardBase: React.FunctionComponent<Props> = ({
  card,
  callback,
  onBlur,
  onChange,
  onClose,
  children
}) => {
  const [unfold, setUnfold] = useState(false)
  const [data, setData] = useState<Card>(card)
  const iconType =
    data.type === 'Image'
      ? 'id-card'
      : data.type === 'Link'
      ? 'link'
      : data.type === 'Note'
      ? 'sticky-note'
      : data.type === 'Snippet'
      ? 'code'
      : 'sticky-note'
  useEffect(() => {
    callback && callback(data)
  }, [data])

  const close = () => {
    setUnfold(false)
    if (onClose) {
      onClose(data)
    }
  }

  return (
    <div
      data-id={data.id}
      className={unfold ? cx('card', 'unfold') : cx('card', 'fold')}
      onClick={() => !unfold && setUnfold(true)}
      onChange={onChange}
    >
      <div className={cx('inner-container')}>
        <div className={cx('title-container')} onBlur={onBlur}>
          <Icon icon={iconType} className={cx('icon')} />
          {unfold && (
            <Editingtitle
              handleKeydown={e => {
                setData({ ...data, name: e.target.value })
              }}
              value={data.name ? data.name : 'Card Title'}
              className={cx('title')}
              size={'s'}
            />
          )}
          {!unfold && <p className={cx('title')}>{data.name}</p>}

          {unfold && (
            <Icon
              icon={'times'}
              onClick={() => {
                close()
              }}
              className={cx('folder')}
            />
          )}
        </div>
        <div className={unfold ? cx('content', 'unfold') : cx('content')}>
          <Mdeditor
            initialText={data.description}
            callback={(content: any) => {
              setData({ ...data, description: content.text })
            }}
          />
          {!data.img && (
            <ImgInput
              // className={cx('no-styles')}
              onChange={(e: any) => {
                setData({ ...data, imageFile: e.target.files })
              }}
              size={'s'}
            />
          )}
          {data.img && (
            <div className="img-container">
              <img
                src={process.env.REACT_APP_BACK_URL + 'cards/img/' + data.img}
                title={data.name}
                alt={data.name}
              />
              <span className={'delete'} onClick={() => setData({ ...data, img: undefined })}>
                X
              </span>
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
