import React from 'react'
import { GithubIcon } from '../../../core/components/icon/githubIcon'
import { bind } from '../../../utils/bind'
import styles from './login.module.css'
const cx = bind(styles)

export const Connections: React.FC = () => {
  return (
    <div className={cx('connections')}>
      <span
        onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/google')}
        className={cx('link')}
      >
        <img
          src="/img/google-icon.svg"
          alt={'Login with Google'}
          title={'Login with Google'}
          width={'20'}
          height={'20'}
        />
        &nbsp;With Google
      </span>
      <span
        className={cx('link')}
        onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/github')}
      >
        <GithubIcon />
        &nbsp;With Github
      </span>
    </div>
  )
}
