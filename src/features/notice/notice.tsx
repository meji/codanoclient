import React, { useContext, useEffect, useState } from 'react'
import { bind } from '../../utils/bind'
import styles from './notice.module.css'
import { dataContext } from '../providers/dataProvider'

const cx = bind(styles)

export const Notice: React.FC<{ className?: string }> = ({ className, children }) => {
  const { notice } = useContext(dataContext)
  const [active, setActive] = useState(false)
  const [content, setContent] = useState('')

  useEffect(() => {
    if (notice !== '') {
      setContent(notice)
      setActive(true)
      setTimeout(function () {
        setActive(false)
        setContent('')
      }, 1000)
    }
  }, [notice])
  return (
    <p id="notice" className={cx('notice', active && 'active', className)}>
      {' '}
      {content}
      {children}
    </p>
  )
}
