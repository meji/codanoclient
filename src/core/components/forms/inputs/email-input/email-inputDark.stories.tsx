import React from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: EmailInput
}

const InputDark: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'dark-theme'}>
      <EmailInput label={label} />
    </span>
  )
}

export const email = () => <InputDark label={'Email'} />
