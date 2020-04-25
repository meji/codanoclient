import React, { useState } from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Dark/Inputs',
  component: TelInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'dark-theme'}>
      <TelInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const phone = () => <InputDark isRequired={false} label={'Phone'} />
