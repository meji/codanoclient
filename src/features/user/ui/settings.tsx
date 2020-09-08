import React, { useContext, useState } from 'react'
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
const cx = bind(styles)

export const Settings: React.FC = () => {
  const userData = useContext(dataContext)
  const userService = new UserHttpService()

  const initialPasswordData = {
    editing: false,
    password1: '',
    password2: ''
    // oldPassword: ''
  }
  const [passwordData, setPasswordData] = useState(initialPasswordData)
  const changeName = (e: any) => {
    console.log(e.target.value)
  }
  const changeEmail = (e: any) => {
    console.log(e.target.value)
  }
  const changeSecondName = (e: any) => {
    console.log(e.target.value)
  }
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
        <h1>Hello {userData.user.name}</h1>
        <ShadowBox size={'small'}>
          <h2 className={cx('mtno')}>Settings</h2>
          <div className={cx('data')}>
            <p>
              <strong>Name:</strong>{' '}
              <Editingtitle
                handleKeydown={e => changeName(e)}
                value={userData.user.name ? userData.user.name : 'Click to enter your name'}
              />
            </p>
            <p>
              <strong>Second Name:</strong>{' '}
              <Editingtitle
                handleKeydown={e => changeSecondName(e)}
                value={
                  userData.user.secondName
                    ? userData.user.secondName
                    : 'Click to enter you second name'
                }
              />
            </p>
            <p>
              <>
                <span>
                  <strong>Email</strong> ({userData.user.status}):
                </span>
                <Editingtitle
                  handleKeydown={e => changeEmail(e)}
                  value={userData.user.email ? userData.user.email : 'Click to enter your email'}
                />
              </>
            </p>
            {!passwordData.editing && (
              <Button
                theme={'primary'}
                onClick={() => setPasswordData({ ...initialPasswordData, editing: true })}
              >
                Change Password
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
          </div>
        </ShadowBox>
      </Page>
    </>
  )
}
