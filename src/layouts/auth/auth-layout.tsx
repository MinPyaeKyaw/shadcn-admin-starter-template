import Center from "@components/commons/center";
import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <Center>
      <h2>Hello</h2>
      <Outlet />
    </Center>
  );
}

export default AuthLayout;
