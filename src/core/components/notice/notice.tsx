import React, { useEffect, useState } from 'react'
import { bind } from '../../../utils/bind'
import styles from './notice.module.css'

const cx = bind(styles)

export const Notice: React.FC<{ className?: string; content: string }> = ({
  className,
  content,
  children
}) => {
  const [contentIn, setContentIn] = useState(content)
  useEffect(() => {
    setContentIn(content)
    setTimeout(function () {
      setContentIn('')
    }, 1000)
  }, [content])
  return (
    <p
      id="notice"
      className={
        contentIn ? cx('notice', 'active', className) : cx('notice', 'inactive', className)
      }
    >
      {' '}
      {contentIn}
      {children}
    </p>
  )
}
