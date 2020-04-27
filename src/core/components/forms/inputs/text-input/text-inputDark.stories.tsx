import React from 'react'
import { TextInput } from './text-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: TextInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'dark-theme'}>
      <TextInput label={label} required={isRequired} />
    </span>
  )
}

export const textInput = () => <InputDark isRequired={false} label={'Text'} />
export const required = () => <InputDark isRequired label={'Required'} />
