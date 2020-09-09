import React from 'react'
import '../src/styles/index.css'
import '../src/styles/storybook.css'

export const decorators = [
  Story => (
    <div style={{ margin: '1em' }}>
      <Story />
    </div>
  )
]
