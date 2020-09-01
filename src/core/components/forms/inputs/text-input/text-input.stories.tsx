import React from 'react'
import { TextInput } from './text-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: TextInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'light'}>
      <TextInput label={label} required={isRequired} />
    </span>
  )
}

export const textInput = () => <InputLight isRequired={false} label={'Text'} />
export const required = () => <InputLight isRequired label={'Required'} />
