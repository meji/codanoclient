import React, { useContext, useEffect, useState } from 'react'
import { dataContext } from './dataProvider'

type Theme = 'light' | 'dark'
type ListView = 'UnFolded' | 'Folded'
type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
  listView: ListView
  toggleListView: () => void
}

export const ThemeContext = React.createContext<ThemeContext>({} as ThemeContext)

export const ThemeProvider: React.FC = ({ children }) => {
  const { user } = useContext(dataContext)
  const [theme, setTheme] = useState<Theme>(user.theme ? user.theme : 'light')
  const [listView, setListView] = useState<ListView>('Folded')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }
  const toggleListView = () => {
    setListView(listView === 'Folded' ? 'UnFolded' : 'Folded')
  }
  useEffect(() => {
    user.theme && setTheme(user.theme)
  }, [user.theme])
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, listView, toggleListView }}>
      {children}
    </ThemeContext.Provider>
  )
}
