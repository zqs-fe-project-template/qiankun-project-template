import { createBrowserRouter } from "react-router-dom";
import Home from '@/pages/home'
import About from '@/pages/about'
import { Layout, Error } from "@/components";
import Login from "@/pages/login";

const routes = [
    {
        path: "/",
        element: <Layout />,
        errorElement: <Error />,
        children: [
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/about",
                element: <About />
            },
        ]
    },
]

export const router = createBrowserRouter(routes, { basename: (window as any).__POWERED_BY_QIANKUN__ ? '/react-app' : '/' })
