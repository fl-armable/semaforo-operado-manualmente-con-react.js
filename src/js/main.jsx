import React from 'react'
import ReactDOM from 'react-dom/client'

// index.css'
import '../styles/index.css'

// components
import TrafficLight from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TrafficLight/>
  </React.StrictMode>,
)
