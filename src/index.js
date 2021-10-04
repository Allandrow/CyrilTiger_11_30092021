import React from 'react'
import ReactDOM from 'react-dom'
import './styles/reset.css'
import './index.css'
import { BrowserRouter as Router } from 'react-router-dom'
import Footer from './components/footer'
import App from './app'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)
