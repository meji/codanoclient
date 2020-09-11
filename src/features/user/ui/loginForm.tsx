import React, { FormEvent, useContext, useState } from 'react'
import { PasswordInput } from '../../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../../core/components/forms/rows/formRow'
import { Button } from '../../../core/components/button/button'
import { EmailInput } from '../../../core/components/forms/inputs/email-input/email-input'
import { UserHttpService } from '../infrastructure/userHttpService'
import { dataContext } from '../../providers/dataProvider'
import { Link } from 'react-router-dom'
import { Connections } from './connections'

export const LoginForm: React.FC = () => {
  const userService = new UserHttpService()
  const [values, setValues] = useState({ email: '', password: '' })
  const { setNotice } = useContext(dataContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    userService
      .login(values)
      .then(response => {
        return window.location.assign(response.data.redirect)
      })
      .catch(error => {
        setNotice('Wrong credentials')
        console.log(error.response)
      })
    e.preventDefault()
  }
  return (
    <>
      <h1>
        Login to <span className={'caveat'}>Codalia</span>
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <FormRow>
          <EmailInput
            placeholder={'Email'}
            onChange={e => setValues({ ...values, email: e.target.value })}
          />
        </FormRow>
        <FormRow>
          <PasswordInput
            placeholder={'Contraseña'}
            onChange={e => setValues({ ...values, password: e.target.value })}
          />
        </FormRow>
        <FormRow className="full-button">
          <Button submit={true} theme={'primary'} size={'l'}>
            Login
          </Button>
        </FormRow>
      </form>
      <p>
        <Link to={'/auth/signup'}>Sign Up</Link> to create an account
      </p>
      <Connections />
    </>
  )
}
