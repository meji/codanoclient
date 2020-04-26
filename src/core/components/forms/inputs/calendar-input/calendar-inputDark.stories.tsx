import React, { useState } from 'react'
import { CalendarInput } from './calendar-input'

export default {
  title: 'Dark/Forms/Inputs',
  component: CalendarInput
}

const InputDark: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <span className={'dark-theme'}>
      <CalendarInput value={value} onChange={setValue} />
    </span>
  )
}

export const calendar = () => <InputDark />
