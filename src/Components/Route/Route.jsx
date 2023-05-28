import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home";
import Menu from "../../Page/Menu/Menu/Menu";
import Order from "../../Page/Order/Order/Order";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path:"menu",
                element:<Menu></Menu>
            },
            {
                path:"order/:category",
                element:<Order></Order>
            }
        ]
    }
])
export default router;