import React from 'react'
import './App.css'
import { Main } from './features/main/main'
import { ThemeProvider } from './features/contexts/themeProvider'
import { UserProvider } from './features/contexts/userProvider'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Main></Main>
      </UserProvider>
    </ThemeProvider>
  )
}
