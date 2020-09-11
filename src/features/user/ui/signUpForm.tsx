import React, { FormEvent, useContext, useState } from 'react'
import { PasswordInput } from '../../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../../core/components/forms/rows/formRow'
import { Button } from '../../../core/components/button/button'
import { EmailInput } from '../../../core/components/forms/inputs/email-input/email-input'
import { TextInput } from '../../../core/components/forms/inputs/text-input/text-input'
import { bind } from '../../../utils/bind'
import styles from './login.module.css'
import { UserHttpService } from '../infrastructure/userHttpService'
import { dataContext } from '../../providers/dataProvider'
import { ThemeContext } from '../../providers/themeProvider'
import { User } from '../domain/user'
import { Link } from 'react-router-dom'
import { Connections } from './connections'

const cx = bind(styles)

export const SignUpForm: React.FC = () => {
  const loginService = new UserHttpService()
  const [values, setValues] = useState<User>({} as User)
  const { setNotice } = useContext(dataContext)
  const { theme } = useContext(ThemeContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    loginService
      .signup({ ...values, theme: theme })
      .then(response => {
        const user = JSON.stringify(response.data.user.name)
        setNotice(`Welcome ${user}, please confirm your email to login`)
      })
      .catch(error => {
        setNotice(error.response.data.message)
      })
    e.preventDefault()
  }
  return (
    <div className={cx('signup')}>
      <h1>
        Sign Up in <span className={'caveat'}>Codalia</span>
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <FormRow>
          <TextInput
            placeholder={'Name'}
            onChange={e => setValues({ ...values, name: e.target.value })}
          />
        </FormRow>
        <FormRow>
          <TextInput
            placeholder={'Second Name'}
            onChange={e => setValues({ ...values, secondName: e.target.value })}
          />
        </FormRow>
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
            Sign Up
          </Button>
        </FormRow>
      </form>
      <p>
        Do you have an account?, <Link to={'/auth/login'}>Login</Link>
      </p>
      <Connections />
    </div>
  )
}
