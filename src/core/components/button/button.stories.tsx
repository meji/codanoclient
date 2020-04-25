import React from 'react'
import { Button } from './button'

export default {
  title: 'Button',
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
export const primaryDark = () => (
  <Button theme={'primary'} className={'dark-theme'}>
    Click me
  </Button>
)
export const secondaryDark = () => (
  <Button theme={'secondary'} className={'dark-theme'}>
    Click me
  </Button>
)
