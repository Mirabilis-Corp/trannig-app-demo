import React from 'react'

export const ThemeContext = React.createContext({
    theme: 'light',
    setTheme: () => {},
})

export const LangContext = React.createContext({
    lang: 'fr',
    setLang: () => {},
})
