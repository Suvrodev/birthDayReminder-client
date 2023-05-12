import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import router from './Route/route.jsx'
import { RouterProvider } from 'react-router-dom'
import AuthProvider from './Pages/Provider/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='max-w-7xl mx-auto'>
     <React.StrictMode>
       <AuthProvider> <RouterProvider router={router} /> </AuthProvider>
    </React.StrictMode>,
  </div>
 
)
