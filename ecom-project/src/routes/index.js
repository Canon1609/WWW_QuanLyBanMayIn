import Admin from "../pages/Admin";

export const routes = [
    {
        path : "/",
        element : <DashBoard/>,
        children : [
            {
                path : "/admin",
                element : <Admin/>
            }
        ]
    }
]