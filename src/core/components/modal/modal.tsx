import React, { useState } from 'react'
import { bind } from '../../../utils/bind'
import styles from './modal.module.css'
import { Icon } from '../icon/icon'
const cx = bind(styles)

export const Modal: React.FC<{ isVisible?: boolean; onClose?: () => void }> = ({
  isVisible,
  onClose,
  children
}) => {
  const [visible, setVisible] = useState(isVisible)
  return (
    <>
      {visible && (
        <div className={cx('modal-container')}>
          <div className={cx('modal-content')}>
            <Icon
              icon={'times'}
              className={cx('close-modal')}
              onClick={() => {
                setVisible(false)
                onClose && onClose()
              }}
            />
            {children}
          </div>
        </div>
      )}
    </>
  )
}
