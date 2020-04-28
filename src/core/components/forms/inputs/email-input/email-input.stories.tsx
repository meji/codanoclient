import React from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: EmailInput
}

const InputLight: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'light-theme'}>
      <EmailInput label={label} />
    </span>
  )
}

export const email = () => <InputLight label={'Email'} />
