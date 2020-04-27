import React from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: EmailInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'light-theme'}>
      <EmailInput label={label} required={isRequired} />
    </span>
  )
}

export const email = () => <InputLight isRequired={false} label={'Email'} />
