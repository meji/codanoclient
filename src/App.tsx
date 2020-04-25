import React, { useState } from 'react'
import './App.css'
import { Button } from './core/components/button/button'

function App() {
  const [theme, setTheme] = useState('light-theme')
  return (
    <div id="wrapper" className={theme}>
      <Button
        theme={'primary'}
        onClick={() => setTheme(theme === 'light-theme' ? 'dark-theme' : 'light-theme')}
      >
        Cambiar tema
      </Button>
    </div>
  )
}

export default App
