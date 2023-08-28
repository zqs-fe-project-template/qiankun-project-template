import { Outlet } from "react-router-dom"

export function Nav(){
    return (<ul style={{background: '#e5e5e5', padding: 10, width: 200}}>
        <li><a href="/vue-app" >vue app 应用</a></li>
        <li><a href="/react-app/login">react app 应用</a></li>
        <li><a href="/login">login</a></li>
        <li><a href="/about">about</a></li>
    </ul>)
}

export default function Layout({children}: any){
    return <div style={{display: 'flex'}}>
        <Nav />
        <Outlet />
    </div>
}

