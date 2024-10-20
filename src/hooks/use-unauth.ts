import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookie from "js-cookie";
import { TOKEN } from "@configs/vars";

/**
 * useUnauth hook to protect auth routes after login
 */
const useUnauth = () => {
  const navigate = useNavigate();
  const isLoggined = Cookie.get(TOKEN);

  useEffect(() => {
    if (isLoggined) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLoggined]);
};

export default useUnauth;
