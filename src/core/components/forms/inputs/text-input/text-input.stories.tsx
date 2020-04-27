import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: TextInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return (
    <span className={'light-theme'}>
      <TextInput value={value} label={label} required={isRequired} onChange={setValue} />
    </span>
  )
}

export const textInput = () => <InputLight isRequired={false} label={'Text'} />
export const required = () => <InputLight isRequired label={'Required'} />
