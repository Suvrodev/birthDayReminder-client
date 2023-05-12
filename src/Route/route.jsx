import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import AddPeople from "../Pages/AddPeople/AddPeople";
import AllPeople from "../Pages/AllPeople/AllPeople";
import People from "../Pages/People/People";
import Update from "../Pages/Update/Update";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/add',
            element: <AddPeople></AddPeople>
        },
        {
            path: '/adminpeople',
            element: <AllPeople></AllPeople>
        },
        {
            path: '/people',
            element: <PrivateRoute><People></People></PrivateRoute>
        },
        {
            path: '/update/:id',
            element: <Update></Update>
        }
      ]
    },
  ]);

  export default router;