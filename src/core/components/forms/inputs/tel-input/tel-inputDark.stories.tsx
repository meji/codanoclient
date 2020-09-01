import React from 'react'
import { TelInput } from './tel-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: TelInput
}

const InputDark: React.FC<{ label: string }> = ({ label }) => {
  return (
    <span className={'dark'}>
      <TelInput label={label} />
    </span>
  )
}

export const phone = () => <InputDark label={'Phone'} />
