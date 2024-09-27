import AuthLayout from "@layouts/auth/auth-layout";
import { DashboardLayout } from "@layouts/dashboard/dashboard-layout";
import RootLayout from "@layouts/root/root-layout";
import {
  Calendar,
  Charts,
  Dashboard,
  Error404,
  Error500,
  Form,
  Login,
  Modals,
  Table,
} from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "",
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            path: "",
            element: <Dashboard />,
          },
          {
            path: "forms",
            element: <Form />,
          },
          {
            path: "table",
            element: <Table />,
          },
          {
            path: "charts",
            element: <Charts />,
          },
          {
            path: "calendar",
            element: <Calendar />,
          },
          {
            path: "modals",
            element: <Modals />,
          },
          {
            path: "404",
            element: <Error404 />,
          },
          {
            path: "500",
            element: <Error500 />,
          },
        ],
      },
      {
        path: "/auth",
        element: <AuthLayout />,
        children: [
          {
            index: true,
            path: "login",
            element: <Login />,
          },
        ],
      },
    ],
  },
  {
    path: "/*",
    element: <Error404 />,
  },
]);
