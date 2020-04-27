import React from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: TelInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'light-theme'}>
      <TelInput label={label} required={isRequired} />
    </span>
  )
}

export const phone = () => <InputLight isRequired={false} label={'Phone'} />
