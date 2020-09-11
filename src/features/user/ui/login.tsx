import React, { useContext, useEffect } from 'react'
import { ShadowBox } from '../../../core/components/shadow-box/shadowBox'
import { Page } from '../../../core/components/page/page'
import { LoginForm } from './loginForm'
import { SignUpForm } from './signUpForm'
import { Route, Switch } from 'react-router-dom'
import { routes } from '../../../routes/routes'
import { dataContext } from '../../providers/dataProvider'

export const Login: React.FC = () => {
  const querystring = window.location.search
  const params = new URLSearchParams(querystring)
  const active = params.get('validated')
  const { setNotice } = useContext(dataContext)

  useEffect(() => {
    active && setNotice('The email has been validated, login to enter')
  }, [active, setNotice])

  return (
    <>
      <Page flex={'center'} size={'l'} className={'login'}>
        <ShadowBox size={'small'}>
          <Switch>
            <Route path={routes.login} exact>
              <LoginForm />
            </Route>
            <Route path={routes.signup} exact>
              <SignUpForm />
            </Route>
          </Switch>
        </ShadowBox>
      </Page>
    </>
  )
}
