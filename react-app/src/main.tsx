import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import pkg from '../package.json'
import './assets/css/index.less'
import { RouterProvider, BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import { router } from './router'

const app = document.getElementById('app') as HTMLElement

const About = () => {
  return (<div>垃圾乾坤</div>)
}

const render = () => ReactDOM.createRoot(app).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <div>
      {/* <BrowserRouter basename='/react-app'>
        <Link to="/login">去登陆页</Link>
        <Link to="/about">去关于我们页</Link>
        <Routes>
          <Route path='/login' element={<div>hello, login</div>}></Route>
          <Route path='/about' element={<About />}></Route>
        </Routes>
      </BrowserRouter> */}
      {/* <RouterProvider router={router} /> */}
    </div>
  </React.StrictMode>,
)


const microApp = getMicroApp(pkg.name)

console.log('react-app', pkg.name, microApp, microApp.__POWERED_BY_QIANKUN__)
if (microApp.__POWERED_BY_QIANKUN__) {
  createLifecyle(pkg.name, {
    mount(props) {
      console.log('mount', pkg.name);
      render();
    },
    bootstrap() {
      console.log('bootstrap', pkg.name);
    },
    unmount() {
      console.log('unmount', pkg.name)
    }
  })
} else {
  render();
}
