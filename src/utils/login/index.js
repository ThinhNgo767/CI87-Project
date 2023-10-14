import { alertSuccess, alertError } from "../alert";
import Cookies from "js-cookie";

export const handleLogin = (data, email, password) => {
  const encodedEmail = btoa(email);
  const isUser = data.find(
    (user) => email === user.email && password === user.password
  );
  if (isUser) {
    alertSuccess("Đăng nhập thành công");
    return Cookies.set("token", encodedEmail, {
      expires: new Date(Date.now() + 30 * 60 * 1000),
    });
  } else {
    alertError("Sai email hoặc password");
    return ;
  }
};
