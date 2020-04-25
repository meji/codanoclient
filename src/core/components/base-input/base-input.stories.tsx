import React, { useState } from 'react'
import { BaseInput } from './base-input'

export default {
  title: 'TextInput',
  component: BaseInput
}

const InputStates: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  const [value, setValue] = useState('')
  return <BaseInput value={value} label={label} required={isRequired} onChange={setValue} />
}

export const base = () => <InputStates isRequired={false} label={'My input'} />
export const required = () => <InputStates isRequired label={'My input'} />
