import React from 'react'
import { UrlInput } from './url-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: UrlInput
}

const InputLight: React.FC<{ isRequired: boolean; label: string }> = ({ isRequired, label }) => {
  return (
    <span className={'light'}>
      <UrlInput label={label} required={isRequired} />
    </span>
  )
}

export const url = () => <InputLight isRequired={true} label={'Url'} />
