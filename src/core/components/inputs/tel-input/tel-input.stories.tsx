import React, { useState } from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Light/Inputs',
  component: TelInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'light-theme'}>
      <TelInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const phone = () => <InputLight isRequired={false} label={'Phone'} />
