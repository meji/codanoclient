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
  const [multimediaExpanded, setMultimediaExpanded] = useState(false)
  const [contentExpanded, setContentExpanded] = useState(false)
  return (
    <div
      className={cx(
        'preview-container',
        multimediaExpanded && 'multimedia-expanded',
        contentExpanded && 'content-expanded'
      )}
    >
      <Button className={cx('close-preview')} theme={'primary'} onClick={() => closePreview()}>
        Close Card
      </Button>
      {(card.img || card.url) && (
        <div className={cx('multimedia-container')}>
          <Icon
            className={cx('expand-multimedia-icon')}
            icon={multimediaExpanded ? 'compress' : 'expand'}
            onClick={() => setMultimediaExpanded(!multimediaExpanded)}
          />
          {card.img && (
            <img
              src={process.env.REACT_APP_BACK_URL + 'cards/img/' + card.img}
              title={card.name}
              alt={card.name}
            />
          )}
          {!card.img && card.url && (
            <div className={cx('web-container', multimediaExpanded && 'expanded')}>
              {multimediaExpanded && <iframe src={card.url} />}
              {!multimediaExpanded && (
                <Button onClick={() => setMultimediaExpanded(true)} theme={'secondary'}>
                  View mobile preview for {card.url}
                </Button>
              )}
            </div>
          )}
        </div>
      )}
      <div className={cx('content-container')}>
        <Icon
          className={cx('expand-content-icon')}
          icon={contentExpanded ? 'compress' : 'expand'}
          onClick={() => setContentExpanded(!contentExpanded)}
        />
        {card.description ? ReactHtmlParser(mdParser.render(card.description)) : 'Card Empty'}
      </div>
    </div>
  )
}
