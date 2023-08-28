import { Link, Outlet } from "react-router-dom"

export function Nav(){
    return (<ul style={{background: '#e5e5e5', padding: 10, width: 200}}>
        <li><Link to="/login">login</Link></li>
        <li><Link to="/about">about</Link></li>
    </ul>)
}

export default function Layout({children}: any){
    return <div style={{display: 'flex'}}>
        <Nav />
        <Outlet />
    </div>
}

