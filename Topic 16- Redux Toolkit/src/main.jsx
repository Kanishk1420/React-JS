import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux' // 1. Import Provider
import { store } from './redux/store.js' // 2. Import the store

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}> {/* 2. Provide the store to the React app whole in ui */}
    <App />
    </Provider>
  </StrictMode>,
)
