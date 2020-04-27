import React from 'react'
import { CalendarInput } from './calendar-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: CalendarInput
}

const InputLight: React.FC = () => {
  return (
    <span className={'light-theme'}>
      <CalendarInput />
    </span>
  )
}

export const calendar = () => <InputLight />
