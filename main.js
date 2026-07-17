import React from "react";
import "./style.css";
import ReactDOM from "react-dom/client";
import AppLayout from "./src/AppLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./src/components/Error";
import About from "./src/components/About";
import Body from "./src/components/Body";
import Cart from "./src/components/Cart";
import Contact from "./src/components/Contact";
import RestaurantMenu from "./src/components/RestaurantMenu";
import Signup from "./src/components/Singup";
import Signin from "./src/components/Singin";
import { lazy, Suspense } from "react";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/singin",
        element: <Signin />,
      },

      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/singup",
        element: <Signup />,
      },
      // {
      //   path: ""
      // },

      {
        path: "/cart",
        element: <Cart />,
      },
    ],

    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.querySelector("#root"));
// root.render(<AppLayout />);
root.render(<RouterProvider router={appRouter} />);
