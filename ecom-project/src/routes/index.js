import Admin from "../pages/Admin";
import DashBoard from "../../src/pages/DashBoard"
import { Navigate } from "react-router-dom";
export const routes = [
    {
        path : "/",
        element : <DashBoard/>,
        children : [
            {
                path : "/dashboard",
                element : <Admin/>
            },
          
        ]
    }
]