import React from 'react'
import { ImgInput } from './img-input'

export default {
  title: 'Dark/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'dark', value: '#000000', default: true }]
  },
  component: ImgInput
}

export const images = () => (
  <div className={'dark-theme'}>
    <p>Una imagen</p>
    <p>
      <ImgInput />
    </p>
    <p>Múltiple</p>
    <p>
      <ImgInput multiple={true} />
    </p>
  </div>
)
