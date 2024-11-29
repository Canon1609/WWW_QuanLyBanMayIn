import Main from "../pages/admin/Main"
import BoxDashBoard from "../components/admin/BoxDashBoard";
import { Navigate , chidren} from "react-router-dom";
import Page404 from "../pages/admin/Page404"
import Product from"../pages/admin/Product"
import Category from"../pages/admin/Category"
import DashBoard from "../pages/admin/DashBoard";
import PrivateRoute from "../pages/auth/PrivateRoute/privateroute";
import Layouts from "../pages/user/Layout";
import Home from "../pages/user/Home";
import Login from "../pages/auth/Login";
import ProductDetail from "../components/user/ProductDetail";
import Checkout from "../pages/checkout";
import Customer from "../pages/admin/Customer";
import Order from "../pages/admin/Order";
import Shop from "../pages/user/Shop";
export const routes = [
    {
        path : "/admin",
        element : <PrivateRoute rolesAllowed={['admin']} element={<DashBoard></DashBoard>} ></PrivateRoute>,
        children : [
            {
               
                path : "/admin/dashboard",
                element :  <PrivateRoute rolesAllowed={["admin"]} element={<Main></Main>} ></PrivateRoute>,
            },
            {
                path : "/admin/products",
                element: (
                    <PrivateRoute rolesAllowed={["admin"]} element={<Product />} />
                ),
            },
            {
                path : "/admin/category",
                element: (
                    <PrivateRoute rolesAllowed={["admin"]} element={<Category />} />
                ),
            },
            {
                path : "/admin/customer",
                element: (
                    <PrivateRoute rolesAllowed={["admin"]} element={<Customer />} />
                ),
            },
            {
                path : "/admin/order",
                element: (
                    <PrivateRoute rolesAllowed={["admin"]} element={<Order />} />
                ),
            },
            {
                path: "*",
                element: <Page404 />
                
            }
        ]
    },

        {
        path : "/",
        element : <Layouts/>,
        children : [
            {
               index : true,
                element : <Home/>
            },
            {
                path : `product/:id`,
                element : <ProductDetail/>
            },
            {
                path : "login",
                element : <Login/>
            },
            {
                path : 'checkout',
                element : <Checkout></Checkout>
            },
            {
                path : 'shop',
                element : <Shop/>
            }
        ]
    }
]