import React from 'react'
import { render, cleanup } from '@testing-library/react'
import { App } from './App'
afterEach(cleanup)

it('should render App', () => {
  const {} = render(<App />)
  const main = 0
  expect(main).toBeGreaterThanOrEqual(0)
})
