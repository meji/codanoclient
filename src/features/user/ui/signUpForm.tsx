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
const cx = bind(styles)

export const SignUpForm: React.FC = () => {
  const loginService = new UserHttpService()
  const [values, setValues] = useState({ name: '', email: '', password: '' })
  const { setNotice } = useContext(dataContext)

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    console.log('values', values)
    loginService
      .signup(values)
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
    <>
      <h1 className={cx('h4')}>
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
      <Button
        theme={'secondary'}
        onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/google')}
        className={cx('transparent')}
      >
        <img
          src="/img/google-icon.svg"
          alt={'Login with Google'}
          title={'Login with Google'}
          width={'20'}
          height={'20'}
        />
        &nbsp;Signup Google
      </Button>
      <Button
        theme={'secondary'}
        className={cx('transparent')}
        onClick={() => window.location.assign(process.env.REACT_APP_BACK_URL + 'auth/github')}
      >
        <img
          src="/img/github-icon.svg"
          alt={'Login with Github'}
          title={'Login with Github'}
          width={'20'}
          height={'20'}
        />
        &nbsp;Signup Github
      </Button>
    </>
  )
}
