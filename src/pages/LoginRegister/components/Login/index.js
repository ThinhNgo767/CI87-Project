import { Link, useNavigate } from "react-router-dom";

import { useInput } from "../../../../hooks/useInput";
import { useState } from "react";

const Login = ({ users, setIsLogin, handleLogin }) => {
  const email = useInput();
  const password = useInput();
  const [showPass, setShowPass] = useState(false);

  const navigate = useNavigate();

  const useLogin = () => {
    const login = handleLogin(users, email.value, password.value);
    if (login) {
      navigate("/tai-khoan");
      setIsLogin(true);
  
    }
    return;
  };

  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  return (
    <div className="container-login">
      <h2 className="login-title">đăng nhập</h2>
      <form className="login" onSubmit={useLogin}>
        <label htmlFor="login-email">
          Email (*)
          <input
            type="email"
            id="login-email"
            value={email.value}
            autoComplete="current-email"
            onChange={email.onChange}
            required
          />
        </label>
        
        <label htmlFor="login-password">
          Mật khẩu (*)
          <input
            type={showPass ? "text" : "password"}
            id="login-password"
            value={password.value}
            autoComplete="login-password"
            onChange={password.onChange}
            required
          />
        </label>
        <div className="login-show-pass">
        <label htmlFor="show-pass" className="show-pass">
          
          <input
            type="checkbox"
            id="show-pass"
            checked={showPass}
            onChange={handleShowPass}
            autoComplete="checkbox"
          />
          hide/show password
        </label>
        </div>
        
        <div className="login-button">
          <button type="submit" title="login">
            Đăng Nhập
          </button>
          <Link to="/reset-password">Quên mật khẩu</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
