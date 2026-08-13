import ReactDOM from 'react-dom/client'

import { CustomThemeProvider } from './context/ThemeContext'
import Router from './routes'

const App = () => {
  return (
    <CustomThemeProvider>
      <Router />
    </CustomThemeProvider>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />)