import React, { useState } from 'react'
import { CalendarInput } from './calendar-input'

export default {
  title: 'Light/Forms/Inputs',
  component: CalendarInput
}

const InputLight: React.FC = () => {
  const [value, setValue] = useState('')
  return (
    <span className={'light-theme'}>
      <CalendarInput value={value} onChange={setValue} />
    </span>
  )
}

export const calendar = () => <InputLight />
