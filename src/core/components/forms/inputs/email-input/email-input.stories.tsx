import React, { useState } from 'react'
import { EmailInput } from './email-input'

export default {
  title: 'Light/Forms/Inputs',
  component: EmailInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'light-theme'}>
      <EmailInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const email = () => <InputLight isRequired={false} label={'Email'} />
