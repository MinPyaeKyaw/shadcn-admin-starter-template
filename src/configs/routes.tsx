import { DashboardLayout } from "@layouts/dashboard/dashboard-layout";
import {
  Calendar,
  Charts,
  Dashboard,
  Error404,
  Error500,
  Form,
  Modals,
  Table,
} from "@pages/index";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
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
    path: "/*",
    element: <Error404 />,
  },
]);
