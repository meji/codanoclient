import React, { useState } from 'react'
import { Icon } from '../../../icon/icon'
import { Button } from '../../../button/button'
import { bind } from '../../../../../utils/bind'
import styles from './card-preview.module.css'
import { Card } from '../../../../../features/card/domain/card'
import ReactHtmlParser from 'react-html-parser'
import MarkdownIt from 'markdown-it'
import hljs from 'highlight.js'
const cx = bind(styles)
const mdParser: any = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true,
  highlight: function (str, lang) {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return '<pre class="hljs"><code>' + hljs.highlight(lang, str, true).value + '</code></pre>'
      } catch (__) {}
    }
    return '<pre class="hljs"><code>' + mdParser.utils.escapeHtml(str) + '</code></pre>'
  }
})

export const CardPreview: React.FC<{ card: Card; closePreview: () => void }> = ({
  card,
  closePreview
}) => {
  const [imageExpanded, setImageExpanded] = useState(false)
  const [prevExpanded, setPrevExpanded] = useState(false)

  return (
    <div className={cx('preview-container')}>
      <Icon className={cx('close-preview')} icon={'times'} onClick={() => closePreview()} />

      {(card.img || card.url) && (
        <div className={cx('img-container', imageExpanded && 'expanded')}>
          <Icon
            className={cx('expand-image-icon')}
            icon={imageExpanded ? 'compress' : 'expand'}
            onClick={() => setImageExpanded(!imageExpanded)}
          />
          {card.img && (
            <img
              src={process.env.REACT_APP_BACK_URL + 'cards/img/' + card.img}
              title={card.name}
              alt={card.name}
            />
          )}
          {!card.img && card.url && (
            <div className={cx('web-container', imageExpanded && 'expanded')}>
              {imageExpanded && <iframe src={card.url} />}
              {!imageExpanded && (
                <Button onClick={() => setImageExpanded(true)} theme={'secondary'}>
                  View mobile preview for {card.url}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
      <div className={cx('content-container', prevExpanded && 'expanded')}>
        <Icon
          className={cx('expand-editor-icon')}
          icon={prevExpanded ? 'compress' : 'expand'}
          onClick={() => setPrevExpanded(!prevExpanded)}
        />
        <p>{card.description && ReactHtmlParser(mdParser.render(card.description))}</p>
      </div>
    </div>
  )
}
