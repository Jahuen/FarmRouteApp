import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './loginPage/LoginPage.module.css'
import LoginPage from './loginPage/LoginPage.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
)
