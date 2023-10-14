import { useState, useEffect } from "react";
import Cookies from "js-cookie";

const getTokenFromCookie = () => {
  return !!Cookies.get("token");
};

export const useAuth = () => {

  const [isLogin, setIsLogin] = useState(getTokenFromCookie());

  useEffect(() => {
    const checkChange = () => {
      const newCookies = getTokenFromCookie();

      if (newCookies !== isLogin) {
        setIsLogin(newCookies);
      }
    };

    const interval = setInterval(checkChange, 5000);

    return () => clearInterval(interval);
  }, [isLogin]);

  return {
    isLogin,
    setIsLogin,
  };
};
