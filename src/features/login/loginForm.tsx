import React, { FormEvent, useState } from 'react'
import { PasswordInput } from '../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../core/components/forms/rows/formRow'
import { Button } from '../../core/components/button/button'
import { http } from '../../core/http/http'
import { EmailInput } from '../../core/components/forms/inputs/email-input/email-input'
import { bind } from '../../utils/bind'
import styles from './login.module.css'
const cx = bind(styles)

export const LoginForm: React.FC = () => {
  const [values, setValues] = useState({})
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    http(process.env.REACT_APP_BACK_URL + 'auth/login', {
      method: 'POST',
      data: { values }
    })
      .then(response => console.log(response.data))
      .catch(error => console.log(error))
    return false
  }
  return (
    <>
      <h1 className={cx('h4')}>
        Login to <span className={'caveat'}>Codalia</span>
      </h1>
      <form onSubmit={e => handleSubmit(e)}>
        <FormRow>
          <EmailInput
            placeholder={'Email'}
            onChange={e => setValues({ ...values, email: e.value })}
          />
        </FormRow>
        <FormRow>
          <PasswordInput
            placeholder={'Contraseña'}
            onChange={e => setValues({ ...values, password: e.value })}
          />
        </FormRow>
        <FormRow className="full-button">
          <Button submit={true} theme={'primary'} size={'l'}>
            Login
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
        &nbsp;Login Google
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
        &nbsp;Login Github
      </Button>
    </>
  )
}
