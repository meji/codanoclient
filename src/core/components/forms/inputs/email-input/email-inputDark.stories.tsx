import React from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: EmailInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'dark-theme'}>
      <EmailInput label={label} required={isRequired} />
    </span>
  )
}

export const email = () => <InputDark isRequired={false} label={'Email'} />
