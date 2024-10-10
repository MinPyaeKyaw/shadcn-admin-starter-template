import Center from "@components/commons/center";
import { Outlet } from "react-router-dom";
import { Header } from "./components";

function AuthLayout() {
  return (
    <div className="w-full h-[100vh] p-4">
      <Center>
        <Header />
        <Outlet />
      </Center>
    </div>
  );
}

export default AuthLayout;
