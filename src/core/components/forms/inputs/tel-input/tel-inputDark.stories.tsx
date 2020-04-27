import React from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: TelInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'dark-theme'}>
      <TelInput label={label} required={isRequired} />
    </span>
  )
}

export const phone = () => <InputDark isRequired={false} label={'Phone'} />
