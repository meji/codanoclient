import React, { useState } from 'react'
type Theme = 'light' | 'dark'
type ListView = 'unfolded' | 'folded'
type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
  listView: ListView
  toggleListView: () => void
}

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<Theme>('light')
  const [listView, setListView] = useState<ListView>('folded')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const toggleListView = () => {
    setListView(listView === 'folded' ? 'unfolded' : 'folded')
  }
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, listView, toggleListView }}>
      {children}
    </ThemeContext.Provider>
  )
}
