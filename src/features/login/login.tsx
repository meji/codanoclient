import React from 'react'
import { bind } from '../../utils/bind'
import styles from './login.module.css'
import { Button } from '../../core/components/button/button'
import { ShadowBox } from '../../core/components/shadow-box/shadowBox'
import { Header } from '../header/header'
import { Page } from '../../core/components/page/page'
import { LoginForm } from './loginForm'

const cx = bind(styles)

export const Login: React.FC = () => {
  return (
    <>
      <Header></Header>
      <Page>
        <ShadowBox className={'small'}>
          <h1 className={cx('h4')}>
            Login to <span className={'caveat'}>Codalia</span>
          </h1>
          <LoginForm />
          <Button
            theme={'secondary'}
            onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/google')}
            className={cx('transparent')}
          >
            <img
              src="/img/google-icon.svg"
              alt={'Login with Google'}
              title={'Login with Google'}
              width={'20'}
              height={'20'}
            />
            &nbsp;Login Google
          </Button>
          <Button
            theme={'secondary'}
            className={cx('transparent')}
            onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/github')}
          >
            <img
              src="/img/github-icon.svg"
              alt={'Login with Github'}
              title={'Login with Github'}
              width={'20'}
              height={'20'}
            />
            &nbsp;Login Github
          </Button>
        </ShadowBox>
      </Page>
    </>
  )
}
