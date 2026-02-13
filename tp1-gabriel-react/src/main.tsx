import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../src/styles/index.css'
import App from './App.tsx'
import { AuthProvider } from './auth/auth-provider.tsx'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min"; 


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <AuthProvider>
    <App />
  </AuthProvider>
  </StrictMode>,
)
