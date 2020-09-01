import React from 'react'
import './App.css'
import { Main } from './features/main/main'
import { ThemeProvider } from './features/contexts/themeProvider'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Main></Main>
    </ThemeProvider>
  )
}
