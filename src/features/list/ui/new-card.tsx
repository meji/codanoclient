import React, { useState } from 'react'
import { Button } from '../../../core/components/button/button'
import styles from './card-list.module.css'
import { bind } from '../../../utils/bind'
const cx = bind(styles)

export const AddNewCard: React.FC<{ visibleContainer: Boolean }> = ({ visibleContainer }) => {
  const [visible, setVisible] = useState(false)
  return (
    <div
      className={
        visibleContainer
          ? visible
            ? cx('new-card-container', 'visible', 'with-buttons')
            : cx('new-card-container', 'visible')
          : cx('new-card-container')
      }
      onClick={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {visible && (
        <>
          <Button theme={'transparent'} icon={'id-card'} />
          <Button theme={'transparent'} icon={'link'} />
          <Button theme={'transparent'} icon={'code'} />
          <Button theme={'transparent'} icon={'sticky-note'} />
        </>
      )}
      {!visible && <p className={cx('add-button', 'link')}>+ Add Card</p>}
    </div>
  )
}
