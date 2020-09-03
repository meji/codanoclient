import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from '../../routes/routes'
import { Home } from '../../routes/home'
import { Login } from '../user/ui/login'
import { SaveToken } from '../../routes/saveToken'
import { PrivateRoute } from '../../routes/private-route'
import { Boards } from '../../routes/boards'
import { Board } from '../board/ui/board'
import React, { Suspense, useContext } from 'react'
import { ThemeContext } from '../providers/themeProvider'
import { bind } from '../../utils/bind'
import styles from './main.module.css'

const cx = bind(styles)

export const Main: React.FC = ({ children }) => {
  const { theme } = useContext(ThemeContext)
  return (
    <main id="wrapper" className={cx(theme)}>
      <Router>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.login} exact>
              <Login />
            </Route>
            <Route path={routes.signup} exact>
              <Login />
            </Route>
            <Route path={routes.savetoken} exact>
              <SaveToken />
            </Route>
            <PrivateRoute path={routes.boards} exact>
              <Boards />
            </PrivateRoute>
            <PrivateRoute path={routes.board} exact>
              <Board />
            </PrivateRoute>
          </Switch>
        </Suspense>
      </Router>
      {children}
    </main>
  )
}
