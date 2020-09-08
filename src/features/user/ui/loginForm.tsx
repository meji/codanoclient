import React, { FormEvent, useContext, useState } from 'react'
import { PasswordInput } from '../../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../../core/components/forms/rows/formRow'
import { Button } from '../../../core/components/button/button'
import { EmailInput } from '../../../core/components/forms/inputs/email-input/email-input'
import { UserHttpService } from '../infrastructure/userHttpService'
import { bind } from '../../../utils/bind'
import styles from './login.module.css'
import { dataContext } from '../../providers/dataProvider'
import { GithubIcon } from '../../../core/components/icon/githubIcon'
const cx = bind(styles)

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
        <GithubIcon />
        &nbsp;Login Github
      </Button>
    </>
  )
}
