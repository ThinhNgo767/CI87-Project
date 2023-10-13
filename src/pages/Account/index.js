import "./style.css"
import Infomation from './components/Infomation';
import Regulation from "./components/Regulation";

import { useState } from "react";
import { Link } from "react-router-dom";
;

const Account = ({ users,isLogin }) => {
const [active,setActive]= useState("info")

  return (
    <div className="account">
      <div className="navigate">
        <Link to="#" onClick={()=>setActive("info")} className={active === "info" ?"navigate-active":""}>thành viên</Link>
        <span>|</span>
        <Link to="#" onClick={()=>setActive("regula")}className={active === "regula" ? "navigate-active":""}>quy định </Link>
      </div>
       {active === "info" && <Infomation  users={users} isLogin={isLogin}/> } 
       {active === "regula" && <Regulation /> } 
    </div>
  );

};

export default Account;