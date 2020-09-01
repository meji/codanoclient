import React from 'react'
import { Button } from './button'

export default {
  title: 'Dark/Buttons',
  component: Button,
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  }
}

export const primary = () => (
  <>
    <p>
      <Button theme={'primary'} className={'dark'} size={'s'}>
        {' '}
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'dark'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'dark'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
export const secondary = () => (
  <>
    <p>
      <Button theme={'secondary'} className={'dark'} size={'s'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'dark'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'dark'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
