import React, { useEffect, useRef, useState } from 'react'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
import { MyMdEditor } from '../../forms/md-editor/myMdEditor'
import { ImgInput } from '../../forms/inputs/img-input/img-input'
import { Editingtitle } from '../../forms/editing-title/editingTitle'
import { Card } from '../../../../features/card/domain/card'
import { useOutsideClick } from '../../../../features/hooks/use-outside-click'
import { Button } from '../../button/button'
import { isValidUrl } from '../../utils/isUrl'

const cx = bind(styles)

interface Props {
  card: Card
  onBlur?: () => void
  onChange?: (card: Card) => void
  onClose?: (card: Card) => void
  callBack?: (data: any) => void
  deleteCard?: () => void
  saveImg?: (e: any) => void
}

export const CardBase: React.FunctionComponent<Props> = ({
  card,
  callBack,
  onBlur,
  onClose,
  children,
  saveImg,
  deleteCard
}) => {
  const [unfold, setUnfold] = useState(false)
  const [data, setData] = useState<Card>(card)
  const [url, setUrl] = useState<string>('')
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
    setData(card)
  }, [card])

  const close = (data: Card) => {
    setUnfold(false)
    onClose && onClose(data)
  }
  const initialText = data.description
    ? data.description
    : card.type == 'Snippet'
    ? '# Write here any code\n' +
      'Write the code language with **```language** in this markDown Editor\n' +
      '\n' +
      '```html\n' +
      '\n' +
      '<h1>Example:</h1> \n' +
      '\n' +
      '<div class="container">This is a div</div>\n' +
      ' If you want to change the language change the html tag in the markDown Editor'
    : card.type == 'Note'
    ? '# Write here your note in MarkDown notation\n You can clear this example text making click on the litter button'
    : card.type === 'Link'
    ? '# Write here the description of the website in MarkDown notation\n You can clear this example text making click on the litter button'
    : '# Write here the description of the image in MarkDown notation\n You can clear this example text making click on the litter button'

  const divRef = useRef<HTMLDivElement>(null)
  useOutsideClick(divRef, () => {
    close(data)
  })

  const putLink = (url: string) => {
    setUrl(url)
  }

  return (
    <div
      data-id={data.id}
      className={unfold ? cx('card', 'unfold') : cx('card', 'fold')}
      onClick={() => !unfold && setUnfold(true)}
    >
      <div className={cx('inner-container')} ref={divRef}>
        <div className={cx('title-container')} onBlur={onBlur}>
          {url ? (
            <img src={'http://www.google.com/s2/favicons?domain=' + url} />
          ) : (
            <Icon icon={iconType} className={cx('icon')} />
          )}
          {unfold && (
            <Editingtitle
              handleKeydown={e => {
                setData({ ...data, name: e.target.value })
                isValidUrl(e.target.value) && putLink(e.target.value)
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
                close(data)
              }}
              className={cx('folder')}
            />
          )}
        </div>
        <div className={unfold ? cx('content', 'unfold') : cx('content')}>
          <MyMdEditor
            card={card}
            initialText={initialText}
            showContent={unfold}
            callback={(content: any) => {
              setData({ ...data, description: content.text })
            }}
          />
          {!data.img && (
            <ImgInput
              callBack={e => {
                setData({ ...data, imageFile: e })
                setTimeout(() => {
                  saveImg && saveImg(e)
                }, 300)
              }}
            />
          )}
          <div className={cx('button-container')}>
            <Button icon={'times'} onClick={() => deleteCard && deleteCard()} theme={'secondary'}>
              Delete Card
            </Button>
            <Button onClick={() => close(data)} theme={'secondary'}>
              Save and close
            </Button>
          </div>
          {data.img && (
            <div className={cx('img-container')}>
              <img
                src={process.env.REACT_APP_BACK_URL + 'cards/img/' + data.img}
                title={data.name}
                alt={data.name}
              />
              <Icon
                icon={'times-circle'}
                className={cx('delete')}
                onClick={() => {
                  callBack && callBack(data)
                }}
              />
            </div>
          )}
          {children}
        </div>
      </div>
    </div>
  )
}
