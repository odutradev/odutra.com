import ReactDOM from 'react-dom/client'

import { CustomThemeProvider } from '@context/ThemeContext'
import Router from '@routes/index'

const App = () => {
  return (
    <CustomThemeProvider>
      <Router />
    </CustomThemeProvider>
  )
}

const rootElement = document.getElementById('root')
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />)
}
