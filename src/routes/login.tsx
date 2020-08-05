import React from 'react'
import { Button } from '../core/components/button/button'

export const Login: React.FC = () => {
  return (
    <>
      <h1>Login</h1>
      <Button
        onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/google')}
      >
        Login Google
      </Button>
    </>
  )
}
