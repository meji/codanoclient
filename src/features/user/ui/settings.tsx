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
import { TextInput } from '../../../core/components/forms/inputs/text-input/text-input'
import { FormRow } from '../../../core/components/forms/rows/formRow'
const cx = bind(styles)

export const Settings: React.FC = () => {
  const userData = useContext(dataContext)
  const [changePassword, setChangePassword] = useState(false)
  const changeName = (e: any) => {
    console.log(e.target.value)
  }
  const changeEmail = (e: any) => {
    console.log(e.target.value)
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
              {userData.user.name && (
                <Editingtitle handleKeydown={e => changeName(e)} value={userData.user.name} />
              )}
            </p>
            <p>
              {userData.user.email && (
                <>
                  <span>
                    <strong>Email</strong> ({userData.user.status}):
                  </span>
                  <Editingtitle handleKeydown={e => changeEmail(e)} value={userData.user.email} />
                </>
              )}
            </p>
            {!changePassword && (
              <Button theme={'primary'} onClick={() => setChangePassword(true)}>
                Change Password
              </Button>
            )}
            {changePassword && (
              <Form>
                <h3 className={cx('mtno')}>Change Password</h3>
                <FormRow>
                  <TextInput placeholder={'Old Password'} />
                </FormRow>
                <FormRow>
                  <TextInput placeholder={'New Password'} />
                </FormRow>
                <FormRow>
                  <TextInput placeholder={'Repeat new Password'} />
                </FormRow>
                <FormRow>
                  <Button theme={'primary'} submit={true}>
                    Save
                  </Button>
                  <Button theme={'primary'} onClick={() => setChangePassword(false)}>
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
