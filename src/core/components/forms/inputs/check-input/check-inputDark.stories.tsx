import React from 'react'
import { CheckInput } from './check-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CheckInput
}

export const checkbox = () => {
  return (
    <div className={'dark-theme'}>
      <CheckInput value={'Check1'} label={'Check1'} name={'Checks'} />
      <CheckInput value={'Check2'} label={'Check2'} name={'Checks'} />
      <CheckInput value={'Check3'} label={'Check3'} name={'Checks'} />
    </div>
  )
}
