import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import CoffeDetails from '../pages/CoffeDetails';
import NewCoffe from '../pages/NewCoffe';
import UpdateCoffe from '../pages/UpdateCoffeDetails';
import Login from '../pages/Login';
import SignUp from '../pages/SignUp';


export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          loader: () => fetch(`http://localhost:3000/coffes`),
          Component: Home
        },
        {
          path: 'coffeDetails/:id',
          loader: ({ params }) => fetch(`http://localhost:3000/coffes/${params.id}`),
          Component: CoffeDetails,
        },
        {
          path: "newCoffe",
          Component: NewCoffe
        },
        {
          path: "updateCoffe/:id",
          loader: ({ params }) => fetch(`http://localhost:3000/coffes/${params.id}`),
          Component: UpdateCoffe
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/signup",
          Component: SignUp
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
