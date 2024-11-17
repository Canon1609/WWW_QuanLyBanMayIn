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
                path: "*",
                element: <Page404 />
                
            }
        ]
    },

    // {
    //     path : "/user",
    //     element : <PrivateRoute rolesAllowed={["user"]} element={<Layouts></Layouts>} ></PrivateRoute>,
    // },
    // {
    //     path : "/login",
    //     element : <Login/>,
    //     chidren :[
    //         {
    //             path : "/login",
    //             element : <Login/>
    //         }
    //     ]
    // }
        {
        path : "/",
        element : <Layouts/>,
        children : [
            {
               index : true,
                element : <Home/>
            },
            {
                path : "login",
                element : <Login/>
            }
        ]
    }
]