import React from 'react'
import { ShadowBox } from '../../core/components/shadow-box/shadowBox'
import { Header } from '../header/header'
import { Page } from '../../core/components/page/page'
import { LoginForm } from './loginForm'
import { SignUpForm } from './signUpForm'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import { routes } from '../../routes'
import { Notice } from '../../core/components/notice/notice'

export const Login: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const active = params.get('validated')

  return (
    <>
      <Header></Header>
      <Page>
        {active === 'ok' && <Notice>Your email has been validated, please make login</Notice>}
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
