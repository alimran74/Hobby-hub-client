import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyGroup from "../pages/MyGroup";
import CreateGroup from "../pages/CreateGroup";
import FeaturedGroup from "../components/FeaturedGroup";
import 'react-tooltip/dist/react-tooltip.css';
import AllGroup from "../pages/AllGroup";
import Loader from "../components/Loader";






const router = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout/>,
            errorElement: <Error/>,
            children:[
                {
                    index:true,
                    element: <Home/>,
                    loader: Loader,
                },
                {
                  path: 'allGroup',
                  element: <AllGroup/> 
                },
                {
                    path: '/group',
                    element: <FeaturedGroup/>
                },
                
                

            ]
        },
        {
            path: '/auth',
            element: <AuthLayout/>,
            children:[
                {
                    path:'login',
                    element: <Login/>

                },
                {
                    path:'/auth/register',
                    element: <Register/>
                },
                {
                    path:'/auth/myGroup',
                    element: <MyGroup/>
                },
                {
                   path:'/auth/createGroup',
                   element: <CreateGroup/> 
                }
            ]
        }
    ]
);

export default router;