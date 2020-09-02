import React, { useState } from 'react'
import { ShadowBox } from '../../core/components/shadow-box/shadowBox'
import { Header } from '../header/header'
import { Page } from '../../core/components/page/page'
import { LoginForm } from './loginForm'
import { SignUpForm } from './signUpForm'

export const Login: React.FC = () => {
  const [showLogin, setShowSignUp] = useState(false)
  return (
    <>
      <Header></Header>
      <Page>
        <ShadowBox className={'small'}>
          {showLogin && (
            <>
              <LoginForm />
              <p>
                If you want to create an account{' '}
                <strong className={'link'} onClick={() => setShowSignUp(!showLogin)}>
                  Sign Up
                </strong>
              </p>
            </>
          )}
          {!showLogin && (
            <>
              <SignUpForm />
              <p>
                Do you have an account?,{' '}
                <strong className={'link'} onClick={() => setShowSignUp(!showLogin)}>
                  Login
                </strong>
              </p>
            </>
          )}
        </ShadowBox>
      </Page>
    </>
  )
}
