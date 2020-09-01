import React from 'react'
import { TextInput } from '../../core/components/forms/inputs/text-input/text-input'
import { PasswordInput } from '../../core/components/forms/inputs/password-input/password-input'
import { FormRow } from '../../core/components/forms/rows/formRow'
import { Button } from '../../core/components/button/button'

export const LoginForm: React.FC = () => {
  return (
    <form>
      <FormRow>
        <TextInput placeholder={'Nombre'} />
      </FormRow>
      <FormRow>
        <PasswordInput placeholder={'Contraseña'} />
      </FormRow>
      <FormRow className="full-button">
        <Button submit={true} theme={'primary'} size={'l'}>
          Login
        </Button>
      </FormRow>
    </form>
  )
}
