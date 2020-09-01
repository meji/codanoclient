import React from 'react'
import { CalendarInput } from './calendar-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: CalendarInput
}

const InputDark: React.FC = () => {
  return (
    <span className={'dark'}>
      <CalendarInput />
    </span>
  )
}

export const calendar = () => <InputDark />
