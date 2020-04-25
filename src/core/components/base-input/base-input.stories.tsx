import React, {useState} from 'react'
import { BaseInput } from './base-input'

export default {
  title: 'TextInput',
  component: BaseInput
}

const InputWithState: React.FC<{ isRequired: boolean, label:string}> = ({ isRequired , label}) => {
  const [value, setValue] = useState('')
  return (
    <BaseInput
      value={value}
      label={label}
      required={isRequired}
      onChange={setValue}
    />
  )
}

export const base = () => <InputWithState isRequired={false}  label={'My input'}/>
export const focused = () => <InputWithState  isRequired={false} label={'My input'}/>
export const error = () => <InputWithState isRequired label={'My input*'} />

