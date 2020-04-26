import * as React from 'react'
import MarkdownIt from 'markdown-it'
import MdEditor from 'react-markdown-editor-lite'
import 'react-markdown-editor-lite/lib/index.css'
import styles from './mdeditor.module.css'
import { useState } from 'react'
import { bind } from '../../../../utils/bind'
const cx = bind(styles)

// Initialize a markdown parser
const mdParser = new MarkdownIt({
  html: true,
  linkify: true,
  typographer: true
})

export const Mdeditor: React.FC = () => {
  const [content, setContent] = useState('')
  return (
    <div className={cx('mdeditor')}>
      <MdEditor
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
