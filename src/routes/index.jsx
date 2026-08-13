import { BrowserRouter, Routes, Route } from 'react-router-dom'

import LinksPage from '../pages/links'
import Main from '../pages/main'

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/links" element={<LinksPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router