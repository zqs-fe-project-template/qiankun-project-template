// 微应用配置相关
import { registerMicroApps } from "qiankun"
export { start } from "qiankun"

const microApps = [
    {
        name: 'vue-app',
        entry: '//localhost:5001',
        container: '#micro',
        activeRule: '/vue-app',
    },
    {
        name: 'react-app',
        entry: '//localhost:5002',
        container: '#micro',
        activeRule: '/react-app',
    }
]

export const isMicroAppsPath = () => {
    const { pathname } = location
    const appPaths = microApps.map(appInfo => appInfo.activeRule)
    return appPaths.some((path: string) => pathname.startsWith(path))
}

export const registerMicro = () => registerMicroApps(microApps)

