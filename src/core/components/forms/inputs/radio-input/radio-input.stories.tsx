import React from 'react'
import { RadioInput } from './radio-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: RadioInput
}

export const radio = () => {
  return (
    <div className={'light'}>
      <RadioInput value={'Radio1'} label={'Radio1'} name={'Radios'} />
      <RadioInput value={'Radio2'} label={'Radio2'} name={'Radios'} />
      <RadioInput value={'Radio3'} label={'Radio3'} name={'Radios'} />
    </div>
  )
}
