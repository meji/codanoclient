import React, { useState } from 'react'
import { bind } from '../../../utils/bind'
import styles from './notice.module.css'

const cx = bind(styles)

export const Notice: React.FC<{ className?: string }> = ({ className, children }) => {
  const [hide, setHide] = useState(false)
  setTimeout(function () {
    setHide(true)
  }, 5000)
  return (
    <p id="notice" className={!hide ? cx('notice', className) : cx('notice', 'hide', className)}>
      {children}
    </p>
  )
}
