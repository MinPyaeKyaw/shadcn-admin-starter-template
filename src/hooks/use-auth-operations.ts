// import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { REFRESH_TOKEN, TOKEN } from "@configs/vars";

/**
 * useAuthOperations hook to control protected and public routes.
 */
const useAuthOperations = () => {
  function login(value: Record<string, string>) {
    Cookie.set(TOKEN, value.token);
    Cookie.set(REFRESH_TOKEN, value.refreshToken);
    window.location.href = "/";
  }

  function logout() {
    Cookie.remove(TOKEN);
    Cookie.remove(REFRESH_TOKEN);
    window.location.href = "/auth/login";
  }

  return { login, logout };
};

export default useAuthOperations;
