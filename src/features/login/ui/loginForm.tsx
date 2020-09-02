import React, { FormEvent, useState } from 'react'
import { PasswordInput } from '../../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../../core/components/forms/rows/formRow'
import { Button } from '../../../core/components/button/button'
import { EmailInput } from '../../../core/components/forms/inputs/email-input/email-input'
import { LoginHttpService } from '../infrastructure/loginHttpService'
import { bind } from '../../../utils/bind'
import styles from './login.module.css'
import { Notice } from '../../../core/components/notice/notice'
const cx = bind(styles)

export const LoginForm: React.FC = () => {
  const loginService = new LoginHttpService()
  const [values, setValues] = useState({ email: '', password: '' })
  const [noticeContent, setNoticeContent] = useState('')
  const destroyNotice = () => {
    setTimeout(() => {
      setNoticeContent('')
    }, 6000)
  }
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    loginService
      .login(values)
      .then(response => {
        const user = JSON.stringify(response.data.user.name)
        setNoticeContent(`Welcome ${user}, please confirm your email to login`)
        destroyNotice()
      })
      .catch(error => {
        setNoticeContent(error.response.data.message)
        console.log(error.response.data.message)
        destroyNotice()
      })
    e.preventDefault()
  }
  return (
    <>
      {' '}
      {noticeContent && <Notice content={noticeContent}></Notice>}
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
