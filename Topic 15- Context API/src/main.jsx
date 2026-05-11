import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Themecontext from './context/Themecontext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Themecontext>
    <App />
    </Themecontext>
  </StrictMode>,
)
