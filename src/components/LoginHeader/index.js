
import { useState, useRef, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";

const LoginHeader = () => {
  const [openLogin, setOpenLogin] = useState(false);
  const loginRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (loginRef.current && !loginRef.current.contains(e.target)) {
        setOpenLogin(false);
      }
    };

    document.addEventListener("click", handleClickOutside, true);

    return () => {
      document.removeEventListener("click", handleClickOutside, true);
    };
  }, []);

  const openFromLogin = () => {
    setOpenLogin(!openLogin);
  };

  const handleSignUpClick = () => {
    navigate("/dang-ky");
    setOpenLogin(false)
  };

  return (
    <div className="login_header" ref={loginRef}>
      {openLogin ? (
        <>
          <button
            type="button"
            className="header_button_login header_button--style"
            onClick={openFromLogin}
          >
            ĐĂNG NHẬP
          </button>
          
            <form className="from-login">
              <input type="text" className="email-login" placeholder="Email"/>
              <input type="text" placeholder="Password"/>
              <div className="form-login-item">
                <button type="button" className="form-button-login header_button--style">ĐĂNG NHẬP</button>
                <Link to="/reset-password">Quên mật khẩu</Link>
              </div>
              <button type="button" onClick={handleSignUpClick} className="form-button-sigup header_button--style">ĐĂNG KÝ THÀNH VIÊN</button>
            </form>
         
        </>
      ) : (
        <>
          <button
            type="button"
            className="header_button_login header_button--style"
            onClick={openFromLogin}
          >
            ĐĂNG NHẬP
          </button>
        </>
      )}
    </div>
  );
};

export default LoginHeader;
