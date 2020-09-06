import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import './mdeditor.css'
import 'highlight.js/styles/rainbow.css'
import { useEffect, useRef, useState } from 'react'
import hljs from 'highlight.js'
import ReactHtmlParser from 'react-html-parser'
import { bind } from '../../../../utils/bind'
import styles from './myMdEditor.module.css'
const cx = bind(styles)

// Initialize a markdown parser
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

export const MyMdEditor: React.FC<{
  initialText?: string
  callback?: (content: any) => void
  showContent?: boolean
}> = ({ initialText, showContent, callback }) => {
  const divRef = useRef<HTMLDivElement>(null)
  const myPlugins = ['header', 'fonts', 'link', 'clear', 'logger']
  const [content, setContent] = useState({ text: initialText, html: '' })
  const [showContentIn, setShowContentIn] = useState(showContent)
  useEffect(() => {
    setShowContentIn(showContent)
  }, [showContent])

  return (
    <div ref={divRef} className={cx('myEditor', showContentIn && 'unfolded')}>
      <MdEditor
        plugins={myPlugins}
        value={content.text && content.text}
        renderHTML={text => mdParser.render(text)}
        onChange={content => {
          setContent({ text: content.text, html: content.html })
          callback && callback(content)
        }}
        config={{
          view: {
            menu: true,
            md: true,
            html: false,
            fullScreen: false,
            hideMenu: false
          }
        }}
      />
      <p className={cx('notice')}>
        This is a
        <a
          href={'https://www.markdownguide.org/getting-started/'}
          title={'link to MarkDown documentation'}
          target={'_blank'}
          rel="noopener noreferrer"
        >
          Markdown
        </a>
        in this editor
      </p>
      {showContentIn && (
        <div className={cx('prev-container')}>
          {content.text && ReactHtmlParser(mdParser.render(content.text))}
        </div>
      )}
    </div>
  )
}
