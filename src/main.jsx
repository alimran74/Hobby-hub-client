import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './router/router'
import Loader from './components/Loader'
import AuthProvider from './provider/AuthProvider'
import Aos from 'aos'

Aos.init();
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router = {router} fallbackElement={ <Loader/> }/>
     </AuthProvider>
  </StrictMode>,
)
