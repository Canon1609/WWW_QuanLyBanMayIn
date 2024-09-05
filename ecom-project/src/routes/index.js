import Admin from "../pages/Admin";
import DashBoard from "../../src/pages/DashBoard"
import { Navigate } from "react-router-dom";
import Page404 from "../pages/Page404";
import Product from "../pages/Product";
export const routes = [
    {
        path : "/",
        element : <DashBoard/>,
        children : [
            {
                path : "/dashboard",
                element : <Admin/>
            },
            {
                path : "/products",
                element : <Product/>
            },
            {
                path: "*",
                element: <Page404 />
                
            }
          
        ]
    }
]