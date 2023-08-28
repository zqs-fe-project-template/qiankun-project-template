import './assets/css/index.less'
import { createLifecyle, getMicroApp } from 'vite-plugin-legacy-qiankun'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import pkg from '../package.json'
import App from './App.vue'
import router from './router'

const microApp = getMicroApp(pkg.name)

const render = (props?: any) => {
    const app = createApp(App)
    app.use(createPinia())
    app.use(router)
    app.mount('#app')
}

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