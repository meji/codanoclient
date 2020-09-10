import React, { useContext, useEffect, useState } from 'react'
import { ShadowBox } from '../../../core/components/shadow-box/shadowBox'
import { Page } from '../../../core/components/page/page'
import { Notice } from '../../notice/notice'
import { dataContext } from '../../providers/dataProvider'
import { Editingtitle } from '../../../core/components/forms/editing-title/editingTitle'
import { bind } from '../../../utils/bind'
import styles from '../../header/header.module.css'
import { Button } from '../../../core/components/button/button'
import { Form } from '../../../core/components/forms/forms/form'
import { FormRow } from '../../../core/components/forms/rows/formRow'
import { PasswordInput } from '../../../core/components/forms/inputs/password-input/password-input'
import { UserHttpService } from '../infrastructure/userHttpService'
import { User } from '../domain/user'
import { Icon } from '../../../core/components/icon/icon'
import { GithubIcon } from '../../../core/components/icon/githubIcon'
const cx = bind(styles)

export const Settings: React.FC = () => {
  const initialPasswordData = {
    editing: false,
    password1: '',
    password2: ''
  }
  const userData = useContext(dataContext)
  const [user, setUser] = useState<User>(userData.user)
  const userService = new UserHttpService()
  const [passwordData, setPasswordData] = useState(initialPasswordData)
  useEffect(() => {
    user !== userData.user &&
      userService.upDateUser(user).then(() => userData.setNotice('Settings updated'))
  }, [user])
  useEffect(() => {
    setUser(userData.user)
  }, [userData.user])

  const changePassword = (e: React.FormEvent<HTMLFormElement>) => {
    if (passwordData.password1 !== passwordData.password2) {
      userData.setNotice("Passwords doesn't match")
    } else {
      userService.upDateUser({ ...userData.user, password: passwordData.password2 }).then(() => {
        userData.setNotice('Password Changed')
        setPasswordData(initialPasswordData)
      })
    }
    e.preventDefault()
  }
  return (
    <>
      <Notice />
      <Page flex={'center'} size={'l'}>
        {/*<h1>Hello {userData.user.name}</h1>*/}
        <ShadowBox size={'small'}>
          <h1 className={cx('mtno')}>Settings</h1>
          <div className={cx('data')}>
            <p>
              <strong>Name:</strong>{' '}
              <Editingtitle
                handleKeydown={e => setUser({ ...user, name: e.target.value })}
                value={user.name ? user.name : 'Click to enter your name'}
              />
            </p>
            <p>
              <strong>Second Name:</strong>{' '}
              <Editingtitle
                handleKeydown={e => setUser({ ...user, secondName: e.target.value })}
                value={user.secondName ? user.secondName : 'Click to enter you second name'}
              />
            </p>
            <p>
              <>
                <span>
                  <strong>Email</strong> ({user.status}):
                </span>
                {(user.googleId || user.gitHubId) && <span>{user.email}</span>}
                {!user.googleId && !user.gitHubId && (
                  <Editingtitle
                    handleKeydown={e => setUser({ ...user, email: e.target.value })}
                    value={user.email ? user.email : 'Click to enter your email'}
                  />
                )}
              </>
            </p>
            {!passwordData.editing && (
              <Button
                theme={'primary'}
                onClick={() => setPasswordData({ ...initialPasswordData, editing: true })}
              >
                {user.password ? 'Change Password' : 'Add Password'}
              </Button>
            )}
            {passwordData.editing && (
              <Form onSubmit={e => changePassword(e)}>
                <h3 className={cx('mtno')}>Change Password</h3>
                {/*<FormRow>*/}
                {/*  <PasswordInput*/}
                {/*    placeholder={'Old Password'}*/}
                {/*    onChange={e =>*/}
                {/*      setPasswordData({ ...passwordData, oldPassword: e.target.value })*/}
                {/*    }*/}
                {/*  />*/}
                {/*</FormRow>*/}
                <FormRow>
                  <PasswordInput
                    placeholder={'New Password'}
                    onChange={e => setPasswordData({ ...passwordData, password1: e.target.value })}
                  />
                </FormRow>
                <FormRow>
                  <PasswordInput
                    placeholder={'Repeat new Password'}
                    onChange={e => setPasswordData({ ...passwordData, password2: e.target.value })}
                  />
                </FormRow>
                <FormRow>
                  <Button theme={'primary'} submit={true}>
                    Save
                  </Button>
                  <Button theme={'primary'} onClick={() => setPasswordData(initialPasswordData)}>
                    Cancel
                  </Button>
                </FormRow>
              </Form>
            )}
            <p className={cx('external-login')}>
              Linked Accounts:{' '}
              {user.googleId ? (
                <Icon image={'/img/google-icon.svg'} />
              ) : (
                <a
                  href={process.env.REACT_APP_BACK_URL + 'auth/google'}
                  title={'link google account'}
                >
                  <Icon image={'/img/google-icon.svg'} />
                </a>
              )}{' '}
              {user.gitHubId ? (
                <GithubIcon />
              ) : (
                <a
                  href={process.env.REACT_APP_BACK_URL + 'auth/gitHub'}
                  title={'link gitHub account'}
                >
                  {' '}
                  <GithubIcon />
                </a>
              )}
            </p>
          </div>
        </ShadowBox>
      </Page>
    </>
  )
}
