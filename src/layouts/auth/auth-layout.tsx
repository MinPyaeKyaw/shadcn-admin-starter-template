import Center from "@components/commons/center";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

function AuthLayout() {
  return (
    <Center className="w-full h-[100vh]">
      <Header />
      <Outlet />
    </Center>
  );
}

export default AuthLayout;
