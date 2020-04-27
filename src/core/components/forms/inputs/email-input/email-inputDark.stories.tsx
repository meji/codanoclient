import React, { useState } from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: EmailInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'dark-theme'}>
      <EmailInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const email = () => <InputDark isRequired={false} label={'Email'} />
