import "./style.css";
import Provinces from "./components/Provinces";

import { Link } from "react-router-dom";

const LoginRegister = () => {
  return (
    <div className="login-register">
      <div className="container-login">
      <h2 className="login-title">đăng nhập</h2>
      <form className="login">
        <label htmlFor="login-email">
          Email (*)
          <input type="email" id="login-email" required />
        </label>
        <label htmlFor="login-password">
          Mật khẩu (*)
          <input type="password" id="login-password" required />
        </label>
        <div className="login-button">
          <button type="button">Đăng Nhập</button>
          <Link to="/reset-password">Quên mật khẩu</Link>
        </div>
      </form>
      </div>
      
      <div className="container-register">
      <h2 className="register-title">đăng ký mới</h2>
      <form className="register">
        <label htmlFor="register-fistname">
          Họ (*)
          <input type="text" id="register-fistname" required />
        </label>
        <label htmlFor="register-lastname">
          Tên Đệm (*)
          <input type="text" id="register-lastname" required />
        </label>
        <label htmlFor="register-email">
          Email (*)
          <input type="email" id="register-email" required />
        </label>
        <label htmlFor="register-password">
          Mật khẩu (*)
          <input type="password" id="register-password" required />
        </label>
        <label htmlFor="register-reenter-password">
          Nhập lại mật khẩu (*)
          <input type="password" id="register-reenter-password" required />
        </label>
        <label htmlFor="register-phone">
          Số điện thoại (*)
          <input type="text" id="register-phone" required />
        </label>
        <label htmlFor="register-birthday">
          Ngày sinh
          <input type="date" id="register-birthday"/>
        </label>
        <Provinces />
        <label htmlFor="register-address">
          Số nhà
          <input type="text" id="register-address"/>
        </label>
        <div className="acceps-regulation">
        <label htmlFor="acceps"><input type="checkbox" id="acceps"/>Tôi đã đọc, hiểu và đồng ý với các điều khoản</label>
        </div>
        <button type="button">Đăng Ký</button>
      </form>
      
      </div>
      
    </div>
    
  );
};

export default LoginRegister;
