import React from 'react'
import '../src/styles/index.css'
import '../src/styles/storybook.css'

export const decorators = [
  Story => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  )
]
