export type Theme = 'dark' | 'light'

export interface ThemeState {
  theme: Theme
  isDarkMode: boolean
  toggleTheme: () => void
  setTheme: (theme: Theme) => void
}
