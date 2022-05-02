import { ADMIN_ROUTE, BASKET_ROUTE, DEVICE_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE, SOME_PAGE } from "./utils/consts"

import Auth from "./pages/Auth"
import Shop from "./pages/Shop"
import DevicePage from "./pages/DevicePage"
import { SomePage } from "./pages/SomePage"
import Admin from "./pages/Admin"
import Basket from "./pages/Basket"

export const authRoutes =[
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: BASKET_ROUTE,
        Component: Basket
    },
    {
        path: SOME_PAGE,
        Component: SomePage
    }
]

export const publicRoutes =[
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: DEVICE_ROUTE + '/:id',
        Component: DevicePage
    }
]
