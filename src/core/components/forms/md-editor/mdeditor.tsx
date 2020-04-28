import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import './mdeditor.css'
import 'highlight.js/styles/rainbow.css'
import { useState } from 'react'
import hljs from 'highlight.js'
import ReactHtmlParser from 'react-html-parser'
import { bind } from '../../../../utils/bind'
import styles from './mdeditor.module.css'
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

export const Mdeditor: React.FC<{ initialText?: string }> = ({ initialText }) => {
  const myPlugins = ['header', 'fonts', 'link', 'clear', 'logger']
  const [content, setContent] = useState({ text: '', html: '' })
  const [visible, setVisible] = useState(false)
  const editor = (
    <MdEditor
      plugins={myPlugins}
      value={content.text}
      renderHTML={text => mdParser.render(text)}
      onChange={content => setContent({ text: content.text, html: content.html })}
      config={{
        view: {
          menu: false,
          md: true,
          html: false,
          fullScreen: false,
          hideMenu: true
        }
      }}
    />
  )

  return (
    <div className="myEditor" onClick={() => setVisible(true)} onBlur={() => setVisible(false)}>
      {!visible && !content.html && initialText && (
        <div className={cx('prev-container')}> initialText</div>
      )}
      {visible ? (
        editor
      ) : (
        <div className={cx('prev-container')}> {ReactHtmlParser(content.html)}</div>
      )}
    </div>
  )
}
