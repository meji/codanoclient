import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from '../routes'
import { Home } from './home'
import { Login } from './login'
import { SaveToken } from './saveToken'
import { PrivateRoute } from '../private-route'
import { Boards } from './boards'
import { Board } from '../features/board/ui/board'
import React, { Suspense, useContext } from 'react'
import { ThemeContext } from '../features/contexts/themeProvider'

export const Main: React.FC = () => {
  const { theme } = useContext(ThemeContext)
  return (
    <div id="wrapper" className={theme}>
      <Router>
        <Suspense fallback={<h1>Loading</h1>}>
          <Switch>
            <Route path={routes.home} exact>
              <Home />
            </Route>
            <Route path={routes.login} exact>
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
    </div>
  )
}
