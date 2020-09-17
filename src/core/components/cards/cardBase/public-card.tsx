import React, { useEffect, useState } from 'react'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
import { Card } from '../../../../features/card/domain/card'
import { setUrlDomain } from '../../utils/isUrl'
import { CardPreview } from './card-preview/card-preview'

const cx = bind(styles)

interface Props {
  card: Card
  onClick?: () => void
}

export const PublicCard: React.FunctionComponent<Props> = ({ card, onClick }) => {
  const [unfold, setUnfold] = useState(false)
  const [data, setData] = useState<Card>(card)
  const iconType =
    data.type === 'Image'
      ? 'image'
      : data.type === 'Link'
      ? 'link'
      : data.type === 'Note'
      ? 'sticky-note'
      : data.type === 'Snippet'
      ? 'code'
      : 'sticky-note'

  useEffect(() => {
    setData(card)
  }, [card])

  useEffect(() => {
    unfold && onClick && onClick()
  }, [unfold])

  return (
    <>
      <div
        className={cx('card')}
        onClick={() => {
          !unfold && setUnfold(true)
        }}
      >
        <div className={cx('inner-container')}>
          <div className={cx('title-container')}>
            {data.url ? (
              <Icon image={'http://www.google.com/s2/favicons?domain=' + setUrlDomain(data.url)} />
            ) : (
              <Icon icon={iconType} className={cx('icon')} />
            )}
            <p className={cx('title')}>
              {data.name ? data.name : data.url ? data.url : 'Card Title'}
            </p>
          </div>
        </div>
      </div>
      {unfold && (
        <div className={cx('card', 'unfold')}>
          <CardPreview card={data} closePreview={() => setUnfold(false)} />
        </div>
      )}
    </>
  )
}
