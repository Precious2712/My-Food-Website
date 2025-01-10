import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import { ToastProvider } from './components/ui/toast'
import './index.css'
import { rootRoute } from './Route/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <App /> */}
    <ToastProvider>

      <RouterProvider router={rootRoute} />

    </ToastProvider>
  </React.StrictMode>,
)
