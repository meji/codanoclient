import React from 'react'
import { Select } from './select'

export default {
  title: 'Light/Forms/Select',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: Select
}

export const select = () => {
  const optionTags = [
    { value: 'option1', text: 'Select' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ]
  return (
    <p className={'light'}>
      <Select required={false} options={optionTags} />
    </p>
  )
}
