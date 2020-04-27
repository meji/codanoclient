import React, { useState } from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: PasswordInput
}

const InputDArk: React.FC<{ label: string }> = ({ label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'dark-theme'}>
      <PasswordInput value={value} label={label} onChange={setValue} />
    </span>
  )
}

export const password = () => <InputDArk label={'Password'} />
