import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Error from "../pages/Error";
import Home from "../pages/Home";

import AuthLayout from "../layouts/AuthLayout";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MyGroup from "../pages/MyGroup";
import CreateGroup from "../pages/CreateGroup";

import "react-tooltip/dist/react-tooltip.css";
import AllGroup from "../pages/AllGroup";
import Loader from "../components/Loader";
import PrivateRoute from "./PrivateRouter";
import GroupCard from "../components/GroupCard";
import UpdateGroup from "../components/UpdateGroup";
import About from "../pages/About";
import BlogDetails from "../pages/BlogDetails";
import Contact from "../pages/Contact";
import Settings from "../components/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: Loader,
      },
      {
        path: "/updateGroup/:id",
        element: <UpdateGroup />,
      },

      {
        path: "/groups/:id",
        element: <GroupCard />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blogs/:id",
        element: <BlogDetails/>,
      },
      {
        path:'/contact',
        element: <Contact/>
      },
      {
        path:'/settings',
        element: <Settings/>,
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/myGroup",
        element: (
          <PrivateRoute>
            <MyGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/createGroup",
        element: (
          <PrivateRoute>
            <CreateGroup />
          </PrivateRoute>
        ),
      },
      {
        path: "/auth/allGroup",
        element: <AllGroup />,
      },
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
