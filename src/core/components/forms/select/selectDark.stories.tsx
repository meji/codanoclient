import React from 'react'
import { Select } from './select'

export default {
  title: 'Dark/Forms/Select',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: Select
}

export const select = () => {
  const optionTags = [
    { value: 'option1', text: 'Select Dark' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ]
  return (
    <p className={'dark-theme'}>
      <Select required={false} options={optionTags} />
    </p>
  )
}
