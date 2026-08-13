import type { ReactNode } from 'react'

export type Theme = 'dark' | 'light'

export interface ThemeContextType {
  theme: Theme
  isDarkMode: boolean
  toggleTheme: () => void
}

export interface CustomThemeProviderProps {
  children: ReactNode
}
