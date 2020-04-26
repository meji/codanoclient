import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'Dark/Forms/Inputs',
  component: TextInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'dark-theme'}>
      <TextInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const textInputDark = () => <InputDark isRequired={false} label={'My input'} />
export const requiredDark = () => <InputDark isRequired label={'My input'} />
