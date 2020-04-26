import React from 'react'
import { Button } from './button'

export default {
  title: 'Light/Buttons',
  component: Button
}

export const primary = () => (
  <>
    <p>
      <Button theme={'primary'} className={'light-theme'} size={'s'}>
        {' '}
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'light-theme'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'primary'} className={'light-theme'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
export const secondary = () => (
  <>
    <p>
      <Button theme={'secondary'} className={'light-theme'} size={'s'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'light-theme'}>
        Click me
      </Button>
    </p>
    <p>
      <Button theme={'secondary'} className={'light-theme'} size={'l'}>
        Click me
      </Button>
    </p>
  </>
)
