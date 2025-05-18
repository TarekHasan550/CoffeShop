import React from 'react'
import { createBrowserRouter, RouterProvider, } from "react-router";
import ErrorPage from "../pages/ErrorPage";
import Layout from '../layouts/Layout';
import Home from '../pages/Home';
import CoffeDetails from '../pages/CoffeDetails';
import NewCoffe from '../pages/NewCoffe';
import UpdateCoffe from '../pages/UpdateCoffeDetails';


export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      Component: Layout,
      errorElement: <ErrorPage />,
      children: [
        {
          index: true,
          Component: Home
        },
        {
          path: 'coffeDetails',
          element: <CoffeDetails />,
        },
        {
          path: "newCoffe",
          Component: NewCoffe
        },
        {
          path: "updateCoffe",
          // loader: ({params})=> fetch(`${params.id}`),
          Component: UpdateCoffe
        }
      ]
    }
  ])
  return <RouterProvider router={router} />
}
