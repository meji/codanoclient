import React from 'react'
import { bind } from '../../utils/bind'
import styles from './footer.module.css'
const cx = bind(styles)

export const Footer: React.FC = () => {
  return (
    <footer className={cx('footer')}>
      <p>Codalia® 2020.</p>
      <p>
        Developed by{' '}
        <a
          rel={'noopener noreferrer'}
          href={'http://meji.es'}
          title={'Developed by Jesus Martín Mejías - Meji.es'}
          target={'_blank'}
        >
          Meji.es
        </a>
      </p>
      <p>
        <a
          rel={'noopener noreferrer'}
          href={'http://meland.es/storybook'}
          title={'Storybook of Codalia'}
          target={'_blank'}
        >
          Storybook
        </a>
      </p>
    </footer>
  )
}
