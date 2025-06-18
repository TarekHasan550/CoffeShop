import { createBrowserRouter, RouterProvider, } from "react-router";
import Layout from '../layouts/Layout';
import CoffeDetails from '../pages/CoffeDetails';
import ErrorPage from "../pages/ErrorPage";
import Home from '../pages/Home';
import NewCoffe from '../pages/NewCoffe';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';
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
          loader: () => fetch(`https://coffe-shop-server-fawn.vercel.app/coffes`),
          Component: Home
        },
        {
          path: 'coffeDetails/:id',
          loader: ({ params }) => fetch(`https://coffe-shop-server-fawn.vercel.app/coffes/${params.id}`),
          Component: CoffeDetails,
        },
        {
          path: "newCoffe",
          Component: NewCoffe
        },
        {
          path: "updateCoffe/:id",
          loader: ({ params }) => fetch(`https://coffe-shop-server-fawn.vercel.app/coffes/${params.id}`),
          Component: UpdateCoffe
        },
        {
          path: "/signin",
          Component: SignIn
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
