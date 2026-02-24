import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom';
import { createHead, UnheadProvider } from '@unhead/react/client'

const head = createHead()

createRoot(document.getElementById('root')).render(
  <StrictMode>  
    <UnheadProvider head={head}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </UnheadProvider>
  </StrictMode>
)