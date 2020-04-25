import React from 'react'
import { Button } from './button'

export default {
  title: 'Light/Buttons',
  component: Button
}

export const primary = () => (
  <Button theme={'primary'} className={'light-theme'}>
    Click me
  </Button>
)
export const secondary = () => (
  <Button theme={'secondary'} className={'light-theme'}>
    Click me
  </Button>
)
