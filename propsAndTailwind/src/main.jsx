import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

let disc="Goku is a super saiyan born on saiyan planet";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App name='shahnawaz' number='12345'/>
  </React.StrictMode>,
)
