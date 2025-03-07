// src/main.jsx
import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router' // add import for BrowserRouter
import './index.css'
import App from './App.jsx'

// Wrap the App component with the BrowserRouter component to enable
// enable route handling throughout your application.
createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)

