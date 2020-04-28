import React from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: TelInput
}

const InputLight: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'light-theme'}>
      <TelInput label={label} />
    </span>
  )
}

export const phone = () => <InputLight label={'Phone'} />
