import { createBrowserRouter } from "react-router";
import RootLayout from "../layouts/RootLayout";
import Home from "../pages/Home/Home/Home";
import Coverage from "../pages/Coverage/Coverage";
import About from "../pages/About/About";
import AuthLayout from "../layouts/AuthLayout";
import Register from "../pages/AuthPages/Register/Register";
import Login from "../pages/AuthPages/Login/Login";
import PrivateRoute from "./PrivateRoute";
import Rider from "../pages/Rider/Rider";
import SendParcel from "../pages/SendParcel/SendParcel";
import Loader from "../components/Loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },

      {
        path: "/rider",
        element: (
          <PrivateRoute>
            <Rider></Rider>
          </PrivateRoute>
        ),
      },

      {
        path: "/coverage",
        loader: () => fetch("warehouses.json"),
        Component: Coverage,
      },

      {
        path: "/about",
        Component: About,
      },

      {
        path: "/send-parcel",
        element: (
          <PrivateRoute>
            <SendParcel></SendParcel>
          </PrivateRoute>
        ),
        loader: () => fetch("warehouses.json")
        // loader: async () => {
        //   await new Promise((res) => setTimeout(res, 1000));
        //   return fetch("warehouse.json");
        // },
      },
    ],
  },

  {
    path: "/",
    Component: AuthLayout,
    hydrateFallbackElement: <Loader></Loader>,
    children: [
      {
        path: "/register",
        Component: Register,
      },

      {
        path: "/login",
        Component: Login,
      },
    ],
  },
]);
