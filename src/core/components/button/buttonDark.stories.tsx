import React from 'react'
import { Button } from './button'

export default {
  title: 'Dark/Buttons',
  component: Button
}

export const primary = () => (
  <Button theme={'primary'} className={'dark-theme'}>
    Click me
  </Button>
)
export const secondary = () => (
  <Button theme={'secondary'} className={'dark-theme'}>
    Click me
  </Button>
)
