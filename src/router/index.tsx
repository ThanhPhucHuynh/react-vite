import { createBrowserRouter, RouteObject } from "react-router-dom";
import { LoginPage } from '../page'
const listRouteObject: RouteObject[] = [
    {
        path: '/',
        element: <>Introduce</>
    },
    {
        path: '/login',
        element: <LoginPage />
    }
]

const router = createBrowserRouter(listRouteObject, {

})

export {
    router
}