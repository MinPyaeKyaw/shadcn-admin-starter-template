// import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { REFRESH_TOKEN, TOKEN } from "@configs/vars";
import { useNavigate } from "react-router-dom";

/**
 * useAuthOperations hook that provides authentication & authorization methods
 */
const useAuthOperations = () => {
  const navigate = useNavigate();

  function login(value: Record<string, string>) {
    Cookie.set(TOKEN, value.token);
    Cookie.set(REFRESH_TOKEN, value.refreshToken);
    navigate("/");
  }

  function logout() {
    Cookie.remove(TOKEN);
    Cookie.remove(REFRESH_TOKEN);
    navigate("/auth/login");
  }

  return { login, logout };
};

export default useAuthOperations;
