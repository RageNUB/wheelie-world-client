import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import MyToys from "../pages/MyToys/MyToys";
import AddToy from "../pages/AddToy/AddToy";
import AllToys from "../pages/AllToys/AllToys";
import Blogs from "../pages/Blogs/Blogs";
import PrivateRoute from "./PrivateRoutes";

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
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path: "my-toys",
                element: <PrivateRoute><MyToys></MyToys></PrivateRoute>
            },
            {
                path: "add-a-toy",
                element: <PrivateRoute><AddToy></AddToy></PrivateRoute>
            },
            {
                path: "all-toys",
                element: <AllToys></AllToys>,
                loader: () => fetch("http://localhost:5000/products")
            },
            {
                path: "blogs",
                element: <Blogs></Blogs>
            }
        ]
    }
]);

export default router;