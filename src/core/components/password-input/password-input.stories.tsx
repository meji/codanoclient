import React, {useState} from 'react'
import { PasswordInput } from './password-input'

export default {
  title: 'TextInput',
  component: PasswordInput
}

export const InputWithState: React.FC<{ label:string }> = ({label }) => {
  const [value, setValue] = useState('')
  return (
    <PasswordInput
      value={value}
      label={label}
      onChange={setValue}
    />
  )
}


export const password = () => <InputWithState label={'My input password'}/>

