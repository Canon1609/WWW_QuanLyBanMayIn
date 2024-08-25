import Admin from "../pages/Admin";
import DashBoard from "../../src/pages/DashBoard"
import { Navigate } from "react-router-dom";
import Page404 from "../pages/Page404";
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
                path: "*",
                element: <Page404 />
                
            }
          
        ]
    }
]