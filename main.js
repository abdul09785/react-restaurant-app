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
import RestaurantPage from "./src/components/RestaurantPage";


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
        path:"/restaurant/:resId",
        element:<RestaurantPage />,
      },

      {
        path: "/contact",
        element: <Contact />,
      },

      {
        path: "/about",
        element: <About />,
      },

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
