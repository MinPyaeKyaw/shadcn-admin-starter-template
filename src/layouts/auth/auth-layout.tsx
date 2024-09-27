import Center from "@components/commons/center";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Center className="bg-primary w-full h-[100vh]">
      <Outlet />
    </Center>
  );
}

export default AuthLayout;
