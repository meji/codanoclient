import React from 'react'
import { UrlInput } from './url-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: UrlInput
}

const InputDark: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'dark-theme'}>
      <UrlInput label={label} required={isRequired} />
    </span>
  )
}

export const url = () => <InputDark isRequired={false} label={'Url'} />
