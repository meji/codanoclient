import React from 'react'
import { Select } from './select'

export default {
  title: 'Dark/Forms/Select',
  component: Select
}

export const select = () => {
  const optionTags = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' }
  ]
  return (
    <p className={'dark-theme'}>
      <Select required={false} label={'Select Light'} options={optionTags} />
    </p>
  )
}
