import React, { useState } from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: PasswordInput
}

const InputLight: React.FC<{ label: string }> = ({ label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'light-theme'}>
      <PasswordInput value={value} label={label} onChange={setValue} />
    </span>
  )
}

export const password = () => <InputLight label={'Password'} />
