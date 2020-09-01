import React from 'react'
import { RadioInput } from './radio-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: RadioInput
}

export const radio = () => {
  return (
    <div className={'dark'}>
      <RadioInput value={'Radio1'} label={'Radio1'} name={'Radios'} />
      <RadioInput value={'Radio2'} label={'Radio2'} name={'Radios'} />
      <RadioInput value={'Radio3'} label={'Radio3'} name={'Radios'} />
    </div>
  )
}
