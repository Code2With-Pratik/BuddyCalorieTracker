import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css' // This now contains our Tailwind v4 imports
import App from './App.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)