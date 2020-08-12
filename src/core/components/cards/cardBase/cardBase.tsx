import React, { useEffect, useState } from 'react'
import { Id } from './id'
import { cardType, imgType, linkType } from './cardTypes'
import { bind } from '../../../../utils/bind'
import styles from './cardBase.module.css'
import { Icon } from '../../icon/icon'
import { UrlInput } from '../../forms/inputs/url-input/url-input'
import { TextInput } from '../../forms/inputs/text-input/text-input'
import { Mdeditor } from '../../forms/md-editor/mdeditor'
import { ImgInput } from '../../forms/inputs/img-input/img-input'
const cx = bind(styles)

interface Props {
  id?: Id
  type: cardType
  description?: string
  name?: string
  img?: string
  imageFile?: any
  callback?: (data: any) => void
}

export const CardBase: React.FunctionComponent<Props> = ({
  id,
  type,
  name,
  description,
  img,
  imageFile,
  callback,
  children
}) => {
  const [unfold, setUnfold] = useState(false)
  const [editingTitle, setEditingTitle] = useState(false)
  const [data, setData] = useState({
    id: id,
    name: name,
    description: description,
    img: img,
    imageFile: imageFile,
    extra: '',
    err: ''
  })
  useEffect(() => {
    callback && callback(data)
  }, [data])

  const fold = () => {
    setUnfold(false)
  }

  const titleContainer = editingTitle ? (
    type === linkType ? (
      <UrlInput
        onChange={e => {
          setData({ ...data, name: e.target.value, err: e.target.validationMessage })
        }}
        className={cx('no-styles')}
        required={true}
      />
    ) : (
      <TextInput
        className={cx('no-styles')}
        onChange={e => {
          setData({ ...data, name: e.target.value, err: e.target.validationMessage })
        }}
      />
    )
  ) : (
    <span className={cx('title')} onDoubleClick={() => setEditingTitle(true)}>
      {data.name}
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
      <div className={unfold ? cx('content', 'unfold') : cx('content')}>
        <Mdeditor
          initialText={data.description}
          callback={(content: any) => {
            setData({ ...data, description: content.text })
          }}
        />
        {type === imgType && !data.img && (
          <ImgInput
            className={cx('no-styles')}
            onChange={(e: any) => {
              setData({ ...data, imageFile: e.target.files })
            }}
          />
        )}
        {type === imgType && data.img && (
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
  )
}
