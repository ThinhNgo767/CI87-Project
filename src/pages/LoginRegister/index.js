import "./style.css";
import Login from "./components/Login";
import Register from "./components/Register";
import { handleLogin } from "../../utils/login";

import { useEffect } from "react";


const LoginRegister = ({ users,setUsers,isLogin, setIsLogin }) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  

  return (
    <div className="login-register">
      <Login users={users} isLogin={isLogin} setIsLogin={setIsLogin} handleLogin={handleLogin}/>

      <Register users={users} setUsers={setUsers} isLogin={isLogin} setIsLogin={setIsLogin}  />
    </div>
  );
};

export default LoginRegister;
