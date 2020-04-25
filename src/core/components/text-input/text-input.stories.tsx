import React, {useState} from 'react'
import { TextInput } from './text-input'

export default {
  title: 'TextInput',
  component: TextInput
}

const InputWithState: React.FC<{ isRequired: boolean, label:string }> = ({ isRequired , label}) => {
  const [value, setValue] = useState('')
  return (
    <TextInput
      value={value}
      label={label}
      required={isRequired}
      onChange={setValue}
    />
  )
}

export const base = () => <InputWithState isRequired={false} label={'My input'}/>
export const focused = () => <InputWithState  isRequired={false} label={'My input'}/>
export const error = () => <InputWithState isRequired label={'My input*'}  />

