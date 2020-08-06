import React from 'react'
import { AuthManager } from './features/auth/auth-manager'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute: React.FC<{ path: string; exact: boolean }> = ({
  exact,
  path,
  children,
  ...rest
}) => {
  const authManager = new AuthManager()
  return (
    <Route
      path={`${path}?token=${authManager.authToken()}`}
      exact={exact}
      {...rest}
      render={({ location }) =>
        authManager.authToken() ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location }
            }}
          />
        )
      }
    />
  )
}
