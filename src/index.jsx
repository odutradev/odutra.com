import { ThemeProvider, createTheme } from '@mui/material/styles'
import { ToastContainer, Bounce } from 'react-toastify'
import CssBaseline from '@mui/material/CssBaseline'
import ReactDOM from 'react-dom/client'

import portfolioData from './assets/portfolioData'
import config from './assets/config'
import Router from './routes'

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#7FFFD4" },
    secondary: { main: "#00C4B4" },
    background: { default: "#0A0A0A", paper: "#1E1E1E" },
    text: { primary: "#ffffff", secondary: "#bbbbbb" }
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
          border: "1px solid rgba(255, 255, 255, 0.12)"
        }
      }
    }
  }
})

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <title>{config?.pageTitle || portfolioData.personalInfo.brandName}</title>
      <CssBaseline />
      <Router />
    </ThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick={false}
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      transition={Bounce}
      theme="dark"
    />
    <App />
  </>
)