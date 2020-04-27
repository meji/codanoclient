import React from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: PasswordInput
}

const InputLight: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'light-theme'}>
      <PasswordInput label={label} />
    </span>
  )
}

export const password = () => <InputLight label={'Password'} />
