import React, { useState } from 'react'
import { TextInput } from './text-input'

export default {
  title: 'Input',
  component: TextInput
}

const InputWithState: React.FC<{ isRequired: boolean; label: string }> = ({
  isRequired,
  label
}) => {
  const [value, setValue] = useState('')
  return <TextInput value={value} label={label} required={isRequired} onChange={setValue} />
}

export const textInput = () => <InputWithState isRequired={false} label={'My input'} />
export const required = () => <InputWithState isRequired label={'My input'} />
