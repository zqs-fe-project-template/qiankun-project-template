import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from '@vitejs/plugin-legacy' // need this
import { legacyQiankun } from 'vite-plugin-legacy-qiankun'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  plugins: [
    // react(),
    legacy(),
    legacyQiankun({
      name: 'react-app',
      devSandbox: true  
    })
  ],
  server: {
    port: 5002,
    proxy: {
      // ----------- 请求本地，代理至服务端
      '/cloud_manage': {
          // target: 'http://192.168.2.184:9191/', 
          target: `http://192.168.8.146:9191`, 
          // target: 'http://localhost:9191/', 
          ws: false,
          changeOrigin: true
        },
      // ----------- 请求本地，代理至dvm文件服务
      '/dvm-upload': {
        target: 'http://192.168.8.145:8080/', 
        // target: 'http://localhost/',
        ws: false,
        changeOrigin: true
      },
    }
  }
})
