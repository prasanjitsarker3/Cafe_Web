import { createBrowserRouter } from "react-router-dom";
import Main from "../../Layout/Main";
import Home from "../../Page/Home/Home";
import Menu from "../../Page/Menu/Menu/Menu";
import Order from "../../Page/Order/Order/Order";
import Login from "../../Authentication/Login/Login";
import Register from "../../Authentication/Register";
import SecretPage from "../Shared/SecretPage/SecretPage";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../../Layout/Dashboard";
import MyCart from "../../Page/Dashboard/Mycart";

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
            },
            {
                path:"login",
                element:<Login></Login>
            },
            {
                path:"register",
                element:<Register></Register>
            },
            {
                path:"secret",
                element:<PrivateRoute><SecretPage></SecretPage></PrivateRoute>
            }
        ]
    },
    {
        path:"dashboard",
        element:<Dashboard></Dashboard>,
        children:[
            {
                path:"mycart",
                element:<MyCart></MyCart>

            }
        ]
    }
])
export default router;