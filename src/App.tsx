import React from 'react'
import './App.css'
import { Main } from './features/main/main'
import { ThemeProvider } from './features/providers/themeProvider'
import { UserProvider } from './features/providers/userProvider'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <Main></Main>
      </UserProvider>
    </ThemeProvider>
  )
}
