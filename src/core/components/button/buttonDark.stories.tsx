import React from 'react'
import { Button } from './button'

export default {
  title: 'Dark/Buttons',
  component: Button
}

export const primary = () => (
  <>
    <p>
      <Button theme={'primary'} className={'dark-theme'} size={'s'}>
        {' '}
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'dark-theme'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'dark-theme'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
export const secondary = () => (
  <>
    <p>
      <Button theme={'secondary'} className={'dark-theme'} size={'s'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'dark-theme'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'dark-theme'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
