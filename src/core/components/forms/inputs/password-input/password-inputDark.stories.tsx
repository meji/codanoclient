import React from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: PasswordInput
}

const InputDArk: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'dark'}>
      <PasswordInput label={label} />
    </span>
  )
}

export const password = () => <InputDArk label={'Password'} />
