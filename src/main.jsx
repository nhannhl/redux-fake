import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ProviderComponent from './redux-fake/ProviderComponent.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ProviderComponent>
      <App />
    </ProviderComponent>
  </React.StrictMode>,
)
