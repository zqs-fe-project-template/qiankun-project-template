import { createBrowserRouter } from "react-router-dom";
import About from '@/pages/about'
import Login from "@/pages/login";
import { Error, Layout } from "@/components"; 

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

export const router = createBrowserRouter(routes)
