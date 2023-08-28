import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { registerMicro, start } from './micro';
import './assets/css/index.less'

const root = document.getElementById('root') as HTMLElement

const render = () => ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)

registerMicro()
start()
render()