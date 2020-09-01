import React from 'react'
import { Button } from './button'

export default {
  title: 'Light/Buttons',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: Button
}

export const primary = () => (
  <>
    <p>
      <Button theme={'primary'} className={'light'} size={'s'}>
        {' '}
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'light'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'light'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
export const secondary = () => (
  <>
    <p>
      <Button theme={'secondary'} className={'light'} size={'s'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'light'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'light'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
