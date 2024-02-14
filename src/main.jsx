import React from 'react'
import ReactDOM from "react-dom/client"
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import PlayerConextProvider from './contexts/playerContext/PlayerContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PlayerConextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PlayerConextProvider>
  </React.StrictMode>,
)
