import React, { useEffect, useState } from 'react'
import { ShadowBox } from '../../../core/components/shadow-box/shadowBox'
import { Header } from '../../header/header'
import { Page } from '../../../core/components/page/page'
import { LoginForm } from './loginForm'
import { SignUpForm } from './signUpForm'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { routes } from '../../../routes'
import { Notice } from '../../../core/components/notice/notice'

export const Login: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const active = params.get('validated')
  const [noticeContent, setNoticeContent] = useState('')
  const destroyNotice = () => {
    setTimeout(() => {
      setNoticeContent('')
    }, 6000)
  }
  useEffect(() => {
    setNoticeContent('The email has been validated, please do login')
    destroyNotice()
  }, [active])

  return (
    <>
      <Header></Header>
      <Page>
        {active === 'ok' && <Notice content={noticeContent}></Notice>}
        <ShadowBox className={'small'}>
          <Router>
            <Switch>
              <Route path={routes.login} exact>
                <LoginForm />
                <p>
                  If you want to create an account <Link to={'/auth/signup'}>Sign Up</Link>
                </p>
              </Route>
              <Route path={routes.signup} exact>
                <SignUpForm />
                <p>
                  Do you have an account?, <Link to={'/auth/login'}>Login</Link>
                </p>
              </Route>
            </Switch>
          </Router>
        </ShadowBox>
      </Page>
    </>
  )
}
