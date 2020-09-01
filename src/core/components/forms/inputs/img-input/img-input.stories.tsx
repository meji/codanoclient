import React from 'react'
import { ImgInput } from './img-input'

export default {
  title: 'Light/Forms/Inputs',
  parameters: {
    backgrounds: [{ name: 'light', value: '#ffffff', default: true }]
  },
  component: ImgInput
}

export const images = () => (
  <div className={'light'}>
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
