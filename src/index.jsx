import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import ReactDOM from 'react-dom/client'
import { useMemo } from 'react'

import { CustomThemeProvider, useTheme } from './context/ThemeContext'
import { portfolioData, config } from './assets/data'
import Router from './routes'

const AppContent = () => {
  const { isDarkMode } = useTheme()

  const theme = useMemo(() => createTheme({
    palette: {
      mode: isDarkMode ? 'dark' : 'light',
      primary: { main: isDarkMode ? '#7FFFD4' : '#005ac2' },
      secondary: { main: isDarkMode ? '#00C4B4' : '#00838F' },
      background: {
        default: isDarkMode ? '#0A0A0A' : '#F8FAFC',
        paper: isDarkMode ? '#1E1E1E' : '#FFFFFF'
      },
      text: {
        primary: isDarkMode ? '#ffffff' : '#0F172A',
        secondary: isDarkMode ? '#bbbbbb' : '#475569'
      }
    },
    typography: {
      fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif'
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: "none"
          }
        }
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            boxShadow: "none",
            border: isDarkMode ? "1px solid rgba(255, 255, 255, 0.12)" : "1px solid rgba(0, 0, 0, 0.12)"
          }
        }
      }
    }
  }), [isDarkMode])

  return (
    <MuiThemeProvider theme={theme}>
      <title>{config?.pageTitle || portfolioData.personalInfo.brandName}</title>
      <CssBaseline />
      <Router />
    </MuiThemeProvider>
  )
}

const App = () => {
  return (
    <CustomThemeProvider>
      <AppContent />
    </CustomThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)