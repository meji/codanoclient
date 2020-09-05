import React from 'react'
import './App.css'
import { Main } from './features/main/main'
import { ThemeProvider } from './features/providers/themeProvider'
import { DataProvider } from './features/providers/dataProvider'

export const App: React.FC = () => {
  return (
    <ThemeProvider>
      <DataProvider>
        <Main></Main>
      </DataProvider>
    </ThemeProvider>
  )
}
