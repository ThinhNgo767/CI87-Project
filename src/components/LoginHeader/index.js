
import { useState, useRef, useEffect } from "react";
import { Link ,useNavigate} from "react-router-dom";
import Cookies from "js-cookie";

const LoginHeader = ({users,setIsLogin}) => {
  const [openLogin, setOpenLogin] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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

  const handleLogin = () => {
    const expirationDateToken = new Date();
    expirationDateToken.setTime(expirationDateToken.getTime() + 30 * 60 * 1000);
    const options = { expires: expirationDateToken };

    const isUser = users.find(
      (user) => email === user.email && password === user.password
    );
    
    if (isUser) {
      const encodedEmail = btoa(isUser.email);
      Cookies.set("token", encodedEmail, options);
      setEmail("")
      setPassword("")
      setIsLogin(true)
      navigate("/")
    }
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
              <input type="text" className="email-login" onChange={(e)=> setEmail(e.target.value)} placeholder="Email" required/>
              <input type="password" placeholder="Password" onChange={(e)=> setPassword(e.target.value)} required/>
              <div className="form-login-item">
                <button type="submit" onClick={handleLogin} className="form-button-login header_button--style">ĐĂNG NHẬP</button>
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
