import React from 'react'
import { CheckInput } from './check-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CheckInput
}

export const checkbox = () => {
  return (
    <div className={'light-theme'}>
      <CheckInput value={'Check1'} label={'Check1'} name={'Checks'} />
      <CheckInput value={'Check2'} label={'Check2'} name={'Checks'} />
      <CheckInput value={'Check3'} label={'Check3'} name={'Checks'} />
    </div>
  )
}
