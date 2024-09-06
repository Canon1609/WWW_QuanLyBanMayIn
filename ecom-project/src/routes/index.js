import Admin from "../pages/Admin";
import DashBoard from "../../src/pages/DashBoard"
import { Navigate } from "react-router-dom";
import Page404 from "../pages/Page404";
import Product from "../pages/Product";
import Category from "../pages/Category";
export const routes = [
    {
        path : "/",
        
        element : <DashBoard></DashBoard>,
        children : [
            {
                path : "/dashboard",
                element : <Admin/>
            },
            {
                path : "/",
                element : <Navigate to={"/dashboard"}></Navigate>,
            },
            {
                path : "/products",
                element : <Product/>
            },
            {
                path : "/category",
                element : <Category/>
            },
            {
                path: "*",
                element: <Page404 />
                
            }
        ]
    }
]