import React, { useState } from 'react'
import { PasswordInput } from '../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../core/components/forms/rows/formRow'
import { Button } from '../../core/components/button/button'
import { http } from '../../core/http/http'
import { EmailInput } from '../../core/components/forms/inputs/email-input/email-input'
import { TextInput } from '../../core/components/forms/inputs/text-input/text-input'
import { bind } from '../../utils/bind'
import styles from './login.module.css'
const cx = bind(styles)

export const SignUpForm: React.FC = () => {
  const [values, setValues] = useState({})
  const handleSubmit = (values: any) => {
    http(process.env.REACT_APP_BACK_URL + 'auth/login', {
      data: { values }
    }).then(response => console.log(response))
    return false
  }
  return (
    <>
      <h1 className={cx('h4')}>
        Sign Up in <span className={'caveat'}>Codalia</span>
      </h1>
      <form onSubmit={() => handleSubmit(values)}>
        <FormRow>
          <TextInput placeholder={'Name'} onChange={e => setValues({ ...values, name: e.value })} />
        </FormRow>
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
