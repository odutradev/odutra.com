import { createContext, useContext, useState, useEffect, useCallback, useMemo } from 'react'

import type { CustomThemeProviderProps, ThemeContextType, Theme } from './types'

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

const getInitialTheme = (): Theme => {
  const savedTheme = localStorage.getItem('theme')
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme
  }
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

export const CustomThemeProvider = ({ children }: CustomThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>(getInitialTheme)

  useEffect(() => {
    const root = document.documentElement
    if (theme === 'dark') {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }, [theme])

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    const handleChange = (event: MediaQueryListEvent) => {
      if (!localStorage.getItem('theme')) {
        setTheme(event.matches ? 'dark' : 'light')
      }
    }
    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  const toggleTheme = useCallback(() => {
    setTheme((previousTheme) => {
      const nextTheme: Theme = previousTheme === 'dark' ? 'light' : 'dark'
      localStorage.setItem('theme', nextTheme)
      return nextTheme
    })
  }, [])

  const contextValue = useMemo<ThemeContextType>(() => ({
    theme,
    isDarkMode: theme === 'dark',
    toggleTheme
  }), [theme, toggleTheme])

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within CustomThemeProvider')
  }
  return context
}
