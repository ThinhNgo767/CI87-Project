import "./style.css";
import Login from "./components/Login";
import Register from "./components/Register";

import { useEffect } from "react";

const LoginRegister = ({ setUsers,handleLogin ,setLoading}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="login-register">
      <Login handleLogin={handleLogin}/>

      <Register setUsers={setUsers} handleLogin={handleLogin} setLoading={setLoading} />
    </div>
  );
};

export default LoginRegister;
