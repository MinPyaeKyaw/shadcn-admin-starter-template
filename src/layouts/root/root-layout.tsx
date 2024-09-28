import useAuth from "@hooks/use-auth";
import { Outlet } from "react-router-dom";

function RootLayout() {
  useAuth();

  return <Outlet />;
}

export default RootLayout;
