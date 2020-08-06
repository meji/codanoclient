import React, { useState, Suspense } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { routes } from './routes'
import { Button } from './core/components/button/button'
import { Login } from './routes/login'
import { PrivateRoute } from './private-route'
import { Boards } from './routes/boards'
import { Home } from './routes/home'
import { SaveToken } from './routes/saveToken'
import { Board } from './features/board/ui/board'

export const App: React.FC = () => {
  const [theme, setTheme] = useState('light-theme')
  return (
    <Router>
      <Suspense fallback={<h1>Loading</h1>}>
        <div id="wrapper" className={theme}>
          <Button
            theme={'primary'}
            onClick={() => setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')}
          >
            Cambiar tema
          </Button>
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
        </div>
      </Suspense>
    </Router>
  )
}
