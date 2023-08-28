import { router } from '@/router'
import { BrowserRouter, Outlet, Route, Router, RouterProvider, Routes, useLocation, useMatch, useMatches, useParams } from 'react-router-dom'
import { Layout } from '@/components'
import Home from './pages/home'
import Login from './pages/login'
import About from './pages/about'
import { Nav } from './components/Layout'
import { isMicroAppsPath } from './micro'
import { useState } from 'react'

const MainApp = () => <RouterProvider router={router} />
const MicroApp = () => <div style={{display: 'flex'}}><Nav /><div id="micro"></div></div>

function App() {
  return (<div>
    { !isMicroAppsPath() ? <MainApp /> :  <MicroApp /> }
  </div>)
}

export default App
