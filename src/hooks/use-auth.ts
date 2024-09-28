import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { TOKEN } from "@configs/vars";

/**
 * useAuth hook to control protected and public routes.
 */
const useAuth = () => {
  const navigate = useNavigate();
  const isLoggined = Cookie.get(TOKEN);

  useEffect(() => {
    if (isLoggined) {
      navigate("/");
    } else {
      navigate("/auth/login");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggined]);
};

export default useAuth;
