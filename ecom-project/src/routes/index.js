import Admin from "../pages/Admin";
import DashBoard from "../../src/pages/DashBoard"
export const routes = [
    {
        path : "/dashboard",
        element : <DashBoard/>,
        children : [
            {
                path : "/dashboard",
                element : <Admin/>
            },
          
        ]
    }
]