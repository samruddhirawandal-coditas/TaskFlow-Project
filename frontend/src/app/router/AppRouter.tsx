import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../../layouts/MainLayout/MainLayout";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import AuthWelcome from "../../components/AuthWelcome/AuthWelcome";
import { ROUTES } from "../../constants/RouteConstants";

export const router= createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            children:[
                {
                    element: <Home />,
                    children: [
                        {
                            index:true,
                            element: <AuthWelcome/>,
                        },
                        {
                            path: ROUTES.LOGIN,
                            element: <Login/>
                        }
                    ]
                }
            ]
        }
    ]
)