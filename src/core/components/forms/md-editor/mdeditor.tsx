import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import styles from './mdeditor.module.css'
import 'highlight.js/styles/rainbow.css'
import { useState } from 'react'
import { bind } from '../../../../utils/bind'
import hljs from 'highlight.js'

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

export const Mdeditor: React.FC = () => {
  const myPlugins = ['header', 'fonts', 'link', 'image', 'clear', 'logger', 'mode-toggle']
  const [content, setContent] = useState('')
  return (
    <div className={cx('mdeditor')}>
      <MdEditor
        plugins={myPlugins}
        value=""
        renderHTML={text => mdParser.render(text)}
        onChange={text => setContent(text.text)}
      />
      <p>
        {' '}
        Esto es lo que se guarda:
        {content}
      </p>
    </div>
  )
}
