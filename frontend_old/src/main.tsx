import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import { LanguageProvider } from './i18n/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import { initAnalytics } from './utils/analytics'
import './index.css'

// Initialize privacy-first analytics (no cookies)
initAnalytics()

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <LanguageProvider>
          <App />
        </LanguageProvider>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
